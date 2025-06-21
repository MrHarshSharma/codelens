import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { trackContactFormSubmit, trackPhoneClick, trackFormInteraction } from '../utils/analytics';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFieldFocus = (fieldName) => {
    trackFormInteraction(fieldName, 'focus');
  };

  const handleFieldBlur = (fieldName) => {
    trackFormInteraction(fieldName, 'blur');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Track form submission
    trackContactFormSubmit(formData.service);

    // EmailJS configuration
    const serviceID = 'service_0f60y2d'; // You'll need to replace this
    const templateID = 'template_hxjfn8i'; // You'll need to replace this
    const publicKey = 'z2IJB9Etl8d-KK-Zs'; // You'll need to replace this

    const templateParams = {
      from_phone: formData.phone,
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'prysmgrid Team',
      service_type: formData.service,
      message: formData.message,
      reply_to: formData.email,
    };

    try {
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );
      
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('FAILED...', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const handlePhoneClick = (phoneNumber) => {
    trackPhoneClick(phoneNumber);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2>Let's Build Something <span className="highlight">Amazing</span> Together</h2>
          <p>Ready to elevate your brand? Get in touch and let's discuss your project.</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            {/* <div className="contact-item">
              <div className="contact-avatar">
                <span>📧</span>
              </div>
              <div className="contact-details">
                <h4>Email Us</h4>
                <p>hello@prysmgrid.com</p>
              </div>
            </div> */}
            <div className="contact-item">
              <div className="contact-avatar">
                <span>📞</span>
              </div>
              <div className="contact-details">
                <h4>Call Us</h4>
                <a 
                  href="tel:+919665654326"
                  onClick={() => handlePhoneClick('+919665654326')}
                >
                  +91 96656 54326
                </a>
                <a 
                  href="tel:+919568265034"
                  onClick={() => handlePhoneClick('+919568265034')}
                >
                  +91 95682 65034
                </a>
              </div>
            </div>
            {/* <div className="contact-item">
              <div className="contact-avatar">
                <span>📍</span>
              </div>
              <div className="contact-details">
                <h4>Visit Us</h4>
                <p>123 Creative Street<br />Design City, DC 12345</p>
              </div>
            </div> */}
            <div className="contact-item">
              <div className="contact-avatar">
                <span>⏰</span>
              </div>
              <div className="contact-details">
                <h4>Business Hours</h4>
                <p>Everyday: 9AM - 6PM</p>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFieldFocus('name')}
                  onBlur={() => handleFieldBlur('name')}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFieldFocus('email')}
                  onBlur={() => handleFieldBlur('email')}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => handleFieldFocus('phone')}
                  onBlur={() => handleFieldBlur('phone')}
                  disabled={isSubmitting}
                  pattern="[0-9]{10}"
                  required
                  title="Please enter a valid 10-digit phone number"
                />
              </div>
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onFocus={() => handleFieldFocus('service')}
                  onBlur={() => handleFieldBlur('service')}
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select a Service</option>
                  <option value="logo-design">Logo Design</option>
                  <option value="web-development">Website & App Development</option>
                  <option value="social-media">Social Media Presence</option>
                  <option value="photography">Product Photography</option>
                  <option value="complete-package">Complete Package</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFieldFocus('message')}
                  onBlur={() => handleFieldBlur('message')}
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  <span>✅</span>
                  <p>Thank you! Your message has been sent successfully. We'll get back to you soon!</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  <span>❌</span>
                  <p>Sorry, there was an error sending your message. Please try again or call us directly.</p>
                </div>
              )}
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 