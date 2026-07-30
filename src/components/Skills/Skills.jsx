import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Vite"],
  },
  {
    title: "Programming",
    skills: ["Python", "C", "C++"],
  },
  {
    title: "Cyber Security",
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

      <div className="section-heading">
        <p>TECH STACK</p>
        <h2>Skills & Technologies</h2>
      </div>

      <div className="skills-dashboard">

        {skillGroups.map((group, index) => (
          <div className="skill-group" key={index}>

            <h3>{group.title}</h3>

            <div className="skill-tags">

              {group.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;
