import React, { useState, useEffect } from 'react';
import '../styles/Navigation.css';

const Navigation = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand" onClick={() => scrollToSection('hero')}>
          <span className="brand-text">AK</span>
        </div>
        
        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;