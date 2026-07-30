import "./Skills.css";
import {
  FaCode,
  FaLaptopCode,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";

const dashboard = [
  {
    title: "Frontend",
    icon: <FaCode />,
    items: ["HTML", "CSS", "JavaScript", "React", "Vite"],
  },
  {
    title: "Programming",
    icon: <FaLaptopCode />,
    items: ["Python", "C", "C++"],
  },
  {
    title: "Cyber Security",
    icon: <FaShieldAlt />,
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
    icon: <FaTools />,
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

      <div className="section-heading">
        <p>TECHNICAL EXPERTISE</p>
        <h2>Skills & Technologies</h2>
      </div>

      <div className="dashboard">

        {dashboard.map((card, index) => (
          <div className="panel" key={index}>

            <div className="panel-header">
              <div className="icon">{card.icon}</div>

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
