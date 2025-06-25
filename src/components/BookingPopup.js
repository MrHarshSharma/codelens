import React, { useState, useEffect } from 'react';
import './BookingPopup.css';
import { trackCTAClick, trackExternalLink } from '../utils/analytics';

const BookingPopup = ({ isVisible, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ minutes: 15, seconds: 0 });

  // Disable/enable page scrolling when popup is visible
  useEffect(() => {
    if (isVisible) {
      // Save current scroll position
      const scrollY = window.scrollY;
      
      // Disable scrolling
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling and restore position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup function to ensure scrolling is re-enabled
    return () => {
      if (isVisible) {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        
        if (scrollY) {
          window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
      }
    };
  }, [isVisible]);

  // Countdown timer for urgency
  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          clearInterval(timer);
          return { minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible]);

  // Animation effect when popup appears
  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Handle escape key to close popup
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isVisible) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isVisible, onClose]);

  const handleBookNowClick = () => {
    trackCTAClick('Book Free Consultation', 'booking_popup', 'limited_offer');
    
    // Close popup first
    onClose();
    
    // Delay scrolling to ensure popup closes and scroll is re-enabled
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const headerHeight = window.innerWidth <= 768 ? 70 : 64;
        const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 500);
  };

  const handleCallNowClick = () => {
    trackExternalLink('tel:9665654326', 'booking_popup', 'call_now');
    
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerHeight = window.innerWidth <= 768 ? 70 : 64;
      const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close popup first, then make the call
    onClose();
    
    // Small delay to ensure popup closes before initiating call
    setTimeout(() => {
      window.location.href = 'tel:+1234567890';
    }, 300);
  };

  const handleWhatsAppClick = () => {
    trackExternalLink('https://wa.me/1234567890', 'booking_popup', 'whatsapp_chat');
    window.open('https://wa.me/1234567890?text=Hi! I saw your special offer and would like to discuss my branding project.', '_blank');
  };

  const handleCloseClick = () => {
    onClose();
  };

  // Handle overlay click to close popup
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`booking-popup-overlay ${isAnimating ? 'animate-in' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className="booking-popup">
        <button className="popup-close" onClick={handleCloseClick} aria-label="Close popup">
          ✕
        </button>
        
        <div className="popup-header">
          <div className="offer-badge">
            <span className="badge-icon">🎉</span>
            <span>Limited Time Offer</span>
          </div>
          
          <h3 className="popup-title">
            Get Your Brand to the <span className="highlight">Next Level!</span>
          </h3>
          
          <p className="popup-subtitle">
            Book your FREE consultation today and receive exclusive bonuses worth ₹1598
          </p>
        </div>

        <div className="offer-details">
          <div className="countdown-timer">
            <div className="timer-label">Offer expires in:</div>
            <div className="timer-display">
              <span className="time-unit">
                <span className="time-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="time-label">min</span>
              </span>
              <span className="time-separator">:</span>
              <span className="time-unit">
                <span className="time-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="time-label">sec</span>
              </span>
            </div>
          </div>

          <div className="bonus-list">
            <h4>What You'll Get:</h4>
            <ul>
              <li>
                <span className="bonus-icon">✨</span>
                <span>FREE Brand Strategy Session (Worth ₹599)</span>
              </li>
              <li>
                <span className="bonus-icon">🎨</span>
                <span>Complimentary Logo Concepts (Worth ₹999)</span>
              </li>
              <li>
                <span className="bonus-icon">🚀</span>
                <span>30-Day Action Plan (Priceless)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="popup-actions">
          <button className="btn-primary popup-btn" onClick={handleBookNowClick}>
            <span className="btn-icon">📅</span>
            <span>Book Free Consultation</span>
          </button>
          
          <div className="contact-options">
            <button className="btn-secondary contact-btn" onClick={handleCallNowClick}>
              <span className="btn-icon">📞</span>
              <span>Call Now</span>
            </button>

          </div>
        </div>

        <div className="popup-footer">
          {/* <div className="trust-indicators">
            <div className="trust-item">
              <span className="trust-icon">⭐</span>
              <span>4.9/5 Rating</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">🏆</span>
              <span>50+ Projects</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">🚀</span>
              <span>24hr Response</span>
            </div>
          </div> */}
          
          <p className="disclaimer">
            * Offer valid for new clients only. Limited slots available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingPopup; 