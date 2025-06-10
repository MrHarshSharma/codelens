import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      icon: '🎨',
      title: 'Design & Development',
      description: 'Complete visual identity and web development solutions that bring your brand to life with stunning aesthetics and seamless functionality.'
    },
    {
      icon: '📱',
      title: 'App Creation',
      description: 'Custom mobile and web applications tailored to your brand needs, ensuring optimal user experience across all platforms.'
    },
    {
      icon: '✍️',
      title: 'Content Writing',
      description: 'Professional, engaging content that tells your brand story and connects with your audience through compelling narratives.'
    },
    {
      icon: '📸',
      title: 'Social Media Management',
      description: 'Strategic social media handling that builds community, drives engagement, and amplifies your brand presence across platforms.'
    }
  ]

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <h2>ConstLens</h2>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Transform Your Vision Into A 
              <span className="gradient-text"> Powerful Brand</span>
            </h1>
            <p className="hero-description">
              End-to-end brand building support that elevates your business. From design and development 
              to content creation and social media management – we're your complete branding partner.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">View Our Work</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card card-1">
              <div className="card-content">
                <div className="card-icon">🎨</div>
                <h4>Design</h4>
              </div>
            </div>
            <div className="floating-card card-2">
              <div className="card-content">
                <div className="card-icon">📱</div>
                <h4>Develop</h4>
              </div>
            </div>
            <div className="floating-card card-3">
              <div className="card-content">
                <div className="card-icon">🚀</div>
                <h4>Launch</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions to build and grow your brand
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button className="service-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Why Choose Us?</h2>
              <p className="about-description">
                We're not just another agency – we're your strategic partner in building a brand that resonates, 
                engages, and drives results. Our holistic approach ensures every aspect of your brand works in harmony.
              </p>
              <div className="stats-grid">
                <div className="stat">
                  <h3>500+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>98%</h3>
                  <p>Client Satisfaction</p>
                </div>
                <div className="stat">
                  <h3>24/7</h3>
                  <p>Support Available</p>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="about-image-placeholder">
                <div className="placeholder-content">
                  <h3>Your Brand Journey</h3>
                  <div className="journey-steps">
                    <div className="step">Discovery</div>
                    <div className="step">Strategy</div>
                    <div className="step">Creation</div>
                    <div className="step">Launch</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="section-title">Ready to Build Your Brand?</h2>
              <p className="contact-description">
                Let's discuss how we can transform your vision into a powerful brand presence. 
                Get in touch for a free consultation.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">📧</div>
                  <div>
                    <h4>Email Us</h4>
                    <p>hello@constlens.com</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h4>Call Us</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="">Select Service</option>
                    <option value="design">Design & Development</option>
                    <option value="app">App Creation</option>
                    <option value="content">Content Writing</option>
                    <option value="social">Social Media Management</option>
                    <option value="all">Complete Package</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Tell us about your project" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn-primary full-width">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>constlens</h3>
              <p>Transforming visions into powerful brands through innovative design, development, and strategic marketing.</p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Design & Development</li>
                <li>App Creation</li>
                <li>Content Writing</li>
                <li>Social Media Management</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="#" aria-label="LinkedIn">💼</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="Facebook">📘</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 constlens. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
