import "./Skills.css";

const dashboard = [
  {
    title: "Frontend",
    icon: "🖥",
    items: ["HTML", "CSS", "JavaScript", "React", "Vite"],
  },
  {
    title: "Programming",
    icon: "🐍",
    items: ["Python", "C", "C++"],
  },
  {
    title: "Cyber Security",
    icon: "🛡",
    items: [
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
    icon: "🛠",
    items: [
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

      <h2 className="dashboard-title">
        System Dashboard
      </h2>

      <div className="dashboard">

        {dashboard.map((card, index) => (
          <div className="panel" key={index}>

            <div className="panel-header">
              <span>{card.icon}</span>
              <h3>{card.title}</h3>
            </div>

            <div className="panel-body">

              {card.items.map((item, i) => (
                <div className="item" key={i}>
                  {item}
                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;
