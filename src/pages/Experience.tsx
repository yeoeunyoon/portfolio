import React from 'react';
import './Experience.css';
import lsImage from '../images/ls-securities.png';
import worldquantImage from '../images/worldquant.png';
import biitechImage from '../images/biitech.png';
import jhuImage from '../images/hopkins.png';
import docdocImage from '../images/docdoc.png';
import bloombergImage from '../images/bloomberg.png';
import imcImage from '../images/imc.png';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineering Intern - LS Securities",
      description: "Information System Team / Trading sub-team",
      time: "July 2025 - Aug 2025",
      image: lsImage
    },
    {
      id: 2,
      title: "Research Consultant - World Quant",
      description: "• Built 20+ quantitative models using multi-factor analysis and machine learning\n• Conducted backtesting using custom frameworks to optimize strategies, improve profitability, manage risks",
      time: "Dec 2024 - Present",
      image: worldquantImage
    },
    {
      id: 3,
      title: "Software Sales Engineering Intern - Biitech LLC",
      description: "• Developed an outreach automation app for government agencies on the FunnelWhirl platform\n• Integrated GPT-powered auto-posting and multi-channel messaging workflows.",
      time: "Feb 2025 - Mar 2025",
      image: biitechImage
    },
    {
      id: 4,
      title: "Research Assistant - Johns Hopkins Institute for NanoBioTechnology",
      description: "• Annotated and processed 200+ liver cell images using QuPath and MATLAB\n• Reconstructed precise 3D models from cross-sections",
      time: "Oct 2024 - Jan 2025",
      image: jhuImage
    },
    {
      id: 5,
      title: "Software Engineering Intern - DocDoc Pte.Ltd",
      description: "• Built Java-based API and refined NLP-driven adjudication logic\n• Developed automated testing frameworks and improved system performance",
      time: "Jan 2024 - Feb 2024",
      image: docdocImage
    },
    {
      id: 6,
      title: "Bloomberg Global Trading Challenge Participant",
      description: "Achieved 13.49% return over 40 days by designing data-driven strategies and optimizing risk via Bloomberg Terminal",
      time: "Oct 2024 - Nov 2024",
      image: bloombergImage
    },
    {
      id: 7,
      title: "2025 IMC Prosperity Participant",
      description: "Ranked in top 3% by deploying momentum and mean-reversion strategies for live algorithmic trading",
      time: "April 2025",
      image: imcImage
    }
  ];

  return (
    <div className="experience-page">
      <div className="experience-container">
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <div key={experience.id} className={`notification-${index + 1}`}>
              <div className="background"></div>
              <div className="notification">
                <div className="image-container">
                  <div 
                    className="experience-image"
                    style={{ backgroundImage: `url(${experience.image})` }}
                  ></div>
                </div>
                <div className="title-time-description">
                  <div className="title-and-time">
                    <div className="title">{experience.title}</div>
                    <div className="time-container">
                      <div className="time">{experience.time}</div>
                    </div>
                  </div>
                  <div className="description">{experience.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
