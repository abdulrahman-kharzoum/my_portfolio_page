import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, ExternalLink, ChevronRight } from 'lucide-react';
import '../styles/ExperienceSection.css';

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
                <div className="card-header">
                  <div className="role-info">
                    <h3 className="role-title">{experience.role}</h3>
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
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-stats">
          <div className="stat-item">
            <div className="stat-number">1+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Technologies Mastered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;