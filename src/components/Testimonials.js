import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { trackButtonClick } from '../utils/analytics';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      position: 'CEO, TechVision',
      company: 'Technology Startup',
      image: '👩‍💼',
      rating: 5,
      text: 'Prysmgrid transformed our brand identity completely. The logo design and website exceeded our expectations. Our brand now truly reflects our innovative spirit!',
      project: 'Complete Brand Identity + Website',
      result: '300% increase in brand recognition'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      position: 'Founder, EcoStore',
      company: 'E-commerce Platform',
      image: '👨‍💻',
      rating: 5,
      text: 'The team delivered an outstanding e-commerce platform that boosted our sales significantly. Their attention to detail and user experience design is phenomenal.',
      project: 'E-commerce Website + Product Photography',
      result: '250% increase in online sales'
    },
    {
      id: 3,
      name: 'Emily Johnson',
      position: 'Marketing Director, FoodHub',
      company: 'Food Delivery Service',
      image: '👩‍🍳',
      rating: 5,
      text: 'Our social media presence went from zero to hero! The engaging content strategy and consistent branding helped us build a loyal community of food lovers.',
      project: 'Social Media Strategy + Content Creation',
      result: '500% growth in social media following'
    },
    {
      id: 4,
      name: 'David Park',
      position: 'Owner, Luxury Jewelry',
      company: 'Retail Business',
      image: '👨‍💼',
      rating: 5,
      text: 'The product photography elevated our brand to luxury status. Every piece now looks stunning online, and our conversion rate has doubled since the photoshoot.',
      project: 'Product Photography + Brand Positioning',
      result: '200% increase in conversion rate'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'Founder, StartupLab',
      company: 'Innovation Hub',
      image: '👩‍🚀',
      rating: 5,
      text: 'From concept to launch, Prysmgrid was our trusted partner. They understood our vision and brought it to life with exceptional creativity and professionalism.',
      project: 'Full Brand Development + Marketing',
      result: 'Successful product launch'
    }
  ];

  const stats = [
    { number: '50+', label: 'Happy Clients' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '5.0', label: 'Average Rating' },
    { number: '100%', label: 'Project Success' }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const handleTestimonialChange = (index) => {
    setActiveTestimonial(index);
    setIsAutoPlaying(false);
    trackButtonClick(`Testimonial ${index + 1}`, 'testimonials_section');
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2>What Our <span className="highlight">Clients Say</span></h2>
          <p>Real stories from real clients who trusted us with their brand journey</p>
        </div>

        {/* Stats */}
        <div className="testimonials-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial Display */}
        <div className="testimonial-main">
          <div className="testimonial-content">
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <div className="testimonial-text">
                {testimonials[activeTestimonial].text}
              </div>
              <div className="testimonial-rating">
                {renderStars(testimonials[activeTestimonial].rating)}
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>{testimonials[activeTestimonial].image}</span>
                </div>
                <div className="author-info">
                  <h4>{testimonials[activeTestimonial].name}</h4>
                  <p>{testimonials[activeTestimonial].position}</p>
                  <span className="company">{testimonials[activeTestimonial].company}</span>
                </div>
              </div>
              <div className="project-details">
                <div className="project-info">
                  <strong>Project:</strong> {testimonials[activeTestimonial].project}
                </div>
                <div className="project-result">
                  <strong>Result:</strong> {testimonials[activeTestimonial].result}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="testimonial-nav">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => handleTestimonialChange(index)}
                aria-label={`View testimonial ${index + 1}`}
              >
                <span className="dot-progress"></span>
              </button>
            ))}
          </div>

          {/* Testimonial Thumbnails */}
          <div className="testimonial-thumbnails">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`thumbnail ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => handleTestimonialChange(index)}
              >
                <div className="thumbnail-avatar">
                  <span>{testimonial.image}</span>
                </div>
                <div className="thumbnail-info">
                  <h5>{testimonial.name}</h5>
                  <p>{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="testimonials-cta">
          <h3>Ready to Join Our Success Stories?</h3>
          <p>Let's create something amazing together and make your brand the next success story</p>
          <a href="#contact" className="btn-primary">Start Your Project</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 