import React, { useState } from 'react';
import './Portfolio.css';
import { trackServiceInterest, trackButtonClick } from '../utils/analytics';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'TechVision Logo',
      category: 'logo',
      image: '/api/placeholder/400/300',
      description: 'Modern tech company branding with clean, futuristic elements',
      tags: ['Logo Design', 'Brand Identity', 'Tech'],
      color: '#667EEA'
    },
    {
      id: 2,
      title: 'EcoStore Website',
      category: 'web',
      image: '/api/placeholder/400/300',
      description: 'E-commerce platform with sustainable design philosophy',
      tags: ['Web Design', 'E-commerce', 'Sustainability'],
      color: '#4FD1C7'
    },
    {
      id: 3,
      title: 'FoodHub Social Campaign',
      category: 'social',
      image: '/api/placeholder/400/300',
      description: 'Engaging social media presence for food delivery service',
      tags: ['Social Media', 'Food', 'Campaign'],
      color: '#F093FB'
    },
    {
      id: 4,
      title: 'Luxury Product Shoot',
      category: 'photography',
      image: '/api/placeholder/400/300',
      description: 'High-end product photography for premium jewelry brand',
      tags: ['Photography', 'Luxury', 'Products'],
      color: '#764BA2'
    },
    {
      id: 5,
      title: 'StartupLab Brand',
      category: 'logo',
      image: '/api/placeholder/400/300',
      description: 'Dynamic branding for innovation-focused startup incubator',
      tags: ['Logo Design', 'Startup', 'Innovation'],
      color: '#667EEA'
    },
    {
      id: 6,
      title: 'FitnessApp Interface',
      category: 'web',
      image: '/api/placeholder/400/300',
      description: 'User-friendly mobile app design for fitness tracking',
      tags: ['App Design', 'Fitness', 'UI/UX'],
      color: '#4FD1C7'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Work', count: portfolioItems.length },
    { id: 'logo', name: 'Logo Design', count: portfolioItems.filter(item => item.category === 'logo').length },
    { id: 'web', name: 'Web & Apps', count: portfolioItems.filter(item => item.category === 'web').length },
    { id: 'social', name: 'Social Media', count: portfolioItems.filter(item => item.category === 'social').length },
    { id: 'photography', name: 'Photography', count: portfolioItems.filter(item => item.category === 'photography').length }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    trackServiceInterest(`Portfolio - ${category}`);
  };

  const handleItemClick = (item) => {
    trackButtonClick(`Portfolio Item - ${item.title}`, 'portfolio_section');
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <h2>Our Creative <span className="highlight">Portfolio</span></h2>
          <p>Discover how we transform brands through innovative design solutions</p>
        </div>

        {/* Category Filter */}
        <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.name}
              <span className="count">{category.count}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`portfolio-item ${hoveredItem === item.id ? 'hovered' : ''}`}
              style={{ '--delay': `${index * 0.1}s`, '--color': item.color }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleItemClick(item)}
            >
              <div className="portfolio-image">
                <div className="image-placeholder" style={{ backgroundColor: item.color + '20' }}>
                  <div className="placeholder-icon">🎨</div>
                </div>
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <div className="portfolio-tags">
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-info">
                <h4>{item.title}</h4>
                <div className="info-tags">
                  {item.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span key={tagIndex} className="info-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <p>Impressed by our work? Let's create something amazing for your brand!</p>
          <a href="#contact" className="btn-primary">Start Your Project</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 