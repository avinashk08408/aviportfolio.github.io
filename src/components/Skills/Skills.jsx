import { useState } from "react";
import "./Skills.css";

function Skills() {
  const [active, setActive] = useState(null);

  const skillGroups = [
    {
      number: "01",
      title: "EXPERIENCE LAYER",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      number: "02",
      title: "PROGRAMMING",
      skills: ["Python", "Go", "Java", "C", "C++"],
    },
    {
      number: "03",
      title: "DATA & TOOLS",
      skills: ["SQL", "Git", "GitHub"],
    },
    {
      number: "04",
      title: "NETWORKING",
      skills: ["Networking", "TCP/IP", "HTTP"],
    },
  ];

  const toggleSkill = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="skills" id="skills">

      {/* Heading */}
      <div className="section-title">
        <p>CAPABILITIES</p>
        <h2>ENGINEERING STACK</h2>
      </div>

      <p className="skills-subtitle">
        How I build, secure, and ship products.
      </p>

      {/* Skill Layers */}
      <div className="skills-container">

        {skillGroups.map((group, index) => (
          <div
            className={`skill-layer ${
              active === index ? "active" : ""
            }`}
            key={group.number}
          >

            {/* Header */}
            <button
              className="skill-header"
              onClick={() => toggleSkill(index)}
              aria-expanded={active === index}
            >
              <div className="skill-title">
                <span className="skill-number">
                  {group.number}
                </span>

                <span>{group.title}</span>
              </div>

              <span className="skill-icon">
                {active === index ? "−" : "+"}
              </span>
            </button>

            {/* Expandable Content */}
            <div className="skill-content">
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;
