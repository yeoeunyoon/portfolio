import React from 'react';
import './TabBar.css';
import sidebarIcon from '../images/sidebar-icon.png';
import searchIcon from '../images/search-icon.png';

interface TabBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="tab-bar">
      {/* Platter background */}
      <div className="platter">
        <div className="thin"></div>
      </div>
      
      {/* Sidebar icon button */}
      <div className="sidebar-button">
        <img src={sidebarIcon} alt="Sidebar" className="sidebar-image" />
      </div>
      
      {/* Navigation tabs */}
      <div className="stretch">
        <div 
          className={`tab tab-1 ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => onTabChange('home')}
        >
          <div className="tab-text">Home</div>
        </div>
        
        <div 
          className={`tab tab-2 ${activeTab === 'me' ? 'active' : ''}`}
          onClick={() => onTabChange('me')}
        >
          <div className="tab-text">Me</div>
        </div>
        
        <div 
          className={`tab tab-3 ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => onTabChange('experience')}
        >
          <div className="tab-text">Experience</div>
        </div>
        
        <div 
          className={`tab tab-4 ${activeTab === 'project' ? 'active' : ''}`}
          onClick={() => onTabChange('project')}
        >
          <div className="tab-text">Project</div>
        </div>
        
        <div 
          className={`tab tab-5 ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => onTabChange('skills')}
        >
          <div className="tab-text">Skills</div>
        </div>
        
        <div 
          className={`tab tab-6 ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => onTabChange('contact')}
        >
          <div className="tab-text">Contact</div>
        </div>
      </div>
      
      {/* Search icon button */}
      <div className="search-button">
        <img src={searchIcon} alt="Search" className="search-image" />
      </div>
    </div>
  );
};

export default TabBar;
