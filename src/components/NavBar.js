import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="navbar-logo" onClick={closeMenu}>Eliot Jones</Link>

      <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={menuOpen ? 'open' : ''}>
        <Link
          to="/about"
          onClick={closeMenu}
          className={isActive('/about') ? 'active' : ''}
        >
          About
        </Link>
        <Link
          to="/research"
          onClick={closeMenu}
          className={isActive('/research') ? 'active' : ''}
        >
          Research
        </Link>
        <Link
          to="/personal"
          onClick={closeMenu}
          className={isActive('/personal') ? 'active' : ''}
        >
          Personal
        </Link>
        <Link
          to="/contact"
          onClick={closeMenu}
          className={isActive('/contact') ? 'active' : ''}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
