import React, { useState } from 'react';
import './Header.css';
import { trackNavigation, trackMobileMenu } from '../utils/analytics';
import { scrollToSection } from '../utils/smoothScroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, sectionName) => {
    e.preventDefault(); // Prevent default anchor behavior
    trackNavigation(sectionName, isMenuOpen ? 'mobile_menu' : 'desktop_menu');
    
    // Use custom smooth scroll with proper offset
    scrollToSection(sectionName);
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleMobileMenuToggle = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    trackMobileMenu(newMenuState ? 'open' : 'close');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img 
            src="/logo.png" 
            alt="prysmgrid Logo" 
            className="logo-img"
            width="180"
            height="55"
            loading="eager"
            fetchpriority="high"
          />
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li>
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, 'services')}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button 
          className={`menu-toggle ${isMenuOpen ? 'menu-open' : ''}`}
          onClick={handleMobileMenuToggle}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header; 