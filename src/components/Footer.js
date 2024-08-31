// src/components/Footer.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Anup Singh. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
