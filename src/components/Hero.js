import React, { useEffect, useState, useRef } from 'react';
import { usePageTransition } from './PageTransition';
import './Hero.css';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { startTransition, isTransitioning } = usePageTransition();

  const scrollRef = useRef({
    accumulator: 0,
    targetProgress: 0,
    lastScrollTime: Date.now(),
    threshold: 200
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let animationFrame;
    const ref = scrollRef.current;

    const animate = () => {
      // Only handle decay when not scrolling
      if (ref.accumulator > 0 && Date.now() - ref.lastScrollTime > 300) {
        ref.accumulator = Math.max(0, ref.accumulator - 6);
        setScrollProgress(ref.accumulator / ref.threshold);
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (isTransitioning) return;

      const ref = scrollRef.current;
      ref.lastScrollTime = Date.now();

      if (e.deltaY > 0) {
        ref.accumulator = Math.min(ref.accumulator + e.deltaY * 0.8, ref.threshold);
      } else {
        ref.accumulator = Math.max(0, ref.accumulator + e.deltaY * 0.8);
      }

      const progress = ref.accumulator / ref.threshold;
      setScrollProgress(progress);

      if (ref.accumulator >= ref.threshold) {
        startTransition('/about');
        ref.accumulator = 0;
        setScrollProgress(0);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [startTransition, isTransitioning]);

  return (
    <section className={`hero ${isVisible ? 'visible' : ''}`}>
      {/* Top left botanical corner */}
      <svg className="hero-decoration hero-corner-tl" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="draw-line" d="M0 80 Q40 80 60 60 Q80 40 80 0" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <path className="draw-line delay-1" d="M0 100 Q50 100 75 75 Q100 50 100 0" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <circle className="fade-in delay-2" cx="60" cy="60" r="3" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <circle className="fade-in delay-3" cx="75" cy="75" r="2" fill="currentColor"/>
        {/* Small leaf */}
        <path className="draw-line delay-2" d="M60 60 Q45 50 50 35 Q55 50 60 60" stroke="currentColor" strokeWidth="0.5" fill="none"/>
      </svg>

      {/* Top right botanical corner */}
      <svg className="hero-decoration hero-corner-tr" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="draw-line" d="M150 80 Q110 80 90 60 Q70 40 70 0" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <path className="draw-line delay-1" d="M150 100 Q100 100 75 75 Q50 50 50 0" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <circle className="fade-in delay-2" cx="90" cy="60" r="3" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <circle className="fade-in delay-3" cx="75" cy="75" r="2" fill="currentColor"/>
        <path className="draw-line delay-2" d="M90 60 Q105 50 100 35 Q95 50 90 60" stroke="currentColor" strokeWidth="0.5" fill="none"/>
      </svg>

      {/* Bottom left botanical corner */}
      <svg className="hero-decoration hero-corner-bl" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="draw-line delay-3" d="M0 70 Q40 70 60 90 Q80 110 80 150" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <path className="draw-line delay-4" d="M0 50 Q50 50 75 75 Q100 100 100 150" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <circle className="fade-in delay-5" cx="60" cy="90" r="3" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <path className="draw-line delay-5" d="M60 90 Q45 100 50 115 Q55 100 60 90" stroke="currentColor" strokeWidth="0.5" fill="none"/>
      </svg>

      {/* Bottom right botanical corner */}
      <svg className="hero-decoration hero-corner-br" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="draw-line delay-3" d="M150 70 Q110 70 90 90 Q70 110 70 150" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <path className="draw-line delay-4" d="M150 50 Q100 50 75 75 Q50 100 50 150" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <circle className="fade-in delay-5" cx="90" cy="90" r="3" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <path className="draw-line delay-5" d="M90 90 Q105 100 100 115 Q95 100 90 90" stroke="currentColor" strokeWidth="0.5" fill="none"/>
      </svg>

      {/* Left side botanical branch */}
      <svg className="hero-decoration hero-decoration-left" viewBox="0 0 200 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem */}
        <path
          className="draw-line"
          d="M100 500 Q100 400 85 350 Q70 300 85 250 Q100 200 90 150 Q80 100 90 50"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        {/* Leaves */}
        <path className="draw-line delay-1" d="M85 350 Q50 340 40 315 Q55 310 85 325" stroke="currentColor" strokeWidth="0.75" fill="none"/>
        <path className="draw-line delay-2" d="M85 300 Q120 290 130 265 Q115 260 85 275" stroke="currentColor" strokeWidth="0.75" fill="none"/>
        <path className="draw-line delay-3" d="M88 250 Q55 240 45 215 Q60 210 88 225" stroke="currentColor" strokeWidth="0.75" fill="none"/>
        <path className="draw-line delay-4" d="M92 200 Q125 190 135 165 Q120 160 92 175" stroke="currentColor" strokeWidth="0.75" fill="none"/>
        <path className="draw-line delay-5" d="M90 150 Q60 140 50 115 Q65 110 90 125" stroke="currentColor" strokeWidth="0.75" fill="none"/>
        {/* Berries/dots */}
        <circle className="fade-in delay-2" cx="40" cy="315" r="4" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <circle className="fade-in delay-2" cx="40" cy="315" r="2" fill="currentColor"/>
        <circle className="fade-in delay-3" cx="130" cy="265" r="4" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <circle className="fade-in delay-3" cx="130" cy="265" r="2" fill="currentColor"/>
        <circle className="fade-in delay-4" cx="45" cy="215" r="4" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <circle className="fade-in delay-4" cx="45" cy="215" r="2" fill="currentColor"/>
        <circle className="fade-in delay-5" cx="135" cy="165" r="3" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <circle className="fade-in delay-6" cx="50" cy="115" r="3" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        {/* Extra delicate branches */}
        <path className="draw-line delay-6" d="M90 100 Q70 90 75 70" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <path className="draw-line delay-6" d="M90 80 Q110 70 105 50" stroke="currentColor" strokeWidth="0.5" fill="none"/>
      </svg>

      {/* Right side geometric constellation */}
      <svg className="hero-decoration hero-decoration-right" viewBox="0 0 200 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Star points */}
        <circle className="fade-in" cx="150" cy="80" r="2" fill="currentColor"/>
        <circle className="fade-in delay-1" cx="110" cy="120" r="3" fill="currentColor"/>
        <circle className="fade-in delay-1" cx="160" cy="140" r="2" fill="currentColor"/>
        <circle className="fade-in delay-2" cx="130" cy="180" r="2.5" fill="currentColor"/>
        <circle className="fade-in delay-2" cx="90" cy="200" r="2" fill="currentColor"/>
        <circle className="fade-in delay-3" cx="150" cy="240" r="3" fill="currentColor"/>
        <circle className="fade-in delay-3" cx="100" cy="280" r="2" fill="currentColor"/>
        <circle className="fade-in delay-4" cx="140" cy="320" r="2.5" fill="currentColor"/>
        <circle className="fade-in delay-4" cx="170" cy="360" r="2" fill="currentColor"/>
        <circle className="fade-in delay-5" cx="120" cy="400" r="3" fill="currentColor"/>
        {/* Connecting lines */}
        <path className="draw-line delay-2" d="M150 80 L110 120 L160 140 L130 180 L90 200" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <path className="draw-line delay-3" d="M130 180 L150 240 L100 280 L140 320" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <path className="draw-line delay-4" d="M140 320 L170 360 L120 400" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        {/* Dashed connecting lines */}
        <path className="draw-line delay-4" d="M110 120 L130 180" stroke="currentColor" strokeWidth="0.3" fill="none" strokeDasharray="3 5"/>
        <path className="draw-line delay-5" d="M160 140 L150 240" stroke="currentColor" strokeWidth="0.3" fill="none" strokeDasharray="3 5"/>
        <path className="draw-line delay-5" d="M90 200 L100 280" stroke="currentColor" strokeWidth="0.3" fill="none" strokeDasharray="3 5"/>
        {/* Orbit circles */}
        <circle className="fade-in delay-3" cx="130" cy="180" r="15" stroke="currentColor" strokeWidth="0.3" fill="none"/>
        <circle className="fade-in delay-4" cx="150" cy="240" r="12" stroke="currentColor" strokeWidth="0.3" fill="none"/>
        <circle className="fade-in delay-5" cx="140" cy="320" r="10" stroke="currentColor" strokeWidth="0.3" fill="none"/>
      </svg>

      {/* Center decorative frame */}
      <div className="hero-frame">
        <svg className="hero-frame-svg" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer frame corners */}
          <path className="draw-line delay-1" d="M50 50 L50 20 L80 20" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <path className="draw-line delay-1" d="M550 50 L550 20 L520 20" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <path className="draw-line delay-1" d="M50 350 L50 380 L80 380" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <path className="draw-line delay-1" d="M550 350 L550 380 L520 380" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          {/* Corner diamonds */}
          <path className="draw-line delay-2" d="M50 35 L35 50 L50 65 L65 50 Z" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <path className="draw-line delay-2" d="M550 35 L535 50 L550 65 L565 50 Z" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <path className="draw-line delay-2" d="M50 335 L35 350 L50 365 L65 350 Z" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <path className="draw-line delay-2" d="M550 335 L535 350 L550 365 L565 350 Z" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          {/* Center dots */}
          <circle className="fade-in delay-3" cx="50" cy="50" r="2" fill="currentColor"/>
          <circle className="fade-in delay-3" cx="550" cy="50" r="2" fill="currentColor"/>
          <circle className="fade-in delay-3" cx="50" cy="350" r="2" fill="currentColor"/>
          <circle className="fade-in delay-3" cx="550" cy="350" r="2" fill="currentColor"/>
        </svg>
      </div>

      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Eliot Jones</h1>
        <div className="hero-title-decoration">
          <svg viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="draw-line delay-4" d="M0 10 Q30 10 50 10" stroke="currentColor" strokeWidth="0.5"/>
            <circle className="fade-in delay-5" cx="60" cy="10" r="2" fill="currentColor"/>
            <path className="draw-line delay-5" d="M70 10 Q85 5 100 10 Q115 15 130 10" stroke="currentColor" strokeWidth="0.5"/>
            <circle className="fade-in delay-5" cx="140" cy="10" r="2" fill="currentColor"/>
            <path className="draw-line delay-4" d="M150 10 Q170 10 200 10" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </div>
        <p className="hero-tagline">
          Building
          <span className="highlight"> safer AI agents</span>
        </p>

      </div>

      <div className="hero-scroll-indicator" onClick={() => startTransition('/about')}>
        <svg className="scroll-progress-ring" width="60" height="60" viewBox="0 0 60 60">
          <circle
            className="scroll-progress-bg"
            cx="30"
            cy="30"
            r="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            className="scroll-progress-fill"
            cx="30"
            cy="30"
            r="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray={2 * Math.PI * 26}
            strokeDashoffset={2 * Math.PI * 26 * (1 - scrollProgress)}
            strokeLinecap="round"
          />
        </svg>
        <div className="scroll-indicator-content">
          <span>enter</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
