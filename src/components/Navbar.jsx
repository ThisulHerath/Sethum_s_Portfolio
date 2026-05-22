import React from 'react';
import { FaTerminal } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="cyber-nav">
      <div className="nav-logo">
        <FaTerminal /> sethum@secops:~#
      </div>
      <div className="nav-links">
        <a href="#hero">// home</a>
        <a href="#about">// whoami</a>
        <a href="#skills">// skills</a>
        <a href="#projects">// projects</a>
        <a href="#contact">// contact me</a>
        <a href="/resume.pdf" download="Sethum_Perera_Resume.pdf" className="nav-resume-link">
          GET_RESUME.pdf
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
