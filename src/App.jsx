import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import MatrixBackground from './components/MatrixBackground';
import Footer from './components/Footer';
import AnimatedCursor from './components/AnimatedCursor';

function App() {
  return (
    <div className="app-container">
      <MatrixBackground />
      <AnimatedCursor />
      <Navbar />
      <div className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;

