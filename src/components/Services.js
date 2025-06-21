import React from 'react';
import './Services.css';
import { trackServiceInterest, trackCTAClick } from '../utils/analytics';

const Services = () => {
  const services = [
    {
      icon: '🎨',
      title: 'Creative Design',
      description: 'Transform your vision into stunning visuals that captivate and inspire your audience with artistic flair.',
      features: ['Brand Identity', 'UI/UX Design', 'Visual Storytelling', 'Creative Direction']
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Build lightning-fast, responsive websites that look amazing and perform flawlessly across all devices.',
      features: ['Modern Frameworks', 'Mobile-First Design', 'Performance Optimized', 'SEO Ready']
    },
    {
      icon: '🚀',
      title: 'Digital Strategy',
      description: 'Launch your brand into the digital stratosphere with smart, data-driven strategies that deliver results.',
      features: ['Growth Planning', 'Market Analysis', 'User Research', 'Conversion Optimization']
    },
    {
      icon: '✨',
      title: 'Brand Experience',
      description: 'Create magical brand experiences that turn customers into lifelong advocates and brand ambassadors.',
      features: ['Brand Storytelling', 'Content Strategy', 'Social Presence', 'Community Building']
    }
  ];

  const handleServiceCardClick = (serviceName) => {
    trackServiceInterest(serviceName);
  };

  const handleLearnMoreClick = (serviceName) => {
    trackCTAClick('✨ Get Started', 'services_section', serviceName);
    
    // Smooth scroll to contact section with proper offset
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

  return (
    <section id="services" className="services">
      <div className="services-decoration"></div>
      <div className="services-decoration"></div>
      <div className="services-decoration"></div>
      
      <div className="container">
        <div className="services-header">
          <div className="services-badge">
            <span>🚀 What We Create</span>
          </div>
          <h2>Our <span className="text-gradient">Creative</span> Services</h2>
          <p>We blend artistry with technology to create digital experiences that inspire, engage, and perform beautifully</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              onClick={() => handleServiceCardClick(service.title)}
            >
              <div className="service-icon">
                <div className="service-avatar">
                  <span>{service.icon}</span>
                </div>
              </div>
              
              <div className="service-card-content">
                <div>
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <span className="feature-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  className="service-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLearnMoreClick(service.title);
                  }}
                >
                  ✨ Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 