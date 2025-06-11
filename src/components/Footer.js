import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ConstLens</h3>
            <p>Building brands that matter. We help businesses find their unique path and create meaningful connections with their audience.</p>
            <div className="social-links">
              <a href="#" className="social-link">
                <span>📘</span>
              </a>
              <a href="#" className="social-link">
                <span>📷</span>
              </a>
              <a href="#" className="social-link">
                <span>🐦</span>
              </a>
              <a href="#" className="social-link">
                <span>💼</span>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Logo Design</a></li>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Social Media</a></li>
              <li><a href="#services">Photography</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📧 hello@constlens.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Creative Street<br />Design City, DC 12345</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 ConstLens. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 