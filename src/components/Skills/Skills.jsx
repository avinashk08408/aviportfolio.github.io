import "./Skills.css";
import { useState } from "react";
import {
  FaLaptopCode,
  FaServer,
  FaShieldAlt,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

const arsenal = [
  {
    id: 0,
    icon: <FaLaptopCode />,
    category: "Frontend",
    title: "Frontend Arsenal",
    status: "READY",
    projects: "5+ Projects",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Vite",
      "Responsive Design",
    ],
  },

  {
    id: 1,
    icon: <FaServer />,
    category: "Backend",
    title: "Backend Arsenal",
    status: "READY",
    projects: "3+ Projects",
    tech: [
      "Python",
      "Flask",
      "REST APIs",
      "Authentication",
      "JSON",
    ],
  },

  {
    id: 2,
    icon: <FaShieldAlt />,
    category: "Cyber Security",
    title: "Cyber Arsenal",
    status: "LEARNING",
    projects: "Hackathon Projects",
    tech: [
      "Linux",
      "Networking",
      "OWASP Top 10",
      "Wireshark",
      "Burp Suite",
    ],
  },

  {
    id: 3,
    icon: <FaDatabase />,
    category: "Database",
    title: "Database Arsenal",
    status: "READY",
    projects: "SQL Projects",
    tech: [
      "MySQL",
      "SQLite",
    ],
  },

  {
    id: 4,
    icon: <FaTools />,
    category: "Tools",
    title: "Developer Toolkit",
    status: "ACTIVE",
    projects: "Daily Workflow",
    tech: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Figma",
    ],
  },
];

function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section className="skills" id="skills">

      <div className="section-title">
        <p>CYBER ARSENAL</p>
        <h2>Technologies I Use to Build</h2>
      </div>

      <div className="arsenal-menu">

        {arsenal.map((item) => (
          <div
            key={item.id}
            className={`arsenal-card ${
              active === item.id ? "active-card" : ""
            }`}
            onClick={() => setActive(item.id)}
          >
            <div className="arsenal-icon">
              {item.icon}
            </div>

            <h3>{item.category}</h3>

          </div>
        ))}

      </div>

      <div className="arsenal-details">

        <div className="details-header">

          <div className="details-icon">
            {arsenal[active].icon}
          </div>

          <div>

            <h3>{arsenal[active].title}</h3>

            <p>Status : {arsenal[active].status}</p>

          </div>

        </div>

        <div className="tech-grid">

          {arsenal[active].tech.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}

        </div>

        <div className="project-count">
          {arsenal[active].projects}
        </div>

      </div>

    </section>
  );
}

export default Skills;
