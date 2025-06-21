import React, { useState, useEffect, useRef } from 'react';
import './Expertise.css';
import { trackSectionView } from '../utils/analytics';

const Expertise = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const sectionRef = useRef(null);

  const skills = [
    {
      id: 'branding',
      name: 'Brand Identity',
      level: 95,
      icon: '🎨',
      color: '#667EEA',
      description: 'Creating memorable brand identities that resonate with your target audience',
      projects: '150+',
      experience: '5+ years'
    },
    {
      id: 'web',
      name: 'Web Development',
      level: 92,
      icon: '💻',
      color: '#4FD1C7',
      description: 'Building responsive, high-performance websites and web applications',
      projects: '200+',
      experience: '4+ years'
    },
    {
      id: 'ui',
      name: 'UI/UX Design',
      level: 88,
      icon: '📱',
      color: '#F093FB',
      description: 'Designing intuitive user interfaces and exceptional user experiences',
      projects: '120+',
      experience: '4+ years'
    },
    {
      id: 'photography',
      name: 'Photography',
      level: 85,
      icon: '📸',
      color: '#764BA2',
      description: 'Professional product and lifestyle photography for brands',
      projects: '80+',
      experience: '3+ years'
    },
    {
      id: 'social',
      name: 'Social Media',
      level: 90,
      icon: '📢',
      color: '#667EEA',
      description: 'Strategic social media management and content creation',
      projects: '100+',
      experience: '3+ years'
    },
    {
      id: 'strategy',
      name: 'Brand Strategy',
      level: 87,
      icon: '🎯',
      color: '#4FD1C7',
      description: 'Developing comprehensive brand strategies for market success',
      projects: '60+',
      experience: '4+ years'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: '🚀' },
    { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '5+', label: 'Years Experience', icon: '⏰' },
    { number: '50+', label: 'Happy Clients', icon: '🤝' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          trackSectionView('expertise', 0);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="expertise" className="expertise" ref={sectionRef}>
      <div className="container">
        <div className="expertise-header">
          <h2>Our <span className="highlight">Expertise</span></h2>
          <p>Mastering the art of brand transformation through diverse creative skills</p>
        </div>

        {/* Stats Section */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-card"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h3>Core Competencies</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                key={skill.id}
                className={`skill-card ${activeSkill === skill.id ? 'active' : ''}`}
                style={{ '--delay': `${index * 0.1}s`, '--color': skill.color }}
                onMouseEnter={() => setActiveSkill(skill.id)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="skill-header">
                  <div className="skill-icon" style={{ backgroundColor: skill.color + '20' }}>
                    <span>{skill.icon}</span>
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </div>
                
                <div className="skill-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        backgroundColor: skill.color,
                        transitionDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>

                <p className="skill-description">{skill.description}</p>
                
                <div className="skill-stats">
                  <div className="skill-stat">
                    <span className="stat-value">{skill.projects}</span>
                    <span className="stat-text">Projects</span>
                  </div>
                  <div className="skill-stat">
                    <span className="stat-value">{skill.experience}</span>
                    <span className="stat-text">Experience</span>
                  </div>
                </div>

                <div className="skill-overlay">
                  <div className="overlay-content">
                    <h5>Specialized in {skill.name}</h5>
                    <p>Ready to elevate your brand with our expertise</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Creative Process */}
        <div className="process-section">
          <h3>Our Creative Process</h3>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h4>Discover</h4>
                <p>Understanding your brand, goals, and target audience</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h4>Design</h4>
                <p>Creating innovative solutions that align with your vision</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h4>Develop</h4>
                <p>Building and refining your brand assets to perfection</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h4>Deploy</h4>
                <p>Launching your brand with impact and ongoing support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise; 