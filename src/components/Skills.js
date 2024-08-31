// src/components/Skills.js

import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-content">
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Redux</li>
            {/* Add more frontend skills as needed */}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>REST APIs</li>
            {/* Add more backend skills as needed */}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Tools</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Docker</li>
            <li>Webpack</li>
            <li>Jenkins</li>
            <li>VS Code</li>
            {/* Add more tools as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
