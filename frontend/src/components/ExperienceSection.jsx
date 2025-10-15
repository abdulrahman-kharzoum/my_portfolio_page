import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, ExternalLink, ChevronRight } from 'lucide-react';
import ThreeScene from './ThreeScene';
import '../styles/ExperienceSection.css';
import portfolioData from '../mockData';

const ExperienceSection = ({ data }) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, entry.target.dataset.index]);
            }, parseInt(entry.target.dataset.index) * 300);
          }
        });
      },
      { threshold: 0.3 }
    );

    const experienceElements = sectionRef.current?.querySelectorAll('.experience-item');
    experienceElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getExperience3DModel = (experience) => {
    // AI Automation experience gets the AI robot model
    if (experience.type === 'AI Automation' || experience.role.toLowerCase().includes('automation')) {
      return 'ai_robot';
    }
    return null;
  };

  const renderExperience3D = (experience) => {
    const modelType = getExperience3DModel(experience);
    
    if (modelType) {
      return (
        <div className={`experience-3d-element ${modelType}-3d`}>
          <ThreeScene modelType={modelType} />
        </div>
      );
    }
    
    return null;
  };

  const renderN8nLogo = (experience) => {
    if (experience.type === 'AI Automation' || experience.role.toLowerCase().includes('automation')) {
      return (
        <div className="n8n-logo-container">
          <img src="/n8n_logo.png" alt="n8n Logo" className="n8n-logo" />
        </div>
      );
    }
    return null;
  };

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="experience-container">
        <div className="experience-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">Where innovation meets execution</p>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>
          
          {data.map((experience, index) => (
            <div
              key={experience.id}
              className={`experience-item ${visibleItems.includes(index.toString()) ? 'visible' : ''}`}
              data-index={index}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-pulse"></div>
              </div>

              <div className="experience-card">
                {renderExperience3D(experience)}
                <div className="card-header">
                  <div className="role-info">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <h3 className="role-title">{experience.role}</h3>
                      {renderN8nLogo(experience)}
                    </div>
                    <div className="company-info">
                      <span className="company-name">{experience.company}</span>
                      <div className="location-info">
                        <MapPin className="location-icon" />
                        <span className="location-text">{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="duration-info">
                    <div className="duration-badge">
                      <Calendar className="duration-icon" />
                      <span className="duration-text">{experience.duration}</span>
                    </div>
                    <div className="period-text">{experience.period}</div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="type-badge" data-type={experience.type.toLowerCase().replace(' ', '-')}>
                    {experience.type}
                  </div>

                  <div className="achievements-list">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="achievement-item">
                        <ChevronRight className="achievement-icon" />
                        <span className="achievement-text">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="technologies">
                    <h4 className="tech-title">Key Technologies:</h4>
                    <div className="tech-tags">
                      {experience.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {experience.liveDemo && (
                    <div className="experience-actions">
                      <a 
                        href={experience.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary experience-btn"
                      >
                        <ExternalLink className="btn-icon" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
          <div className="experience-stats">
            {(() => {
              // Compute stats from projects data in mockData
              const projects = portfolioData.projects || [];

              // Extract years from project.duration strings (e.g., 'May 2023 - August 2023' or '10/02/2025 - 10/13/2025')
              const years = [];
              projects.forEach((p) => {
                if (p.duration) {
                  const matches = p.duration.match(/\b(20\d{2})\b/g);
                  if (matches) {
                    matches.forEach((y) => years.push(Number(y)));
                  }
                }
              });

              let yearsExperience = 0;
              if (years.length > 0) {
                const minYear = Math.min(...years);
                const maxYear = Math.max(...years);
                const currentYear = new Date().getFullYear();
                const endYear = Math.max(maxYear, currentYear);
                yearsExperience = endYear - minYear + 1;
              }

              // Compute unique and total technologies across projects
              const techSet = new Set();
              let totalTechs = 0;
              projects.forEach((p) => {
                if (Array.isArray(p.technologies)) {
                  totalTechs += p.technologies.length;
                  p.technologies.forEach((t) => techSet.add((t || '').toString().toLowerCase()));
                }
              });

              const uniqueTechCount = techSet.size;

              return (
                <>
                  <div className="stat-item">
                    <div className="stat-number">2+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">{uniqueTechCount > 0 ? `${uniqueTechCount}+` : '0+'}</div>
                    <div className="stat-label">Technologies Mastered</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">{totalTechs > 0 ? `${totalTechs}+` : '0+'}</div>
                    <div className="stat-label">Technologies</div>
                  </div>
                </>
              );
            })()
            }
          </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
