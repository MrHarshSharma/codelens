import React from 'react';
import './Hero.css';
import { trackCTAClick, trackHeroInteraction } from '../utils/analytics';

const Hero = () => {
  const handleStartProjectClick = () => {
    trackCTAClick('✨ Start Your Project', 'hero_section', 'primary_cta');
    
    // Smooth scroll to contact section
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
  };

  

  const handleShowcaseInteraction = (cardName) => {
    trackHeroInteraction('showcase_card_hover', cardName);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-decoration"></div>
      <div className="hero-decoration"></div>
      <div className="hero-decoration"></div>
      
      <div className="container">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🎨 Creative Digital Studio</span>
            </div>
            
            <h1 className="hero-title">
              We Create <span className="gradient-text">Beautiful</span><br />
              Digital Experiences
            </h1>
            
            <p className="hero-description">
              Transform your vision into stunning digital realities with our artistic approach to design and development. We craft experiences that inspire, engage, and convert.
            </p>
           
            
            <div className="hero-features">
              <div className="hero-feature">
                <span className="hero-feature-icon">🚀</span>
                <span>Fast & Modern</span>
              </div>
              <div className="hero-feature">
                <span className="hero-feature-icon">💡</span>
                <span>Creative Solutions</span>
              </div>
              <div className="hero-feature">
                <span className="hero-feature-icon">🎯</span>
                <span>Results Driven</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-showcase">
              <div 
                className="showcase-card"
                onMouseEnter={() => handleShowcaseInteraction('Design')}
              >
                <div className="showcase-icon">🎨</div>
                <div className="showcase-title">Design</div>
                <div className="showcase-subtitle">Beautiful & Functional</div>
              </div>
              
              <div 
                className="showcase-card"
                onMouseEnter={() => handleShowcaseInteraction('Development')}
              >
                <div className="showcase-icon">💻</div>
                <div className="showcase-title">Development</div>
                <div className="showcase-subtitle">Fast & Reliable</div>
              </div>
              
              <div 
                className="showcase-card"
                onMouseEnter={() => handleShowcaseInteraction('Launch')}
              >
                <div className="showcase-icon">🚀</div>
                <div className="showcase-title">Launch</div>
                <div className="showcase-subtitle">Ready to Scale</div>
              </div>
              
              <div 
                className="showcase-card"
                onMouseEnter={() => handleShowcaseInteraction('Growth')}
              >
                <div className="showcase-icon">📈</div>
                <div className="showcase-title">Growth</div>
                <div className="showcase-subtitle">Data-Driven Results</div>
              </div>
            </div>
             
            <div className="hero-actions">
              <button 
                className="hero-btn-primary"
                onClick={handleStartProjectClick}
              >
                <span>✨ Start Your Project</span>
              </button>
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 