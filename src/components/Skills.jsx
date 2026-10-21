import { ShieldCheck, Code2, ChartNoAxesCombined, Workflow } from 'lucide-react';
const icons = [ShieldCheck, Code2, ChartNoAxesCombined, Workflow];

const Skills = () => {
  const skillGroups = [
    {
      title: 'Cyber Security & Networks',
      icon: '>',
      items: [
        { name: 'Network Security / SOC Fundamentals', level: 82 },
        { name: 'POSIX Sockets / Linux Systems', level: 86 },
        { name: 'Authentication & Access Control', level: 80 },
        { name: 'Incident Response Mindset', level: 76 },
      ],
    },
    {
      title: 'Backend Engineering',
      icon: '#',
      items: [
        { name: 'Java / Spring Boot', level: 85 },
        { name: 'REST API Design', level: 88 },
        { name: 'MySQL / Data Modeling', level: 82 },
        { name: 'OOP & Clean Architecture', level: 84 },
      ],
    },
    {
      title: 'Data & Machine Learning',
      icon: '*',
      items: [
        { name: 'Python / Scikit-learn / Pandas', level: 84 },
        { name: 'Model Training & Evaluation', level: 81 },
        { name: 'Feature Engineering / Analytics', level: 79 },
        { name: 'Jupyter / Experiment Workflow', level: 83 },
      ],
    },
    {
      title: 'Tools & Collaboration',
      icon: '+',
      items: [
        { name: 'Git / GitHub', level: 87 },
        { name: 'Agile Team Workflow', level: 82 },
        { name: 'Documentation & Reporting', level: 80 },
        { name: 'Problem Solving Under Pressure', level: 86 },
      ],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="section-heading"><div><p className="eyebrow">02 / MY TOOLKIT</p><h2>Equipped to <span>explore.</span></h2></div><p className="section-intro">A growing toolkit across security,<br />engineering, and data.</p></div>
      <div className="skills-board">
        {skillGroups.map((group, index) => {
          const Icon = icons[index];
          return (
          <div key={group.title} className="skills-panel">
            <h3 className="skills-panel-title">
              <span className="skill-icon"><Icon size={22} /></span><span>{group.title}</span><span className="panel-number">0{index + 1}</span>
            </h3>
            <div className="skills-panel-list">
              {group.items.map((skill) => (
                <div key={skill.name} className="skill-meter">
                  <div className="skill-meter-head">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-meter-track">
                    <div className="skill-meter-fill" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ); })}
      </div>
    </section>
  );
};

export default Skills;
