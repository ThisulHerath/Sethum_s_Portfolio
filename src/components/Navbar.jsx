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
      </div>
    </nav>
  );
};

export default Navbar;