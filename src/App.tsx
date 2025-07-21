import React, { useState } from 'react';
import Home from './pages/Home';
import Me from './pages/Me';
import Experience from './pages/Experience';
import Project from './pages/Project';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import TabBar from './components/TabBar';
import NavigationArrow from './components/NavigationArrow';
import PageControl from './components/PageControl';
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
        return  <Project />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
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
      
      {/* Page Control */}
      <PageControl activePage={activeTab} onPageChange={setActiveTab} />

    </div>
    
  );
}

export default App;
