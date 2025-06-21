import React from 'react';
import './Services.css';
import { trackServiceInterest, trackCTAClick } from '../utils/analytics';

const Services = () => {
  const services = [
    {
      icon: '🎨',
      title: 'Logo Design',
      description: 'Craft memorable logos that capture your brand essence and leave lasting impressions.',
      features: ['Custom Design', 'Brand Guidelines', 'Vector Files', 'Unlimited Revisions']
    },
    {
      icon: '💻',
      title: 'Website & App Development',
      description: 'Build responsive, user-friendly websites and mobile apps that drive conversions.',
      features: ['Responsive Design', 'Modern UI/UX', 'Fast Performance', 'SEO Optimized']
    },
    {
      icon: '📱',
      title: 'Social Media Presence',
      description: 'Amplify your brand voice across social platforms with engaging content strategies.',
      features: ['Content Strategy', 'Post Scheduling', 'Community Management', 'Analytics Tracking']
    },
    {
      icon: '📸',
      title: 'Product Photography',
      description: 'Showcase your products with stunning visuals that convert browsers into buyers.',
      features: ['Professional Shoots', 'Lifestyle Photos', 'E-commerce Ready', 'Brand Consistency']
    }
  ];

  const handleServiceCardClick = (serviceName) => {
    trackServiceInterest(serviceName);
  };

  const handleLearnMoreClick = (serviceName) => {
    trackCTAClick('Learn More', 'services_section', serviceName);
    
    // Smooth scroll to contact section with proper offset
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerHeight = window.innerWidth <= 768 ? 70 : 80; // Match CSS variable
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
      <div className="container">
        <div className="services-header">
          <h2>Our <span className="highlight">Services</span></h2>
          <p>Comprehensive solutions to elevate your brand and expand your reach</p>
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
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click event
                  handleLearnMoreClick(service.title);
                }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 