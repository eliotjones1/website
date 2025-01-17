import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} Eliot Jones. All rights reserved.</div>
    </footer>
  );
}

export default Footer;

