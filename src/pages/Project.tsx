import React from 'react';
import wallPaper from '../images/wallpaper.png';

const Project: React.FC = () => {
  return (
    <div className="project-page" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <div className="experience-background" style = {{backgroundImage: `url(${wallPaper})`}}/>
      <h1>Project Page</h1>
      <p>This is the Contact page content </p>
    </div>
  );
};

export default Project
