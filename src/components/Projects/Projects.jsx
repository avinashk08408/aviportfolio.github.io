import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    title: "AuthShield",
    description:
      "A secure Role-Based Authentication System with login, registration, admin dashboard, password hashing and user management.",
    tech: ["React", "Python", "Flask", "SQLite"],
    image: "/projects/authshield.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Web Vulnerability Scanner",
    description:
      "A web application that scans websites for common vulnerabilities such as SQL Injection, XSS and insecure headers.",
    tech: ["Python", "Flask", "Security"],
    image: "/projects/scanner.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Fake GitHub Repository Detector",
    description:
      "Browser extension that analyses GitHub repositories and warns users about suspicious or potentially fake repositories.",
    tech: ["JavaScript", "Chrome Extension", "AI"],
    image: "/projects/github-detector.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Coming Soon",
    description:
      "More cybersecurity and web development projects will be added here.",
    tech: ["Future Project"],
    image: "/projects/coming-soon.png",
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <motion.div
        className="projects-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>MY WORK</p>
        <h2>Featured Projects</h2>
      </motion.div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ y: -10 }}
          >

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-buttons">

                <a href={project.github}>
                  <FaGithub />
                  GitHub
                </a>

                <a href={project.demo}>
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Projects;
