import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>We're Brand <span className="highlight">Architects</span></h2>
            <p className="about-description">
              At prysmgrid, we believe every brand has a unique story waiting to be told. 
              We're passionate about helping businesses discover their authentic voice and 
              connect with their audience in meaningful ways.
            </p>
            <div className="about-points">
              <div className="point">
                <div className="point-icon">🎯</div>
                <div className="point-text">
                  <h4>Strategic Approach</h4>
                  <p>We dive deep into your brand's essence to create authentic connections</p>
                </div>
              </div>
              <div className="point">
                <div className="point-icon">💡</div>
                <div className="point-text">
                  <h4>Creative Excellence</h4>
                  <p>Our designs speak volumes and leave lasting impressions</p>
                </div>
              </div>
              <div className="point">
                <div className="point-icon">📈</div>
                <div className="point-text">
                  <h4>Measurable Results</h4>
                  <p>We deliver growth that you can see and measure</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="team-avatars">
              <div className="team-member">
                <div className="member-avatar">
                  <div className="avatar-icon">👩‍🎨</div>
                </div>
                <span className="member-role">Creative Director</span>
              </div>
              <div className="team-member">
                <div className="member-avatar">
                  <div className="avatar-icon">👨‍💻</div>
                </div>
                <span className="member-role">Tech Lead</span>
              </div>
              <div className="team-member">
                <div className="member-avatar">
                  <div className="avatar-icon">👩‍💼</div>
                </div>
                <span className="member-role">Brand Strategist</span>
              </div>
              <div className="team-member">
                <div className="member-avatar">
                  <div className="avatar-icon">👨‍📷</div>
                </div>
                <span className="member-role">Visual Artist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 