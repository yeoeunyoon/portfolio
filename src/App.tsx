import React, { useState } from 'react';
import Home from './pages/Home';
import Me from './pages/Me';
import Experience from './pages/Experience';
import Project from './pages/Project';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import TabBar from './components/TabBar';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'me':
        return <Me />;
      case 'experience':
        return <Experience />;
      case 'project':
        return <Project />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
