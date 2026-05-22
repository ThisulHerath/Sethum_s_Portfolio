function Skills() {
  const skills = [
    "Java",
    "Spring Boot",
    "Python",
    "JavaScript",
    "MySQL",
    "Machine Learning",
    "TensorFlow",
    "PyTorch",
    "Git",
    "REST APIs",
    "HTML",
    "CSS",
    "R",
    "Pandas",
    "Scikit-learn",
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-[#0f172a] border border-cyan-500/20 p-5 rounded-2xl text-center hover:border-cyan-400 hover:-translate-y-2 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;