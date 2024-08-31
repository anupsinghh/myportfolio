// src/components/Projects.js

import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    title: "Project 1: Portfolio Website",
    description: "A personal portfolio website built with React to showcase my projects, skills, and background. Features include a modern design with responsive layouts and smooth transitions.",
    image: "https://via.placeholder.com/400x300?text=Portfolio+Website", // Placeholder image
    link: "https://example.com/project1"
  },
  {
    title: "Project 2: E-commerce Platform",
    description: "An e-commerce platform designed with a clean and intuitive UI, built using React and Node.js. Includes features like product listings, shopping cart, and secure payment integration.",
    image: "https://via.placeholder.com/400x300?text=E-commerce+Platform", // Placeholder image
    link: "https://example.com/project2"
  },
  {
    title: "Project 3: Task Management App",
    description: "A task management application with real-time collaboration features. Developed with React and Firebase, it allows users to create, manage, and share tasks seamlessly.",
    image: "https://via.placeholder.com/400x300?text=Task+Management+App", // Placeholder image
    link: "https://example.com/project3"
  },
];

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const project = projectsData[currentProjectIndex];

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="project-display">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
        </div>
        <div className="project-nav">
          <button className="nav-button" onClick={handlePrevClick}>❮</button>
          <button className="nav-button" onClick={handleNextClick}>❯</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
