import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
      <footer style={{ textAlign: 'center', padding: '30px 20px', color: 'var(--text-muted)', fontSize: '0.85rem', borderTop: '1px solid #111' }}>
        [SYSTEM OVERRIDE SUCCESS] // © {new Date().getFullYear()} Sethum Perera
      </footer>
    </div>
  );
}

export default App;