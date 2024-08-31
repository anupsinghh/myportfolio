// src/components/About.js

import React from 'react';
import './About.css';
import AboutImage from './congratulations.png'; // Replace with your image path

const About = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        
        <p>
          I'm Anup Singh, a passionate backend developer with expertise in building scalable and efficient systems. 
          I love coding and am always eager to learn new technologies to enhance my skills.
        </p>
      </div>
      <div className="about-image-container">
        <img src={AboutImage} alt="Anup Singh" className="about-image" />
      </div>
    </div>
  );
};

export default About;
