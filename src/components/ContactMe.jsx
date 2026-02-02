import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import '../css/contactus.css';
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);

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

  const onSubmit = async (data) => {
    try {
      setDisabled(true);
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        data,
        import.meta.env.VITE_USER_ID
      );

      reset();
      toastifySuccess();
      setDisabled(false);
    } catch (e) {
      console.error(e);
      toast.error('Something went wrong. Please try again.');
      setDisabled(false);
    }
  };

  return (
    <div className='ContactInfo position-relative' id="contact-section">
      <main className="flex-shrink-0 position-relative">
        {/* Animated Background Layer */}
        <div className="rotating-bg-container">
          <div className="rotating-bg-image"></div>
        </div>
        <div className="get-in-touch text-center">
          <h1>Get In Touch</h1>
          <p className="text-white lead">The dedication and the strength to any work will be given with integrity.</p>
        </div>

        <div className='container position-relative'>
          <div className='row'>
            
            {/* Section 1: Office Info */}
            <div className='office-info text-center text-white col-lg-4 mb-4'>
              <div className='office-card project-card '>
                <h3>Office</h3>
                <p><i className="fa fa-map-marker-alt me-2"></i>Utawala - Githunguri</p>
                <p>PO BOX 2200-0100 Nairobi</p>
                
                <div className='d-flex flex-column gap-2'>
                  <a href="mailto:dennisambesa63@gmail.com">
                    <i className="fa fa-envelope-square me-2"></i> dennisambesa63@gmail.com
                  </a>
                  <a href="tel:+254799964580">
                    <i className="fa fa-phone me-2"></i> +254 799 964 580
                  </a>
                  <a href="tel:+254769579340">
                    <i className="fa fa-phone me-2"></i> +254 769 579 340
                  </a>
                </div>
              </div>
            </div>

            {/* Section 2: Contact Form */}
            <div className='contact-form col-lg-8'>
              <div className='contact-card card shadow border-0'>
                <h2>Contact Me</h2>
                <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                  
                  <div className='mb-3'>
                    <input
                      type='text'
                      {...register('name', { required: 'Name is required', maxLength: 30 })}
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      placeholder='Name'
                    />
                    {errors.name && <div className='invalid-feedback'>{errors.name.message}</div>}
                  </div>

                  <div className='mb-4'>
                    <input
                      type='email'
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                      })}
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder='Email address'
                    />
                    {errors.email && <div className='invalid-feedback'>Please enter a valid email</div>}
                  </div>

                  <div className='mb-3'>
                    <input
                      type='text'
                      {...register('subject', { required: 'Subject is required' })}
                      className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                      placeholder='Subject / Wallet Address'
                    />
                    {errors.subject && <div className='invalid-feedback'>{errors.subject.message}</div>}
                  </div>

                  <div className='mb-3'>
                    <textarea
                      rows={4}
                      {...register('message', { required: 'Please enter a message' })}
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      placeholder='Your Message / Delivery Details'
                    ></textarea>
                    {errors.message && <div className='invalid-feedback'>{errors.message.message}</div>}
                  </div>

                  <div className="d-grid">
                    <button className='btn btn-warning btn-lg fw-bold' disabled={disabled} type='submit'>
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
      <ToastContainer />
    </div>
  );
};

export default ContactForm;