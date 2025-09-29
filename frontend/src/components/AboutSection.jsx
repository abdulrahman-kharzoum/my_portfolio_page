import React, { useState, useEffect, useRef } from 'react';
import { Code, Cpu, Globe, Zap, ChevronRight } from 'lucide-react';
import '../styles/AboutSection.css';

const AboutSection = ({ data }) => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      icon: <Code className="skill-icon" />,
      title: "Mobile Development",
      skills: data.skills.mobile,
      color: "#4285f4"
    },
    {
      icon: <Cpu className="skill-icon" />,
      title: "AI Automation",
      skills: data.skills.ai,
      color: "#00FFD1"
    },
    {
      icon: <Globe className="skill-icon" />,
      title: "Web Development",
      skills: data.skills.web,
      color: "#FF6B6B"
    },
    {
      icon: <Zap className="skill-icon" />,
      title: "Tools & Technologies",
      skills: data.skills.tools,
      color: "#FFD93D"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleSkills(prev => [...prev, entry.target.dataset.index]);
            }, parseInt(entry.target.dataset.index) * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillElements = sectionRef.current?.querySelectorAll('.skill-category');
    skillElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Building the future, one line of code at a time</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="text-block">
              <h3 className="text-title">My Journey</h3>
              <p className="text-description">
                {data.personal.summary}
              </p>
            </div>

            <div className="text-block">
              <h3 className="text-title">What Drives Me</h3>
              <p className="text-description">
                I'm passionate about creating solutions that bridge the gap between complex technology 
                and user-friendly experiences. Whether it's developing intuitive mobile apps or 
                implementing AI automation workflows, I focus on building software that truly matters.
              </p>
            </div>

            <div className="education-card">
              <div className="education-header">
                <h4 className="education-title">Education</h4>
                <span className="education-year">{data.education.graduation}</span>
              </div>
              <p className="education-degree">{data.education.degree}</p>
              <p className="education-university">{data.education.university}</p>
              <div className="education-location">{data.education.location}</div>
            </div>

            <div className="languages-section">
              <h4 className="languages-title">Languages</h4>
              <div className="languages-list">
                {data.languages.map((lang, index) => (
                  <div key={index} className="language-item">
                    <span className="language-name">{lang.language}</span>
                    <span className="language-level">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`skill-category ${visibleSkills.includes(categoryIndex.toString()) ? 'visible' : ''}`}
                data-index={categoryIndex}
              >
                <div className="skill-header" style={{ borderColor: category.color }}>
                  <div className="skill-icon-wrapper" style={{ backgroundColor: category.color }}>
                    {category.icon}
                  </div>
                  <h3 className="skill-title">{category.title}</h3>
                </div>

                <div className="skill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <ChevronRight className="skill-arrow" />
                      <span className="skill-name">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;