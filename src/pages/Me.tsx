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
import wallPaper from '../images/wallpaper.png';
import koreaFlag from '../images/country/korea.png';
import singaporeFlag from '../images/country/singapore.png';
import usFlag from '../images/country/us.png';

const Me = () => {
  return (
    <div className="me-root" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <div className="experience-background" style = {{backgroundImage: `url(${wallPaper})`}}/>
      {/* Profile Section */}
      <div className="profile-section frost-glass">
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
          <a href="https://github.com/yeoeunyoon" target="_blank" rel="noopener noreferrer">
            <img src={githubImg} alt="github" className="profile-link-img" />
          </a>
          <a href="https://www.linkedin.com/in/jasmineyoon04/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinImg} alt="linkedin" className="profile-link-img" />
          </a>
        </div>
      </div>
      {/* Main Content */}
      <div className="me-main">
        <div className="about-section frost-glass">
          <div className="about-title-row">
            <img src={starIcon} alt="star" className="about-title-icon" />
            <span className="about-title-text">About Me</span>
          </div>
          <div className="about-head">Hi, I’m Jasmine! <span role="img" aria-label="wave">👋</span></div>
          <div className="about-desc">
            I enjoy building full-stack applications, exploring quantitative finance, and uncovering insights through data analysis. Passionate about bridging tech and impact, I’ve interned across healthtech and fintech, and I’m always looking to learn something new—whether it’s coding a tool, designing a dashboard, or solving a tough algorithmic challenge.
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
          <div className="funfacts-section frost-glass">
            <div className="funfacts-title-row">
              <img src={noteIcon} alt="note" className="funfacts-title-icon" />
              <span className="funfacts-title-text">Fun Facts</span>
            </div>
            <ul className="funfacts-list">
              <li> I’ve lived in Korea <img src={koreaFlag} alt="Korea" style={{width:'26px',verticalAlign:'middle',margin:'0 2px'}}/>,
                Singapore <img src={singaporeFlag} alt="Singapore" style={{width:'22px',verticalAlign:'middle',margin:'0 2px'}}/>,
                and now studying in the U.S <img src={usFlag} alt="US" style={{width:'22px',verticalAlign:'middle',margin:'0 2px'}}/>!</li>
              <li> I don’t eat cheeze... 🧀 (if this is a surprize!)</li>
              <li> I love to sing! 🎤</li>
            </ul>
          </div>
          <div className="photogallery-section frost-glass">
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
