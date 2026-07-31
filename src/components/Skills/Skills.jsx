import "./Skills.css";
import { useState } from "react";

const data = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Vite",
    "Responsive Design",
  ],

  backend: [
    "Python",
    "Flask",
    "REST APIs",
    "Authentication",
    "JSON",
  ],

  api: [
    "REST API",
    "FastAPI",
    "Fetch API",
    "Axios",
    "OpenWeather API",
  ],

  security: [
    "Linux",
    "Networking",
    "OWASP Top 10",
    "Burp Suite",
    "Wireshark",
  ],

  database: [
    "MySQL",
    "SQLite",
  ],

  tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Figma",
  ],
};

function Skills() {
  const [active, setActive] = useState("frontend");

  return (
    <section className="skills" id="skills">

      <div className="terminal">

        <div className="terminal-header">

          <div className="buttons">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

          <div className="terminal-title">
            terminal@avinash:~/technology-stack
          </div>

        </div>

        <div className="terminal-body">

          <p className="command">
            <span>$</span> help
          </p>

          <p>Select a module :</p>

          <div className="command-list">

            <button
              onClick={() => setActive("frontend")}
            >
              frontend
            </button>

            <button
              onClick={() => setActive("backend")}
            >
              backend
            </button>

            <button
              onClick={() => setActive("api")}
            >
              api
            </button>

            <button
              onClick={() => setActive("security")}
            >
              security
            </button>

            <button
              onClick={() => setActive("database")}
            >
              database
            </button>

            <button
              onClick={() => setActive("tools")}
            >
              tools
            </button>

          </div>

          <p className="command">
            <span>$</span> {active}
          </p>

          <div className="output">

            {data[active].map((skill, index) => (
              <p key={index}>
                ✔ {skill}
              </p>
            ))}

          </div>

          <div className="cursor">
            $
            <span className="blink">_</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;
