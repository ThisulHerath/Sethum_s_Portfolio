function Projects() {
  const projects = [
    {
      title: "Driving School Management System",
      tech: "Java • Spring Boot • MySQL",
      desc: "Web-based management system with booking, scheduling, CRUD operations and REST APIs."
    },
    {
      title: "Bus Scheduling & Booking System",
      tech: "Spring Boot • JSP • MySQL",
      desc: "Online reservation system with payments and schedule management."
    },
    {
      title: "Student Depression Prediction",
      tech: "Python • Machine Learning",
      desc: "ML classification system with 0.916 AUC using Gradient Boosting."
    },
    {
      title: "TCP Authentication Server",
      tech: "C • Linux • POSIX Sockets",
      desc: "Concurrent secure authentication server with rate limiting and token management."
    },
    {
      title: "Trip Management System",
      tech: "Java • Spring Boot • JPA",
      desc: "Complete trip booking and management system with guide scheduling."
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#0f172a] p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-cyan-400 mb-4">
                {project.tech}
              </p>

              <p className="text-gray-300 leading-7">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;