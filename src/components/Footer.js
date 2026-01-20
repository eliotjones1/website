import React from 'react';
import './Footer.css';
import { BotanicalDivider } from './LineArt';

function Footer() {
  return (
    <footer className="footer">
      <BotanicalDivider />
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Eliot Jones</p>
      </div>
    </footer>
  );
}

export default Footer;
