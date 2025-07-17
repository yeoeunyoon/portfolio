import React from 'react';
import './PageControl.css';

interface PageControlProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

const PageControl: React.FC<PageControlProps> = ({ activePage, onPageChange }) => {
  const pages = ['home', 'me', 'experience', 'project', 'skills', 'contact'];
  const currentPageIndex = pages.indexOf(activePage);

  return (
    <div className="page-control">
      {pages.map((page, index) => (
        <button
          key={page}
          className={`page-dot ${index === currentPageIndex ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
          aria-label={`Go to ${page} page`}
        />
      ))}
    </div>
  );
};

export default PageControl;
