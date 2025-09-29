import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Calendar, Code, Smartphone, Globe } from 'lucide-react';
import ThreeScene from './ThreeScene';
import '../styles/ProjectsSection.css';

const ProjectsSection = ({ data }) => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const sectionRef = useRef(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Code /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone /> },
    { id: 'web3d', label: '3D Web', icon: <Globe /> }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? data 
    : data.filter(project => project.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleProjects(prev => [...prev, entry.target.dataset.index]);
            }, parseInt(entry.target.dataset.index) * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectElements = sectionRef.current?.querySelectorAll('.project-card');
    projectElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredProjects]);

  const getProjectIcon = (category) => {
    switch (category) {
      case 'mobile': return <Smartphone className="project-type-icon" />;
      case 'web3d': return <Globe className="project-type-icon" />;
      default: return <Code className="project-type-icon" />;
    }
  };

  const renderProject3D = (project) => {
    if (project.category === 'web3d' && project.title.includes('Blimp')) {
      return (
        <div className="project-3d-element blimp-3d">
          <ThreeScene showBlimp={true} />
        </div>
      );
    }
    // Remove 3D phone from Flutter projects as requested
    return null;
  };

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Transforming ideas into digital reality</p>
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(category.id);
                setVisibleProjects([]);
              }}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${visibleProjects.includes(index.toString()) ? 'visible' : ''}`}
              data-index={index}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-type-badge">
                    {getProjectIcon(project.category)}
                    <span>{project.type}</span>
                  </div>
                </div>
                {renderProject3D(project)}
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-duration">
                    <Calendar className="duration-icon" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-achievements">
                  <h4 className="achievements-title">Key Achievements:</h4>
                  <ul className="achievements-list">
                    {project.achievements.slice(0, 3).map((achievement, index) => (
                      <li key={index} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  <div className="tech-tags">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag more">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                </div>

                <div className="project-actions">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn github-btn"
                    >
                      <Github className="btn-icon" />
                      <span>View Code</span>
                    </a>
                  )}
                  
                  <button className="project-btn demo-btn">
                    <ExternalLink className="btn-icon" />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>

              <div className="project-glow"></div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <p className="footer-text">
            More exciting projects in development. Follow my journey on 
            <a 
              href="https://github.com/abdulrahman-kharzoum" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;