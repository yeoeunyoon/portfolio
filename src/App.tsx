import React, { useState } from 'react';
import Home from './pages/Home';
import Me from './pages/Me';
import Experience from './pages/Experience';
import TabBar from './components/TabBar';
import NavigationArrow from './components/NavigationArrow';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Page order for navigation
  const pages = ['home', 'me', 'experience', 'project', 'skills', 'contact'];
  
  const currentPageIndex = pages.indexOf(activeTab);

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'me':
        return <Me />;
      case 'experience':
        return <Experience />;
      case 'project':
        return <div>Project Page</div>;
      case 'skills':
        return <div>Skills Page</div>;
      case 'contact':
        return <div>Contact Page</div>;
      default:
        return <Home />;
    }
  };

  // Navigation functions
  const goToPreviousPage = () => {
    if (currentPageIndex > 0) {
      setActiveTab(pages[currentPageIndex - 1]);
    }
  };

  const goToNextPage = () => {
    if (currentPageIndex < pages.length - 1) {
      setActiveTab(pages[currentPageIndex + 1]);
    }
  };

  // Determine which arrows to show
  const showLeftArrow = currentPageIndex > 0; // Show on all pages except home
  const showRightArrow = currentPageIndex < pages.length - 1; // Show on all pages except contact

  return (
    <div className="App">
      {renderPage()}
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Navigation Arrows */}
      <NavigationArrow 
        direction="left" 
        onClick={goToPreviousPage} 
        isVisible={showLeftArrow}
      />
      <NavigationArrow 
        direction="right" 
        onClick={goToNextPage} 
        isVisible={showRightArrow}
      />
    </div>
  );
}

export default App;
