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

  // 1. Send the generated code using your dedicated OTP Google Script
  const handleVerifyEmailClick = async () => {
    const isEmailValid = await trigger('email');
    if (!isEmailValid) return;

    const emailAddress = getValues('email');
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(randomOtp);

    try {
      setIsSendingOtp(true);
      
      // Post directly to your VITE_OTP_SCRIPT_URL
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

  // 2. Validate OTP code match locally
  const handleOtpVerificationCheck = () => {
    const combinedInputString = otpInputs.join('');
    if (combinedInputString === generatedOtp) {
      toast.success('Identity successfully verified!');
      setIsOtpVerified(true);
      setShowOtpModal(false); 
    } else {
      toast.error('The code entered is invalid. Please try again.');
    }
  };

  const onSubmit = async (data) => {
    if (!isOtpVerified) {
      toast.error('You must verify your email identity before submitting.');
      return;
    }
  
    try {
      setDisabled(true);
  
      // Use native FormData instance for structural layout stability
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('subject', data.subject);
      formData.append('message', data.message);
  
      // Dispatch via no-cors mode using raw form multi-part structures
      await fetch(primaryFormScriptUrl, {
        method: 'POST',
        mode: 'no-cors', 
        body: formData,
      });
  
      // Under 'no-cors', execution bypasses explicit response status checks.
      // If the runtime context does not crash out to the catch block, process as success.
      reset();
      setIsOtpVerified(false); 
      setOtpInputs(new Array(6).fill(""));
      toastifySuccess();
    } catch (e) {
      console.error('Submission error details:', e);
      toast.error('Form could not be processed. Please try again later.');
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
    <div className='ContactInfo position-relative' id="contact-section">
      <main className="flex-shrink-0 position-relative">
        <div className="rotating-bg-container">
          <div className="rotating-bg-image"></div>
        </div>
        <div className="get-in-touch text-center">
          <h1>Get In Touch</h1>
          <p className="text-white lead">The dedication and the strength to any work will be given with integrity.</p>
        </div>

        <div className='container position-relative' style={{ zIndex: 10 }}>
          <div className='row' data-aos="fade-up" data-aos-delay='0.2s'>
            
            <div className='office-info text-center text-white col-lg-4 mb-4'>
              <div className='office-card project-card '>
                <h3>Office</h3>
                <p><i className="fa fa-map-marker-alt me-2"></i>Utawala - Githunguri</p>
                <p>PO BOX 2200-0100 Nairobi</p>
                <div className='d-flex flex-column gap-2'>
                  <a href="mailto:dennisambesa63@gmail.com"><i className="fa fa-envelope-square me-2"></i> dennisambesa63@gmail.com</a>
                  <a href="tel:+254799964580"><i className="fa fa-phone me-2"></i> +254 799 964 580</a>
                </div>
              </div>
            </div>

            <div className='contact-form col-lg-8'>
              <div className='contact-card card shadow border-0'>
                <h2 className='text-light'>Contact Me</h2>
                <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                  
                  <div className='mb-3'>
                    <input
                      type='text'
                      disabled={isOtpVerified}
                      {...register('name', { required: 'Name is required', maxLength: 30 })}
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      placeholder='Name'
                    />
                    {errors.name && <div className='invalid-feedback'>{errors.name.message}</div>}
                  </div>

                  <div className='mb-3'>
                    <div className="input-group">
                      <input
                        type='email'
                        disabled={isOtpVerified}
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                        })}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder='Email address'
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

                  <div className='mb-3'>
                    <input
                      type='text'
                      disabled={!isOtpVerified}
                      {...register('subject', { required: 'Subject is required' })}
                      className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                      placeholder={isOtpVerified ? 'Subject/address' : 'Verify your email first'}
                    />
                    {errors.subject && <div className='invalid-feedback'>{errors.subject.message}</div>}
                  </div>

                  <div className='mb-3'>
                    <textarea
                      rows={4}
                      disabled={!isOtpVerified}
                      {...register('message', { required: 'Please enter a message' })}
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      placeholder={isOtpVerified ? 'Your Message / Delivery Details' : 'Verify your email first'}
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

      {/* Pop-up Overlay Dialog Component View Block */}
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