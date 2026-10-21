import { useRef, useState } from 'react';
import { ArrowUpRight, ShieldCheck, ChartNoAxesCombined, Code2, X } from 'lucide-react';
const categories = ['Security', 'Data & ML', 'Engineering', 'Engineering', 'Engineering'];
const projectIcons = [ShieldCheck, ChartNoAxesCombined, Code2, Code2, Code2];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All work');
  const dialog = useRef(null);
  const openProject = (project) => { setSelectedProject(project); dialog.current.showModal(); };
  const closeProject = () => dialog.current.close();

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

  const visibleProjects = projects.map((project, index) => ({ ...project, category: categories[index], index })).filter(project => filter === 'All work' || project.category === filter);
  return <section id="projects" className="section projects-section">
    <div className="section-heading"><div><p className="eyebrow">03 / SELECTED WORK</p><h2>Learning by <span>building.</span></h2></div><span className="section-code">&lt;projects /&gt;</span></div>
    <div className="projects-toolbar"><p>Ideas turned into working systems.</p><div className="project-filters" role="group" aria-label="Filter projects">{['All work', 'Security', 'Data & ML', 'Engineering'].map(category => <button key={category} aria-pressed={filter === category} className={filter === category ? 'selected' : ''} onClick={() => setFilter(category)}>{category}{category === 'All work' && <span>05</span>}</button>)}</div></div>
    <div className="projects-grid">{visibleProjects.map(project => {
      const Icon = projectIcons[project.index];
      return <article className={`project-card ${project.index === 0 ? 'featured-project' : ''}`} key={project.title}>
        <div className="project-card-top"><span className="project-icon"><Icon size={24} /></span><span className="project-category">{project.category}</span><span className="project-year">{project.year}</span></div>
        <span className="project-index">PROJECT / 0{project.index + 1}</span><h3>{project.title}</h3><p className="project-desc">{project.desc}</p>
        <div className="project-tags">{project.tech.split(/ · | \| /).map(tech => <span key={tech}>{tech}</span>)}</div>
        <button className="project-more-btn" onClick={() => openProject(project)}>Explore project <ArrowUpRight size={18} /></button>
      </article>;
    })}</div>
    <dialog ref={dialog} className="project-modal" aria-labelledby="project-dialog-title" onClick={event => { if (event.target === dialog.current) { const rect = dialog.current.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeProject(); } }}>
      {selectedProject && <><div className="project-modal-header"><span className="eyebrow">{selectedProject.category} / {selectedProject.year}</span><button className="dialog-close" aria-label="Close project details" onClick={closeProject}><X size={22} /></button></div><h2 id="project-dialog-title">{selectedProject.title}</h2><p className="project-tech">{selectedProject.tech}</p><p>{selectedProject.desc}</p><p>{selectedProject.details}</p><button className="button button-secondary" onClick={closeProject}>Back to projects</button></>}
    </dialog>
  </section>;
};
export default Projects;
