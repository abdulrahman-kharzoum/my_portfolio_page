import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Navigation from './Navigation';
import { portfolioData } from '../mockData';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      
      setScrollProgress(scroll);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-container">
      <div 
        className="scroll-progress"
        style={{
          transform: `scaleX(${scrollProgress})`
        }}
      />
      
      <Navigation activeSection={activeSection} />
      
      <main className="portfolio-main">
        <HeroSection id="hero" data={portfolioData.personal} />
        <AboutSection id="about" data={portfolioData} />
        <ExperienceSection id="experience" data={portfolioData.experience} />
        <ProjectsSection id="projects" data={portfolioData.projects} />
        <ContactSection id="contact" data={portfolioData.personal} />
      </main>
    </div>
  );
};

export default Portfolio;