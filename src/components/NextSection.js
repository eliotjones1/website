import React from 'react';
import { TransitionLink } from './PageTransition';
import './NextSection.css';

function NextSection({ to, label }) {
  return (
    <div className="next-section">
      <TransitionLink to={to} className="next-section-link">
        <span className="next-section-label">{label}</span>
        <svg className="next-section-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </TransitionLink>
    </div>
  );
}

export default NextSection;
