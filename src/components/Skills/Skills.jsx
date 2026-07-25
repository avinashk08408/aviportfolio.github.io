import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaLinux
} from "react-icons/fa";

import {
  SiCplusplus,
  SiMysql
} from "react-icons/si";

import "./Skills.css";

const skills = [
  {
    title: "Frontend",
    items: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: <FaPython />, name: "Python" },
      { icon: <SiCplusplus />, name: "C++" },
      { icon: <SiMysql />, name: "SQL" },
    ],
  },
  {
    title: "Cyber Security",
    items: [
      { icon: "🛡️", name: "Networking" },
      { icon: "🔐", name: "OWASP" },
      { icon: "⚔️", name: "CTF" },
      { icon: "🌐", name: "Web Security" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaLinux />, name: "Linux" },
      { icon: "💻", name: "VS Code" },
      { icon: "🐙", name: "GitHub" },
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">

      <motion.div
        className="skills-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>TECH STACK</p>
        <h2>Skills</h2>
      </motion.div>

      <div className="skills-grid">

        {skills.map((group) => (
          <motion.div
            className="skill-box"
            key={group.title}
            whileHover={{ y: -8 }}
          >

            <h3>{group.title}</h3>

            <div className="skill-list">

              {group.items.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <span className="icon">{skill.icon}</span>
                  <p>{skill.name}</p>
                </div>
              ))}

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Skills;
