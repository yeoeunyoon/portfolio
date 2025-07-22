import React from 'react';
import wallPaper from '../images/wallpaper.png';
import './Skills.css';

// Skill icons imports
import postmanIcon from '../images/skill-icons/postman.png';
import figmaIcon from '../images/skill-icons/figma.png';
import tailwindIcon from '../images/skill-icons/tailwindcss.png';
import qupathIcon from '../images/skill-icons/qupath.png';
import colabIcon from '../images/skill-icons/colab.png';
import jupyterIcon from '../images/skill-icons/jupyter.png';
import gitIcon from '../images/skill-icons/git.png';
import nodejsIcon from '../images/skill-icons/nodejs.png';
import cIcon from '../images/skill-icons/c.png';
import cppIcon from '../images/skill-icons/cpp.png';
import pythonIcon from '../images/skill-icons/python.png';
import reactIcon from '../images/skill-icons/react.png';
import tsIcon from '../images/skill-icons/ts.png';
import jsIcon from '../images/skill-icons/js.png';
import javaIcon from '../images/skill-icons/java.png';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Python', icon: pythonIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'TypeScript', icon: tsIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Node.js', icon: nodejsIcon },
    { name: 'C', icon: cIcon },
    { name: 'C++', icon: cppIcon },
    { name: 'Java', icon: javaIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'Tailwind CSS', icon: tailwindIcon },
    { name: 'Figma', icon: figmaIcon },
    { name: 'Postman', icon: postmanIcon },
    { name: 'Jupyter', icon: jupyterIcon },
    { name: 'Colab', icon: colabIcon },
    { name: 'QuPath', icon: qupathIcon },
  ];

  return (
    <div className="skills-page" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <div className="experience-background" style={{ backgroundImage: `url(${wallPaper})` }} />
      
      <div className="skills-container">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-app">
              <div className="skill-icon">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
