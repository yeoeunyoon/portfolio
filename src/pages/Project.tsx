import React from 'react';
import wallPaper from '../images/wallpaper.png';
import project1Image from '../images/project/project1.png';
import './Project.css';

const Project: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Handshake AI Trainer",
      description: "Contributed to a confidential LLM safety project by designing high-risk prompts in domains like biosecurity and controlled substances. Assessed model outputs for factual accuracy and ethical safeguards, improving reliability in safety-critical scenarios.",
      image: project1Image,
      technologies: ["Prompt Engineering", "LLM Evaluation", "Research", "AI Safety", "Scientific QA"
      ],
    },
    {
      id: 2,
      title: "CrowdTick - Stock Tracker ", 
      description: "Built a stock dashboard that tracks selected tickers and visualizes real-time news headlines from multiple sources. Designed a custom sentiment scoring system to quantify media bias toward each stock using Python, BeautifulSoup, and React, with dynamic charting and ticker filtering.",
      image: "project2-image.jpg",
      technologies: ["Python", "BeautifulSoup", "React", "TypeScript", "WebScraping"],
    },
    {
      id: 3,
      title: "Flashcard Fullstack Web App",
      description: "Developed a full-stack flashcard learning app using React, TypeScript, and SQLite. Users can create, edit, and review custom flashcard decks with instant feedback. Backend built with Hono and Drizzle ORM to support seamless data persistence.",
      image: "project3-image.jpg",
      technologies: ["React", "TypeScript", "SQLite", "Hono", "Drizzle ORM"],
    }
  ];

  return (
    <div className="project-page">
      <div className="project-background" style={{backgroundImage: `url(${wallPaper})`}}/>
      
      <div className="project-container">
        <h1 className="project-title">My Projects</h1>
        
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
                             <div className="project-image-container">
                 {project.image ? (
                   <img 
                     src={project.image} 
                     alt={project.title}
                     className="project-image"
                   />
                 ) : (
                   <div className="project-image-placeholder">
                     <div className="image-placeholder">Project Image</div>
                   </div>
                 )}
               </div>
              
              <div className="project-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
