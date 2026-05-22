import React from 'react';

const Skills = () => {
  const categories = [
    "Java", "JavaScript", "Python", "C", "R", 
    "Spring Boot", "HTML", "CSS", "MySQL",
    "Git", "GitHub", "Agile Methodologies", "OOP", 
    "RESTful APIs", "Machine Learning", "Supervised Learning", 
    "TensorFlow", "PyTorch", "Jupyter Notebook", "Scikit-learn", 
    "Pandas", "Matplotlib", "POSIX Sockets", "Linux"
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">&gt; sys.get_skills()</h2>
      <div className="skills-grid">
        {categories.map((skill, index) => (
          <div key={index} className="skill-tag">
            + {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;