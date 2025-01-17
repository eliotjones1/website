import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">Eliot Jones</div>
      <nav>
        <a href="#about">About</a>
        <a href="#research">Research</a>
        <a href="#personal">Personal</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default NavBar;

