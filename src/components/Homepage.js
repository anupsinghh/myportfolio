import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Homepage.css';
import CartoonImage from './cartoon.png'; // Replace with your image path
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-content">
        <div className="content-container">
          <TypeAnimation
            sequence={["Hii, I'm Anup Singh", 1000]}
            wrapper="div"
            cursor={true}
            repeat={0}
            className="typed-text"
          />
          <h2>Welcome to my portfolio website</h2>

          <div className="button-container">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <button className="homepage-button">LinkedIn</button>
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <button className="homepage-button">GitHub</button>
            </a>
            <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="homepage-button">Resume</button>
            </a>
          </div>
        </div>
        <div className="cartoon-container">
          <img src={CartoonImage} alt="Cartoon waving" className="cartoon-image" />
        </div>
      </div>
      <div className="sections-container">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Homepage;
