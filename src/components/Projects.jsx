const Projects = () => {
  const projects = [
    {
      title: "Multi-Client TCP Authentication Server",
      tech: "C · Python · POSIX Sockets · Linux",
      year: "2025",
      desc: "Built a concurrent TCP authentication server handling simultaneous connections via fork(). Integrated salted password hashing (djb2 architecture), token-driven session expiration (300s), security lockout constraints after 3 failed tries, and rate-limiting enforcement (ERR 429)."
    },
    {
      title: "Student Depression Prediction System",
      tech: "Machine Learning | Python · Scikit-learn · Pandas",
      year: "2026",
      desc: "Developed an end-to-end classification pipeline parsing real-world lifestyle metrics. Trained 6 separate configurations, achieving peak performance (F1 Score: 0.871, AUC: 0.916) leveraging Gradient Boosting paradigms."
    },
    {
      title: "Driving School Registration & Scheduling System",
      tech: "Java · Spring Boot · MySQL · JavaScript · HTML · CSS",
      year: "2025",
      desc: "Architected a full CRUD platform to cleanly orchestrate enrollment flows, user modules, and multi-tenant resource matching. Leveraged encapsulation and OOP mapping paradigms inside a robust Spring platform configuration."
    },
    {
      title: "Web-Based Bus Scheduling & Booking System",
      tech: "Java · Spring Boot · MySQL · JSP · Data Structures",
      year: "2024",
      desc: "Engineered high-concurrency seat reservation services complete with transaction simulation pipelines, dynamic route adjustments, and optimized collections parsing protocols."
    },
    {
      title: "Web-Based Trip Management System",
      tech: "Java · Spring Boot · Spring Data JPA · MySQL · JSP",
      year: "2024",
      desc: "Designed full MVC architecture backend supporting resource scheduling, guide matching automation, profile authentication management, and structured transactional user feedback loops."
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">&gt; cd ./projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <span className="project-year">[{proj.year}]</span>
            <h3 className="project-title">{proj.title}</h3>
            <div className="project-tech">{proj.tech}</div>
            <p className="project-desc">{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;