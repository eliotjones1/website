import React from 'react';
import './LineArt.css';

// Delicate botanical/geometric decorative elements
export function BotanicalDivider() {
  return (
    <div className="botanical-divider">
      <svg viewBox="0 0 400 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Center flower/star */}
        <circle cx="200" cy="30" r="4" stroke="currentColor" strokeWidth="1" fill="none"/>
        <circle cx="200" cy="30" r="8" stroke="currentColor" strokeWidth="0.5" fill="none"/>

        {/* Left branch */}
        <path d="M180 30 Q120 30 60 30" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <path d="M140 30 Q130 20 120 25" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <path d="M110 30 Q100 40 90 35" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <circle cx="120" cy="25" r="2" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <circle cx="90" cy="35" r="2" stroke="currentColor" strokeWidth="0.5" fill="none"/>

        {/* Right branch (mirrored) */}
        <path d="M220 30 Q280 30 340 30" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <path d="M260 30 Q270 20 280 25" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <path d="M290 30 Q300 40 310 35" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <circle cx="280" cy="25" r="2" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <circle cx="310" cy="35" r="2" stroke="currentColor" strokeWidth="0.5" fill="none"/>
      </svg>
    </div>
  );
}

export function GeometricAccent({ position = 'left' }) {
  return (
    <div className={`geometric-accent geometric-accent-${position}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Diamond shape */}
        <path d="M50 10 L70 50 L50 90 L30 50 Z" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        {/* Inner elements */}
        <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <circle cx="50" cy="50" r="2" fill="currentColor"/>
        {/* Corner dots */}
        <circle cx="50" cy="10" r="2" fill="currentColor"/>
        <circle cx="50" cy="90" r="2" fill="currentColor"/>
        <circle cx="30" cy="50" r="2" fill="currentColor"/>
        <circle cx="70" cy="50" r="2" fill="currentColor"/>
      </svg>
    </div>
  );
}

export function SoccerBall() {
  return (
    <div className="soccer-ball-icon">
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="1" fill="none"/>
        {/* Pentagon pattern - simplified fine line style */}
        <path d="M30 10 L40 22 L37 35 L23 35 L20 22 Z" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <path d="M30 10 L30 5" stroke="currentColor" strokeWidth="0.5"/>
        <path d="M40 22 L50 18" stroke="currentColor" strokeWidth="0.5"/>
        <path d="M37 35 L45 45" stroke="currentColor" strokeWidth="0.5"/>
        <path d="M23 35 L15 45" stroke="currentColor" strokeWidth="0.5"/>
        <path d="M20 22 L10 18" stroke="currentColor" strokeWidth="0.5"/>
      </svg>
    </div>
  );
}

export function DogSilhouette() {
  return (
    <div className="dog-silhouette">
      <svg viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Simple, elegant dog profile */}
        <path
          d="M10 40 Q15 35 20 38 L25 35 Q30 30 35 32 L40 30 Q50 25 55 28 Q60 25 65 27 L68 25 Q72 20 75 22 L75 28 Q73 32 70 35 L65 40 Q55 42 45 40 L30 42 Q20 44 15 42 L10 40"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        {/* Eye */}
        <circle cx="70" cy="27" r="1.5" fill="currentColor"/>
        {/* Ear */}
        <path d="M60 25 Q58 18 62 20" stroke="currentColor" strokeWidth="0.5" fill="none"/>
      </svg>
    </div>
  );
}

export function BookStack() {
  return (
    <div className="book-stack">
      <svg viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stacked books */}
        <rect x="10" y="50" width="40" height="8" stroke="currentColor" strokeWidth="1" fill="none"/>
        <rect x="8" y="40" width="44" height="8" stroke="currentColor" strokeWidth="1" fill="none"/>
        <rect x="12" y="30" width="36" height="8" stroke="currentColor" strokeWidth="1" fill="none"/>
        {/* Open book on top */}
        <path d="M15 25 Q30 20 30 10 Q30 20 45 25" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M30 10 L30 25" stroke="currentColor" strokeWidth="0.5"/>
      </svg>
    </div>
  );
}

export function CornerDecoration({ position = 'top-left' }) {
  return (
    <div className={`corner-decoration corner-decoration-${position}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 50 Q0 0 50 0" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <path d="M0 70 Q0 0 70 0" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <circle cx="25" cy="25" r="3" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <circle cx="35" cy="15" r="2" fill="currentColor"/>
        <circle cx="15" cy="35" r="2" fill="currentColor"/>
      </svg>
    </div>
  );
}
