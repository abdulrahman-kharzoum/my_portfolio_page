import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import ThreeScene from './ThreeScene';
import '../styles/HeroSection.css';

const HeroSection = ({ data }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Flutter Developer',
    'AI Automation Specialist', 
    'Problem Solver',
    'Innovation Driver'
  ];

  useEffect(() => {
    let timeout;
    const currentRoleText = roles[currentRole];
    
    if (isTyping) {
      if (displayText.length < currentRoleText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRoleText.substring(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentRole, displayText, isTyping, roles]);

  const handleDownloadResume = () => {
    // Mock download functionality
    const link = document.createElement('a');
    link.href = 'https://customer-assets.emergentagent.com/job_premium-portfolio-8/artifacts/ldvi58cr_AbdulrahmanKharzoum.pdf';
    link.download = 'Abdulrahman_Kharzoum_Resume.pdf';
    link.click();
  };

  const handleContactClick = (type) => {
    switch (type) {
      case 'email':
        window.location.href = `mailto:${data.email}?subject=Portfolio Inquiry&body=Hello Abdulrahman,%0D%0A%0D%0AI found your portfolio and would like to discuss potential opportunities.%0D%0A%0D%0ABest regards,`;
        break;
      case 'linkedin':
        window.open(data.linkedin, '_blank');
        break;
      case 'github':
        window.open(data.github, '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        
        {/* Large Background Android Phone */}
        <div className="bg-phone-container">
          <ThreeScene showPhone={true} className="bg-phone-scene" />
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-greeting">
            <span className="greeting-text">Hello, I'm</span>
          </div>
          
          <h1 className="hero-name">
            <span className="name-part">Abdulrahman</span>
            <span className="name-part">Kharzoum</span>
          </h1>
          
          <div className="hero-role">
            <span className="role-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>
          
          <p className="hero-tagline">
            {data.tagline}
          </p>
          
          <div className="hero-actions">
            <button 
              className="btn-primary hero-btn"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowRight className="btn-icon" />
            </button>
            
            <button 
              className="btn-secondary hero-btn"
              onClick={handleDownloadResume}
            >
              Download Resume
              <Download className="btn-icon" />
            </button>
          </div>
          
          <div className="hero-social">
            <button 
              className="social-btn"
              onClick={() => handleContactClick('github')}
              title="GitHub"
            >
              <Github />
            </button>
            <button 
              className="social-btn"
              onClick={() => handleContactClick('linkedin')}
              title="LinkedIn"
            >
              <Linkedin />
            </button>
            <button 
              className="social-btn"
              onClick={() => handleContactClick('email')}
              title="Email"
            >
              <Mail />
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          {/* Profile Photo */}
          <div className="profile-photo">
            <img 
              src="https://customer-assets.emergentagent.com/job_premium-portfolio-8/artifacts/3dhtjrqb_IMG_7253.jpg" 
              alt="Abdulrahman Kharzoum" 
              className="profile-image"
            />
          </div>
          
          <div className="glass-panel">
            <div className="panel-content">
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span>Available for Projects</span>
              </div>
              
              <div className="quick-stats">
                <div className="stat">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number">1+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">4</span>
                  <span className="stat-label">Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
};

export default HeroSection;