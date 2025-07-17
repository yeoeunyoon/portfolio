import React from 'react';
import './NavigationArrow.css';
import leftArrow from '../images/leftarrow.png';
import rightArrow from '../images/rightarrow.png';

interface NavigationArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
  isVisible: boolean;
}

const NavigationArrow: React.FC<NavigationArrowProps> = ({ 
  direction, 
  onClick, 
  isVisible 
}) => {
  if (!isVisible) return null;

  return (
    <button 
      className={`nav-arrow nav-arrow-${direction}`}
      onClick={onClick}
      aria-label={`Navigate ${direction}`}
    >
      <img 
        src={direction === 'left' ? leftArrow : rightArrow} 
        alt={`${direction} arrow`}
        className="arrow-image"
      />
    </button>
  );
};

export default NavigationArrow; 