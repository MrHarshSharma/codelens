import React from 'react';
import './About.css';
import { trackAboutInteraction, trackCTAClick } from '../utils/analytics';

const About = () => {
  const handleValueInteraction = (valueName) => {
    trackAboutInteraction('value_hover', valueName);
  };

  const handleGalleryInteraction = (itemName) => {
    trackAboutInteraction('gallery_hover', itemName);
  };

 

  return (
    <section id="about" className="about">
      <div className="about-decoration"></div>
      <div className="about-decoration"></div>
      
      <div className="container">
        <div className="about-container">
          
          
          <div className="about-visual">
            {/* <div className="creative-gallery">
              <div 
                className="gallery-item"
                onMouseEnter={() => handleGalleryInteraction('Design')}
              >
                🎨
              </div>
              <div 
                className="gallery-item"
                onMouseEnter={() => handleGalleryInteraction('Code')}
              >
                💻
              </div>
              <div 
                className="gallery-item"
                onMouseEnter={() => handleGalleryInteraction('Strategy')}
              >
                🎯
              </div>
              <div 
                className="gallery-item"
                onMouseEnter={() => handleGalleryInteraction('Innovation')}
              >
                ⚡
              </div>
              <div 
                className="gallery-item"
                onMouseEnter={() => handleGalleryInteraction('Growth')}
              >
                📈
              </div>
              <div 
                className="gallery-item"
                onMouseEnter={() => handleGalleryInteraction('Success')}
              >
                🏆
              </div>
            </div> */}
            
            {/* <div className="team-highlight">
              <div className="team-avatars">
                <div className="team-avatar">🎨</div>
                <div className="team-avatar">💻</div>
                <div className="team-avatar">🚀</div>
              </div>
              <div className="team-text">Creative Team</div>
            </div> */}

            <div className="about-values">
              <div 
                className="value-item"
                onMouseEnter={() => handleValueInteraction('Creative Vision')}
              >
                <div className="value-icon">🎨</div>
                <div className="value-title">Creative Vision</div>
                <div className="value-description">We see beyond the ordinary to create extraordinary digital experiences</div>
              </div>
              
              <div 
                className="value-item"
                onMouseEnter={() => handleValueInteraction('Lightning Fast')}
              >
                <div className="value-icon">⚡</div>
                <div className="value-title">Lightning Fast</div>
                <div className="value-description">Optimized performance that keeps your audience engaged and coming back</div>
              </div>
              
              <div 
                className="value-item"
                onMouseEnter={() => handleValueInteraction('Future Ready')}
              >
                <div className="value-icon">🚀</div>
                <div className="value-title">Future Ready</div>
                <div className="value-description">Built with tomorrow's technology, designed for today's needs</div>
              </div>
              
              <div 
                className="value-item"
                onMouseEnter={() => handleValueInteraction('Smart Solutions')}
              >
                <div className="value-icon">🧠</div>
                <div className="value-title">Smart Solutions</div>
                <div className="value-description">Intelligent design decisions backed by data and user insights</div>
              </div>
            </div>
          </div>

          <div className="about-content">
            <div className="about-badge">
              <span>🎨 Our Creative Process</span>
            </div>
            
            <h2>We're Passionate <span className="text-gradient">Creators</span> Building Digital Magic</h2>
            
            <p className="about-description">
              Our team combines artistic vision with technical expertise to create digital experiences that don't just look beautiful—they tell stories, evoke emotions, and drive meaningful results for your business.
            </p>
            
          
            
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 