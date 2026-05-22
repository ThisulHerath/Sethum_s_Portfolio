import { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Multi-Client TCP Authentication Server",
      tech: "C · Python · POSIX Sockets · Linux",
      year: "2025",
      desc: "Built a concurrent TCP authentication server handling simultaneous connections via fork(). Integrated salted password hashing (djb2 architecture), token-driven session expiration (300s), security lockout constraints after 3 failed tries, and rate-limiting enforcement (ERR 429)."
      ,
      details: "This project focuses on secure authentication workflows, concurrent request handling, and defensive controls. It includes session token expiry, brute-force mitigation, and structured server-side logging for operational visibility."
    },
    {
      title: "Student Depression Prediction System",
      tech: "Machine Learning | Python · Scikit-learn · Pandas",
      year: "2026",
      desc: "Developed an end-to-end classification pipeline parsing real-world lifestyle metrics. Trained 6 separate configurations, achieving peak performance (F1 Score: 0.871, AUC: 0.916) leveraging Gradient Boosting paradigms."
      ,
      details: "The system compares multiple preprocessing and model configurations, then evaluates them using F1 score and ROC-AUC. It was built to support repeatable experimentation and clearer model selection."
    },
    {
      title: "Driving School Registration & Scheduling System",
      tech: "Java · Spring Boot · MySQL · JavaScript · HTML · CSS",
      year: "2025",
      desc: "Architected a full CRUD platform to cleanly orchestrate enrollment flows, user modules, and multi-tenant resource matching. Leveraged encapsulation and OOP mapping paradigms inside a robust Spring platform configuration."
      ,
      details: "This system centralizes student registration, scheduling, and resource allocation. The backend design emphasizes maintainability, relational data integrity, and modular controller/service boundaries."
    },
    {
      title: "Web-Based Bus Scheduling & Booking System",
      tech: "Java · Spring Boot · MySQL · JSP · Data Structures",
      year: "2024",
      desc: "Engineered high-concurrency seat reservation services complete with transaction simulation pipelines, dynamic route adjustments, and optimized collections parsing protocols."
      ,
      details: "The booking flow was designed around seat reservation consistency, route adjustments, and transaction simulation. It highlights practical concurrency handling and structured data processing."
    },
    {
      title: "Web-Based Trip Management System",
      tech: "Java · Spring Boot · Spring Data JPA · MySQL · JSP",
      year: "2024",
      desc: "Designed full MVC architecture backend supporting resource scheduling, guide matching automation, profile authentication management, and structured transactional user feedback loops."
      ,
      details: "This project ties together scheduling, guide assignment, authentication, and feedback into one MVC stack. It was built to keep the workflows transactional and easy to extend."
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">&gt; cd ./projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-card-header">
              <h3 className="project-title">{proj.title}</h3>
              <span className="project-year">[{proj.year}]</span>
            </div>
            <div className="project-tech">{proj.tech}</div>
            <p className="project-desc">{proj.desc}</p>
            <button
              type="button"
              className="project-more-btn"
              onClick={() => setSelectedProject(proj)}
            >
              View More
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(event) => event.stopPropagation()}>
            <div className="project-modal-header">
              <div>
                <span className="project-year">[{selectedProject.year}]</span>
                <h3>{selectedProject.title}</h3>
              </div>
              <button type="button" className="project-modal-close" onClick={() => setSelectedProject(null)}>
                Close
              </button>
            </div>
            <p className="project-tech">{selectedProject.tech}</p>
            <p className="project-desc expanded">{selectedProject.desc}</p>
            {selectedProject.details && (
              <p className="project-desc" style={{ marginTop: '12px' }}>{selectedProject.details}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;