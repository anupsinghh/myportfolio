import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ParticlesBackground />
        <Navbar />
        <MainContent />
      </div>
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {location.pathname === '/' && <Footer />}
    </>
  );
}

export default App;
