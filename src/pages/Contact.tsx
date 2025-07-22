import React, { useState } from 'react';
import wallPaper from '../images/wallpaper.png';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 폼 제출 로직 추가
    console.log('Form submitted:', formData);
    alert('The message has been sent!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '✉️',
      title: 'Email',
      value: 'yyoon25@jh.edu',
      link: 'mailto:yyoon25@jh.edu'
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+1 443-447-5514',
      link: 'tel:+14434475514'
    },
    {
      icon: '🌍',
      title: 'Location',
      value: 'Baltimore, Maryland, USA',
      link: '#'
    }
  ];

  return (
    <div className="contact-page" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <div className="experience-background" style={{ backgroundImage: `url(${wallPaper})` }} />
      
      <div className="contact-container">
        <div className="contact-content">
          {/* 연락처 정보 섹션 */}
          <div className="contact-info-section">
            <h2>My Contacts</h2>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link} 
                  className="contact-info-card"
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h3>{info.title}</h3>
                    <p style={{ whiteSpace: 'pre-line' }}>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* 연락 폼 섹션 */}
          <div className="contact-form-section">
            <h2>Message Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Email"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Subject"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Message"
                  rows={6}
                />
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
