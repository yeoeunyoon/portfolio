import React from 'react';
import wallPaper from '../images/wallpaper.png';

const Skills: React.FC = () => {
  return (
    <div className="skills-page" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <div className="experience-background" style = {{backgroundImage: `url(${wallPaper})`}}/>
      <h1>Skills Page</h1>
      <p>This is the Skills page content </p>
    </div>
  );
};

export default Skills
