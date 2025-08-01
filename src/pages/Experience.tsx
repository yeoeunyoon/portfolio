import React, { useEffect, useState } from 'react';
import './Experience.css';
import lsImage from '../images/company-image/ls-securities.png';
import worldquantImage from '../images/company-image/worldquant.png';
import biitechImage from '../images/company-image/biitech.png';
import jhuImage from '../images/company-image/hopkins.png';
import docdocImage from '../images/company-image/docdoc.png';
import bloombergImage from '../images/company-image/bloomberg.png';
import imcImage from '../images/company-image/imc.png';
import wallPaper from '../images/wallpaper.png';

const experiences = [
  {
    id: 1,
    title: "Software Engineering Intern - LS Securities Co Ltd",
    description: "Information System/ Trading team",
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
    description: "Ranked in top 3% by deploying momentum and mean-reversion strategies for live algorithmic trading ",
    time: "April 2025",
    image: imcImage
  }
];

const Experience = () => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    setVisibleIndexes([]); // reset on mount
    experiences.forEach((_, idx) => {
      setTimeout(() => {
        setVisibleIndexes(prev => [...prev, idx]);
      }, idx * 120);
    });
  }, []);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh'}}>
      {/* Wallpaper background */}
      <div className="background-wallpaper" style={{backgroundImage: `url(${wallPaper})`}}/>
      {/* Main content */}
      <div className="notification-list" style={{ position: 'relative', zIndex: 1 }}>
        {experiences.map((exp, idx) => (
          <div
            className={
              "notification-base" +
              (visibleIndexes.includes(idx) ? " visible" : "")
            }
            key={exp.id}
          >
            <div className="notification-image" style={{backgroundImage: `url(${exp.image})`}} />
            <div className="notification-content">
              <div className="notification-title-time">
                <div className="notification-title">{exp.title}</div>
                <div className="notification-time-container">
                  <div className="notification-time">{exp.time}</div>
                </div>
              </div>
              <div className="notification-description">
                {exp.description.split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
