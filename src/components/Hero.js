import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Building Brands That <span className="highlight">Matter</span></h1>
            <p className="hero-subtitle">
              We help brands find their unique path, expand their customer reach, 
              and create a powerful social media presence that drives results.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Brands Built</span>
              </div>
              <div className="stat">
                <span className="stat-number">2M+</span>
                <span className="stat-label">Reach Increased</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
            <div className="hero-buttons">
              <a href="#services" className="btn-primary">Get Started</a>
              {/* <button className="btn-secondary">View Our Work</button> */}
            </div>
          </div>
          <div className="hero-visual">
            <div className="avatar-group">
              <div className="avatar avatar-1">
                <div className="avatar-icon">🎨</div>
              </div>
              <div className="avatar avatar-2">
                <div className="avatar-icon">📱</div>
              </div>
              <div className="avatar avatar-3">
                <div className="avatar-icon">📸</div>
              </div>
              <div className="avatar avatar-4">
                <div className="avatar-icon">🚀</div>
              </div>
            </div>
            <div className="floating-elements">
              <div className="floating-card">
                <span>Brand Strategy</span>
              </div>
              <div className="floating-card">
                <span>Digital Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 