import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './PageTransition.css';

const PageTransitionContext = React.createContext();

export function usePageTransition() {
  return React.useContext(PageTransitionContext);
}

export function PageTransitionProvider({ children }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetPath, setTargetPath] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const startTransition = useCallback((path) => {
    if (path === location.pathname) return;
    setTargetPath(path);
    setIsTransitioning(true);
  }, [location.pathname]);

  useEffect(() => {
    if (isTransitioning && targetPath) {
      const timer = setTimeout(() => {
        navigate(targetPath);
        // Keep overlay visible briefly while new page loads
        setTimeout(() => {
          setIsTransitioning(false);
          setTargetPath(null);
        }, 600);
      }, 1400); // Duration of entry animation

      return () => clearTimeout(timer);
    }
  }, [isTransitioning, targetPath, navigate]);

  return (
    <PageTransitionContext.Provider value={{ startTransition, isTransitioning }}>
      {children}
      <div className={`page-transition-overlay ${isTransitioning ? 'active' : ''}`}>
        {/* Horizontal lines */}
        <svg className="transition-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line className="t-line t-line-1" x1="0" y1="20" x2="100" y2="20" />
          <line className="t-line t-line-2" x1="100" y1="40" x2="0" y2="40" />
          <line className="t-line t-line-3" x1="0" y1="60" x2="100" y2="60" />
          <line className="t-line t-line-4" x1="100" y1="80" x2="0" y2="80" />
        </svg>

        {/* Center botanical element */}
        <div className="transition-center">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main stem */}
            <path className="t-stem" d="M50 85 Q50 70 48 60 Q46 50 50 40 Q54 30 50 15" />
            {/* Left leaves */}
            <path className="t-leaf t-leaf-1" d="M48 60 Q35 55 30 45 Q38 42 48 52" />
            <path className="t-leaf t-leaf-2" d="M50 40 Q38 35 33 25 Q42 23 50 33" />
            {/* Right leaves */}
            <path className="t-leaf t-leaf-3" d="M48 55 Q60 50 68 42 Q62 38 50 48" />
            <path className="t-leaf t-leaf-4" d="M52 35 Q65 30 70 22 Q62 20 52 28" />
            {/* Small berries/dots */}
            <circle className="t-berry t-berry-1" cx="30" cy="45" r="2" />
            <circle className="t-berry t-berry-2" cx="68" cy="42" r="2" />
            <circle className="t-berry t-berry-3" cx="50" cy="15" r="2.5" />
          </svg>
        </div>

        {/* Left constellation */}
        <div className="transition-constellation transition-constellation-left">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="t-star t-star-1" cx="70" cy="25" r="2" />
            <circle className="t-star t-star-2" cx="45" cy="40" r="2.5" />
            <circle className="t-star t-star-3" cx="75" cy="55" r="1.5" />
            <circle className="t-star t-star-4" cx="55" cy="70" r="2" />
            <circle className="t-star t-star-5" cx="30" cy="60" r="1.5" />
            <path className="t-constellation-line t-const-1" d="M70 25 L45 40 L75 55 L55 70" />
            <path className="t-constellation-line t-const-2" d="M45 40 L30 60" />
            <circle className="t-orbit" cx="45" cy="40" r="10" />
          </svg>
        </div>

        {/* Right constellation */}
        <div className="transition-constellation transition-constellation-right">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="t-star t-star-1" cx="30" cy="30" r="2" />
            <circle className="t-star t-star-2" cx="55" cy="45" r="2.5" />
            <circle className="t-star t-star-3" cx="25" cy="60" r="1.5" />
            <circle className="t-star t-star-4" cx="50" cy="75" r="2" />
            <circle className="t-star t-star-5" cx="70" cy="55" r="1.5" />
            <path className="t-constellation-line t-const-1" d="M30 30 L55 45 L25 60 L50 75" />
            <path className="t-constellation-line t-const-2" d="M55 45 L70 55" />
            <circle className="t-orbit" cx="55" cy="45" r="10" />
          </svg>
        </div>

        {/* Corner flourishes */}
        <svg className="transition-corner transition-corner-tl" viewBox="0 0 100 100">
          <path className="t-corner-line" d="M0 60 Q30 60 40 40 Q50 20 80 0" />
        </svg>
        <svg className="transition-corner transition-corner-tr" viewBox="0 0 100 100">
          <path className="t-corner-line" d="M100 60 Q70 60 60 40 Q50 20 20 0" />
        </svg>
        <svg className="transition-corner transition-corner-bl" viewBox="0 0 100 100">
          <path className="t-corner-line" d="M0 40 Q30 40 40 60 Q50 80 80 100" />
        </svg>
        <svg className="transition-corner transition-corner-br" viewBox="0 0 100 100">
          <path className="t-corner-line" d="M100 40 Q70 40 60 60 Q50 80 20 100" />
        </svg>
      </div>
    </PageTransitionContext.Provider>
  );
}

// Custom Link component that triggers transition
export function TransitionLink({ to, children, className, ...props }) {
  const { startTransition } = usePageTransition();

  const handleClick = (e) => {
    e.preventDefault();
    startTransition(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
