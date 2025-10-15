import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Calendar, Code, Smartphone, Globe, ChevronDown, ChevronUp } from 'lucide-react';
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

  // Show all projects (no separation between featured and additional)
  const allProjects = data;
  const filteredFeaturedProjects = selectedCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

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
  }, [filteredFeaturedProjects]);

  const getProjectIcon = (category) => {
    switch (category) {
      case 'mobile': return <Smartphone className="project-type-icon" />;
      case 'web3d': return <Globe className="project-type-icon" />;
      default: return <Code className="project-type-icon" />;
    }
  };

  const getProject3DModel = (project) => {
    // AI Automation projects get the AI robot model
    if (project.type === 'AI Automation' || project.title.toLowerCase().includes('automation')) {
      return 'ai_robot';
    }
    
    // Flutter applications get the Flutter logo model
    if (project.category === 'mobile' || project.type === 'Flutter Development') {
      return 'flutter';
    }
    
    // Blimp Simulation gets the blimp model
    if (project.title.toLowerCase().includes('blimp')) {
      return 'blimp';
    }
    
    return null;
  };

  const renderProject3D = (project) => {
    const modelType = getProject3DModel(project);
    
    if (modelType) {
      return (
        <div className={`project-3d-element ${modelType}-3d`}>
          <ThreeScene modelType={modelType} />
        </div>
      );
    }
    
    return null;
  };

  const renderProjectCard = (project, index, isAdditional = false) => (
    <div
      key={project.id}
      className={`project-card ${isAdditional ? 'additional-project' : ''} ${visibleProjects.includes(index.toString()) ? 'visible' : ''}`}
      data-index={index}
    >
      {renderProject3D(project)}
      
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-type">
            {getProjectIcon(project.category)}
            <span>{project.type}</span>
          </div>
        </div>
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
            {project.achievements.map((achievement, achievementIndex) => (
              <li key={achievementIndex} className="achievement-item">
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <div className="project-technologies">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary project-btn"
            >
              <Github className="btn-icon" />
              <span>View Code</span>
            </a>
          )}
          
          {project.liveDemo && (
            <a 
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary project-btn"
            >
              <ExternalLink className="btn-icon" />
              <span>Live Demo</span>
            </a>
          )}

          {project.demoVideo && (
            <a
              href={project.demoVideo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary project-btn"
            >
              <ExternalLink className="btn-icon" />
              <span>Demo Video</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Transforming ideas into digital reality</p>
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredFeaturedProjects.map((project, index) => 
            renderProjectCard(project, index)
          )}
        </div>

        <div className="projects-footer">
          <p className="footer-text">
            More exciting projects in development. Follow my journey on{' '}
            <a 
              href="https://github.com/abdulrahman-kharzoum"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
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
