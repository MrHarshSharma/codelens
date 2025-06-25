import React from 'react';
import './About.css';
import Team3D from './Team3D';
import { trackCTAClick } from '../utils/analytics';

const About = () => {
  const handleLearnMoreClick = () => {
    trackCTAClick('Learn More About Us', 'about_section', 'team_showcase');
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-container">
          <div className="about-content">
            
            
            <div className="about-values">
              <div className="value-item">
                <div className="value-icon">
                  <span>🎯</span>
                </div>
                <div>
                  <h3 className="value-title">Strategic Focus</h3>
                  <p className="value-description">Every decision backed by research and strategic thinking</p>
                </div>
              </div>
              
              <div className="value-item">
                <div className="value-icon">
                  <span>✨</span>
                </div>
                <div>
                  <h3 className="value-title">Creative Excellence</h3>
                  <p className="value-description">Award-winning designs that captivate and inspire</p>
                </div>
              </div>
              
              <div className="value-item">
                <div className="value-icon">
                  <span>🚀</span>
                </div>
                <div>
                  <h3 className="value-title">Innovation First</h3>
                  <p className="value-description">Cutting-edge solutions for tomorrow's challenges</p>
                </div>
              </div>
              
              <div className="value-item">
                <div className="value-icon">
                  <span>🤝</span>
                </div>
                <div>
                  <h3 className="value-title">Partnership</h3>
                  <p className="value-description">Collaborative approach that puts your success first</p>
                </div>
              </div>
            </div>
            
         
          </div>
          
          <div className="about-visual">
          <div className="about-badge">
              <span>💡</span>
              About Prysmgrid
            </div>
            <h2>
              Crafting brands that 
              <span className="text-gradient"> inspire and connect</span>
            </h2>
            <p className="about-description">
              At Prysmgrid, we believe every brand has a unique story waiting to be told. We combine strategic thinking, creative excellence, and cutting-edge technology to build brands that don't just look good—they perform exceptionally and create lasting connections with audiences.
            </p>
          <div className="about-cta">
              <button className="about-btn" onClick={handleLearnMoreClick}>
                Learn More About Us
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="about-decoration"></div>
      <div className="about-decoration"></div>
    </section>
  );
};

export default About; 