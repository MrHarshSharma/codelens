import React from 'react';
import './Services.css';
import Avatar3D from './Avatar3D';
import { trackServiceInterest, trackCTAClick } from '../utils/analytics';

const Services = () => {
  const services = [
    {
      type: 'designer',
      title: 'Brand Identity Design',
      description: 'Create memorable visual identities that capture your brand essence and resonate with your target audience.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Systems', 'Color Psychology']
    },
    {
      type: 'strategist',
      title: 'Digital Strategy',
      description: 'Develop comprehensive digital strategies that align with your business goals and market opportunities.',
      features: ['Market Research', 'Competitor Analysis', 'Strategic Planning', 'ROI Optimization']
    },
    {
      type: 'developer',
      title: 'Web Development',
      description: 'Build fast, responsive, and user-friendly websites that convert visitors into customers.',
      features: ['Custom Development', 'Performance Optimization', 'Mobile Responsive', 'SEO Ready']
    },
    {
      type: 'marketer',
      title: 'Marketing Campaigns',
      description: 'Execute data-driven marketing campaigns that amplify your brand and drive measurable results.',
      features: ['Social Media', 'Content Marketing', 'PPC Advertising', 'Analytics & Insights']
    }
  ];

  const handleServiceInteraction = (serviceName) => {
    trackServiceInterest(serviceName, 'services_section', 'hover_interaction');
  };

  const handleGetStartedClick = (serviceName) => {
    trackCTAClick('Get Started', 'services_section', serviceName);
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <div className="services-badge">
            <span>⚡</span>
            Our Services
          </div>
          <h2>Transforming Ideas Into <span className="text-gradient">Extraordinary Brands</span></h2>
          <p>
            We offer a comprehensive suite of branding and digital services designed to elevate 
            your business and create lasting connections with your audience.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              onMouseEnter={() => handleServiceInteraction(service.title)}
            >
              <div className="service-icon">
                <Avatar3D 
                  type={service.type}
                  size="medium"
                  animated={true}
                  interactive={false}
                />
              </div>
              
              <div className="service-card-content">
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
                
                <button 
                  className="service-btn"
                  onClick={() => handleGetStartedClick(service.title)}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="services-decoration"></div>
      <div className="services-decoration"></div>
      <div className="services-decoration"></div>
    </section>
  );
};

export default Services; 