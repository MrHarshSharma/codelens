import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
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
                <p>hello@constlens.com</p>
              </div>
            </div> */}
            <div className="contact-item">
              <div className="contact-avatar">
                <span>📞</span>
              </div>
              <div className="contact-details">
                <h4>Call Us</h4>
                <a href="tel:+919665654326">+91 96656 54326</a>
                <a href="tel:+919568265034">+91 95682 65034</a>
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
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
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
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 