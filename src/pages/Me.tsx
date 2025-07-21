import React from 'react';
import './Me.css';
import profileImg from '../images/avatar2.png';
import githubImg from '../images/github.png';
import linkedinImg from '../images/linkedin.png';
import personIcon from '../images/person-icon.png';
import starIcon from '../images/star-icon.png';
import cameraIcon from '../images/camera-icon.png';
import noteIcon from '../images/note-icon.png';
import mailIcon from '../images/mail-icon.png';
import locationIcon from '../images/location-icon.png';
import bookIcon from '../images/book-icon.png';

const Me = () => {
  return (
    <div className="me-root">
      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-header-row">
          <img src={personIcon} alt="profile" className="profile-header-icon" />
          <span className="profile-header-text">Profile</span>
        </div>
        <div className="profile-emoji">
          <img src={profileImg} alt="profile" />
        </div>
        <div className="profile-title">Jasmine Yoon</div>
        <div className="profile-subtitle">Applied Maths & CS</div>
        <div className="profile-info">
          <div className="profile-row">
            <img src={bookIcon} alt="book" className="profile-info-icon" />
            <span>Johns Hopkins University</span>
          </div>
          <div className="profile-row">
            <img src={mailIcon} alt="mail" className="profile-info-icon" />
            <span>yyoon25@jh.edu</span>
          </div>
          <div className="profile-row">
            <img src={locationIcon} alt="location" className="profile-info-icon" />
            <span>Baltimore, Maryland</span>
          </div>
        </div>
        <div className="profile-links">
          <img src={githubImg} alt="github" className="profile-link-img" />
          <img src={linkedinImg} alt="linkedin" className="profile-link-img" />
        </div>
      </div>
      {/* Main Content */}
      <div className="me-main">
        <div className="about-section">
          <div className="about-title-row">
            <img src={starIcon} alt="star" className="about-title-icon" />
            <span className="about-title-text">About Me</span>
          </div>
          <div className="about-head">Hi, I’m Jasmine! <span role="img" aria-label="wave">👋</span></div>
          <div className="about-desc">
            I love building web apps, exploring finance, and learning new things. I’m passionate about tech for impact and always looking for new challenges.
          </div>
          <div className="about-tags">
            <span className="about-tag"># Development</span>
            <span className="about-tag"># SWE</span>
            <span className="about-tag"># Quant</span>
            <span className="about-tag"># Coder</span>
            <span className="about-tag"># Learner</span>
          </div>
        </div>
        <div className="me-bottom-row">
          <div className="funfacts-section">
            <div className="funfacts-title-row">
              <img src={noteIcon} alt="note" className="funfacts-title-icon" />
              <span className="funfacts-title-text">Fun Facts</span>
            </div>
            <ul className="funfacts-list">
              <li>I’ve lived in Korea 🇰🇷, Singapore 🇸🇬, and now studying in the U.S 🇺🇸!</li>
              <li>I don’t eat cheeze... 🧀 (if this is a surprize!)</li>
              <li>I love to sing! 🎤</li>
            </ul>
          </div>
          <div className="photogallery-section">
            <div className="photogallery-title-row">
              <img src={cameraIcon} alt="camera" className="photogallery-title-icon" />
              <span className="photogallery-title-text">Photo Gallery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
