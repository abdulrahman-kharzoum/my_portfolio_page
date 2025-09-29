import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare } from 'lucide-react';
import '../styles/ContactSection.css';

const ContactSection = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Create email with form data
    const emailSubject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const emailBody = encodeURIComponent(
      `Hello Abdulrahman,\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`
    );
    
    window.location.href = `mailto:${data.email}?subject=${emailSubject}&body=${emailBody}`;
  };

  const contactMethods = [
    {
      icon: <Mail className="contact-icon" />,
      title: "Email",
      value: data.email,
      description: "Drop me a line anytime",
      action: () => handleContactClick('email')
    },
    {
      icon: <Phone className="contact-icon" />,
      title: "Phone", 
      value: data.phone,
      description: "Call for urgent matters",
      action: () => window.location.href = `tel:${data.phone}`
    },
    {
      icon: <MapPin className="contact-icon" />,
      title: "Location",
      value: data.location,
      description: "Available for remote work",
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="social-icon" />,
      title: "GitHub",
      description: "Check out my repositories",
      action: () => handleContactClick('github')
    },
    {
      icon: <Linkedin className="social-icon" />,
      title: "LinkedIn", 
      description: "Let's connect professionally",
      action: () => handleContactClick('linkedin')
    },
    {
      icon: <MessageSquare className="social-icon" />,
      title: "Direct Message",
      description: "Send me a quick message",
      action: () => handleContactClick('email')
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Ready to transform your ideas into exceptional digital experiences
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-block">
              <h3 className="info-title">Get In Touch</h3>
              <p className="info-description">
                I'm always excited to collaborate on innovative projects. Whether you have 
                a mobile app idea, need AI automation solutions, or want to discuss 
                technology trends, let's connect!
              </p>
            </div>

            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <div 
                  key={index} 
                  className={`contact-method ${method.action ? 'clickable' : ''}`}
                  onClick={method.action}
                >
                  <div className="method-icon">
                    {method.icon}
                  </div>
                  <div className="method-content">
                    <h4 className="method-title">{method.title}</h4>
                    <p className="method-value">{method.value}</p>
                    <span className="method-description">{method.description}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section">
              <h4 className="social-title">Follow My Journey</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <div 
                    key={index}
                    className="social-item"
                    onClick={social.action}
                  >
                    <div className="social-icon-wrapper">
                      {social.icon}
                    </div>
                    <div className="social-content">
                      <span className="social-name">{social.title}</span>
                      <span className="social-desc">{social.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="form-header">
              <h3 className="form-title">Send a Message</h3>
              <p className="form-subtitle">Let's discuss your next project</p>
            </div>

            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="form-input"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about your project, ideas, or how we can work together..."
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary form-submit">
                <Send className="btn-icon" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="contact-footer">
          <div className="footer-content">
            <p className="footer-text">
              © 2024 Abdulrahman Kharzoum. Crafted with passion and precision.
            </p>
            <div className="footer-links">
              <span onClick={() => handleContactClick('github')} className="footer-link">
                GitHub
              </span>
              <span onClick={() => handleContactClick('linkedin')} className="footer-link">
                LinkedIn
              </span>
              <span onClick={() => handleContactClick('email')} className="footer-link">
                Email
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;