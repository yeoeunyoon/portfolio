import React from 'react';
import FluidCursor from '../components/FluidCursor';

const Home: React.FC = () => {
  return (
    <>
      <FluidCursor />
      <div className="home-page">
        {/* Hey, I'm Jasmine! */}
        <h1 className="home-title">
          Hey, I'm Jasmine!
        </h1>
        
        {/* 3D Avatar Image */}
        <div className="avatar-container">
          <img 
            src="/src/images/avatar1.png" 
            alt="Jasmine's 3D Avatar" 
            className="avatar-image"
          />
        </div>
        
        {/* Wanna know more about me? */}
        <h2 className="home-subtitle">
          Wanna know more about me?
        </h2>
        
        {/* Click under the bar or tap right */}
        <div className="instruction-text">
          Click the top bar or tap right
        </div>
      </div>
    </>
  );
};

export default Home;
