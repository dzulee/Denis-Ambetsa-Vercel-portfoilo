import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/contactus.css';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    trigger,
    formState: { errors }
  } = useForm();

  // Control hooks management
  const [disabled, setDisabled] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [isSendingOtp, setIsSendingOtp] = useState(false);

  // OTP internal functional states
  const [otpInputs, setOtpInputs] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  // Fetch Environment Keys for both Google Scripts
  const primaryFormScriptUrl = import.meta.env.VITE_CONTACT_SCRIPT_URL;
  const otpServiceScriptUrl = import.meta.env.VITE_OTP_SCRIPT_URL;

  const toastifySuccess = () => {
    toast.success('Form sent successfully!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
    });
  };

  // 1. Send generated code using dedicated OTP Google Script
  const handleVerifyEmailClick = async () => {
    // Ensure both name, phone, and email are filled before sending OTP
    const isNameValid = await trigger('name');
    const isPhoneValid = await trigger('phone');
    const isEmailValid = await trigger('email');

    if (!isNameValid || !isPhoneValid || !isEmailValid) {
      toast.error('Please complete Name, Phone, and Email before verifying.');
      return;
    }

    const emailAddress = getValues('email');
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(randomOtp);

    try {
      setIsSendingOtp(true);
      
      await fetch(otpServiceScriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          email: emailAddress,
          otp: randomOtp
        }).toString(),
      });

      toast.info('Verification security code dispatched to mailbox.');
      setShowOtpModal(true); 
    } catch (err) {
      console.error('OTP Script execution error:', err);
      toast.error('Unable to send code. Please try again.');
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleOtpVerificationCheck = () => {
    const combinedInputString = otpInputs.join('');
    if (combinedInputString === generatedOtp) {
      toast.success('Identity successfully verified!');
      setIsOtpVerified(true);
      setShowOtpModal(false); 

      // Focus subject input immediately after unlocking
      setTimeout(() => {
        const subjectInput = document.querySelector('input[name="subject"]');
        if (subjectInput) subjectInput.focus();
      }, 50);
    } else {
      toast.error('The code entered is invalid. Please try again.');
    }
  };

  const focusFormField = (fieldName) => {
    const field = document.querySelector(`#contact-form [name="${fieldName}"]`);
    if (field) field.focus();
  };

  const handleFieldKeyDown = (event, nextField, action) => {
    if (event.key !== 'Enter' || (event.target.tagName === 'TEXTAREA' && event.shiftKey)) return;

    event.preventDefault();
    if (action) {
      action();
    } else if (nextField) {
      focusFormField(nextField);
    }
  };

  const handleOtpPaste = (event) => {
    event.preventDefault();
    const pastedCode = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pastedCode) return;

    const updatedArr = new Array(6).fill('');
    pastedCode.split('').forEach((digit, index) => {
      updatedArr[index] = digit;
    });
    setOtpInputs(updatedArr);

    const focusIndex = Math.min(pastedCode.length, 5);
    inputRefs.current[focusIndex].focus();
  };

  // 3. Form submission
  const onSubmit = async () => {
    if (!isOtpVerified) {
      toast.error('You must verify your email identity before submitting.');
      return;
    }

    // Force extraction using getValues() to guarantee phone is included
    const values = getValues();

    try {
      setDisabled(true);

      const formData = new FormData();
      formData.append('name', values.name || '');
      formData.append('phone', values.phone || '');
      formData.append('email', values.email || '');
      formData.append('subject', values.subject || '');
      formData.append('message', values.message || '');

      await fetch(primaryFormScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      reset();
      setIsOtpVerified(false);
      setOtpInputs(new Array(6).fill(""));
      toastifySuccess();

    } catch (e) {
      console.error('Submission error:', e);
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setDisabled(false);
    }
  };

  const handleOtpChange = (element, index) => {
    const val = element.value;
    if (!/^[0-9]$/.test(val) && val !== "") return;

    const updatedArr = [...otpInputs];
    updatedArr[index] = val;
    setOtpInputs(updatedArr);

    if (val && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (otpInputs.every(Boolean)) {
        handleOtpVerificationCheck();
      } else if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
      return;
    }

    if (e.key === 'Backspace') {
      if (!otpInputs[index] && index > 0) {
        inputRefs.current[index - 1].focus();
      } else {
        const updatedArr = [...otpInputs];
        updatedArr[index] = "";
        setOtpInputs(updatedArr);
      }
    }
  };

  return (
    <div className='ContactInfo contact-section position-relative' id="contact-section">
      <main className="flex-shrink-0 position-relative">
        <div className="rotating-bg-container">
          <div className="rotating-bg-image"></div>
        </div>
        <div className="get-in-touch text-center">
          <p className="contact-eyebrow">Let&apos;s build what matters</p>
          <h1>Make your next move count</h1>
          <p className="contact-lead">Have a project, challenge, or idea in mind? Let&apos;s turn it into a clear plan and a useful digital result.</p>
        </div>

        <div className='container position-relative' style={{ zIndex: 10 }}>
          <div className='row' data-aos="fade-up" data-aos-delay='0.2s'>
            
            <div className='office-info text-center text-white col-lg-4 mb-4'>
              <div className='office-card text-white'>
                <p className="contact-card-kicker">Find your way to us</p>
                <h2>Office details</h2>
                <div className='card-detail'>
                  <h3>Address</h3>
                  <p><i className="fa fa-map-marker-alt me-2"></i>Utawala - Githunguri</p>
                  <p>PO BOX 2200-0100 Nairobi</p>
                </div>
                <div className='card-detail d-flex flex-column gap-2 text-white'>
                  <h3>Email</h3>
                  <div>
                    <a href="mailto:dennisambesa63@gmail.com"><i className="fa fa-envelope-square me-2"></i> dennisambesa63@gmail.com</a>
                  </div>
                  <div>
                    <a href="mailto:dennisambesa36@gmail.com"><i className="fa fa-envelope-square me-2"></i> dennisambesa36@gmail.com</a>
                  </div>
                </div>
                <div className='card-detail text-white'>
                  <h3>Phone</h3>
                  <div><a href="tel:+254799964580"><i className="fa fa-phone me-2"></i> +254 799 964 580</a></div>
                  <div><a href="tel:+254769579340"><i className="fa fa-phone me-2"></i> +254 769 579 340</a></div>
                </div>
              </div>
            </div>

            <div className='contact-form col-lg-8'>
              <div className='contact-card card shadow border-0'>
                <p className="contact-card-kicker">Start the conversation</p>
                <h2 className='text-light'>Tell us what you&apos;re building</h2>
                <p className="contact-form-intro">Verify your email, then share a few details and we&apos;ll get back to you with the right next step.</p>
                <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                  
                  {/* Name Input */}
                  <div className='mb-3'>
                    <input
                      type='text'
                      readOnly={isOtpVerified}
                      {...register('name', { required: 'Name is required', maxLength: 30 })}
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      placeholder='Name'
                      onKeyDown={(event) => handleFieldKeyDown(event, 'phone')}
                    />
                    {errors.name && <div className='invalid-feedback'>{errors.name.message}</div>}
                  </div>

                  {/* Phone Input */}
                  <div className='mb-3'>
                    <input
                      type='tel'
                      readOnly={isOtpVerified}
                      {...register('phone', { required: 'Phone number is required', maxLength: 20 })}
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      placeholder='Phone'
                      onKeyDown={(event) => handleFieldKeyDown(event, 'email')}
                    />
                    {errors.phone && <div className='invalid-feedback'>{errors.phone.message}</div>}
                  </div>

                  {/* Email & Verify Input Group */}
                  <div className='mb-3'>
                    <div className="input-group">
                      <input
                        type='email'
                        readOnly={isOtpVerified}
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                        })}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder='Email address'
                        onKeyDown={(event) => handleFieldKeyDown(
                          event,
                          isOtpVerified ? 'subject' : null,
                          isOtpVerified ? null : handleVerifyEmailClick
                        )}
                      />
                      <button 
                        type="button" 
                        className={`btn ${isOtpVerified ? 'btn-success' : 'btn-warning'} fw-bold`}
                        onClick={handleVerifyEmailClick}
                        disabled={isOtpVerified || isSendingOtp || disabled}
                      >
                        {isSendingOtp ? <span className="spinner-border spinner-border-sm"></span> : (isOtpVerified ? 'Verified ✓' : 'Verify')}
                      </button>
                    </div>
                    {errors.email && <div className="text-danger mt-1" style={{fontSize: '0.875em'}}>Please enter a valid email address</div>}
                  </div>

                  {/* Subject Input */}
<div className='mb-3'>
  <input
    type='text'
    tabIndex={isOtpVerified ? 0 : -1}
    style={{
      pointerEvents: isOtpVerified ? 'auto' : 'none',
      opacity: isOtpVerified ? 1 : 0.65,
      backgroundColor: isOtpVerified ? '#ffffff' : '#e9ecef'
    }}
    {...register('subject', { required: 'Subject is required' })}
    className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
    placeholder={isOtpVerified ? 'Enter Subject / Address' : '🔒 Verify email above to unlock'}
    onKeyDown={(event) => handleFieldKeyDown(event, 'message')}
  />
  {errors.subject && <div className='invalid-feedback'>{errors.subject.message}</div>}
</div>

{/* Message Input */}
<div className='mb-3'>
  <textarea
    rows={4}
    tabIndex={isOtpVerified ? 0 : -1}
    style={{
      pointerEvents: isOtpVerified ? 'auto' : 'none',
      opacity: isOtpVerified ? 1 : 0.65,
      backgroundColor: isOtpVerified ? '#ffffff' : '#e9ecef'
    }}
    {...register('message', { required: 'Please enter a message' })}
    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
    placeholder={isOtpVerified ? 'Type your message or delivery details here...' : '🔒 Verify email above to unlock'}
    onKeyDown={(event) => handleFieldKeyDown(event, null, () => handleSubmit(onSubmit)())}
  ></textarea>
  {errors.message && <div className='invalid-feedback'>{errors.message.message}</div>}
</div>  

                  <div className="d-grid">
                    <button className='btn btn-warning btn-lg fw-bold' disabled={disabled || !isOtpVerified} type='submit'>
                      {disabled ? (
                        <><span className="spinner-border spinner-border-sm me-2"></span>Sending...</>
                      ) : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* OTP Modal Overlay */}
      {showOtpModal && (
        <div className="otp-modal-overlay">
          <div className="otp-modal-card">
            <h2>Verify Your Identity</h2>
            <p>We sent a 6-digit verification code to your device. Enter it below to proceed.</p>
            
            <div className="otp-wrapper">
              {otpInputs.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="otp-input"
                  inputMode="numeric"
                  value={data}
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleOtpChange(e.target, index)}
                  onKeyDown={(e) => handleOtpKeyDown(e, index)}
                  onPaste={handleOtpPaste}
                />
              ))}
            </div>

            <button 
              className="btn btn-primary w-100 fw-bold py-2 mb-2"
              disabled={otpInputs.some(v => v === "")}
              onClick={handleOtpVerificationCheck}
            >
              Verify OTP
            </button>
            <button 
              className="btn btn-link text-secondary btn-sm w-100"
              onClick={() => setShowOtpModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default ContactForm;