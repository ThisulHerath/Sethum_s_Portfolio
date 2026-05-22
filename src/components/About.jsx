import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">&gt; whoami</h2>
      <p style={{ lineHeight: '1.8', fontSize: '1rem', color: 'var(--text-main)' }}>
        I am an undergraduate pursuing a unique parallel track combining technical rigor and analytics: 
        specializing in <strong>Cyber Security</strong> at SLIIT alongside <strong>Industrial Statistics & Mathematical Finance</strong> at the University of Colombo. 
        I have a strong interest in securing digital infrastructure, data analytics, and analytical problem-solving.
        <br /><br />
        Alongside tech, discipline drives my execution. I have represented Sri Lanka at multiple international badminton tournaments, 
        serving as <strong>Team Captain</strong> at both the World Junior Championship (Spain) and Asian Junior Championship (Myanmar). 
        As an Under 21 South Asian Games Silver Medalist, I apply the exact same tactical discipline, leadership under fire, and adaptive mindset built on the court straight into managing modern data frameworks and structural security issues.
      </p>
    </section>
  );
};

export default About;