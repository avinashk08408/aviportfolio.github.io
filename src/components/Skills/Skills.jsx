import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend",
    icon: "</>",
    skills: ["HTML", "CSS", "JavaScript", "React", "Vite"],
  },
  {
    title: "Programming",
    icon: "{ }",
    skills: ["Python", "C", "C++"],
  },
  {
    title: "Cyber Security",
    icon: "🛡",
    skills: [
      "Linux",
      "Networking",
      "OWASP",
      "Nmap",
      "Burp Suite",
      "Wireshark",
    ],
  },
  {
    title: "Tools",
    icon: "⚡",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Figma",
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="terminal">

        <div className="terminal-header">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>

          <h2>Tech Command Center</h2>
        </div>

        <div className="terminal-body">

          {skillGroups.map((group, index) => (
            <div className="command-box" key={index}>

              <h3>
                <span>{group.icon}</span> {group.title}
              </h3>

              <div className="tags">

                {group.skills.map((skill, i) => (
                  <span className="tag" key={i}>
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;
