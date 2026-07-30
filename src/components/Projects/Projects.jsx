import { useState, useEffect } from "react";
import "./Projects.css";

const projects = [
  {
    title: "AuthShield",
    image: "/projects/authshield.png",
    tech: "React • Flask • SQLite",
    description: "Secure authentication system with RBAC.",
  },
  {
    title: "Web Vulnerability Scanner",
    image: "/projects/scanner.png",
    tech: "Python • Flask",
    description: "Detects common web vulnerabilities.",
  },
  {
    title: "Fake GitHub Repo Detector",
    image: "/projects/github-detector.png",
    tech: "React • AI",
    description: "Detects fake GitHub repositories.",
  },
  {
    title: "Coming Soon",
    image: "/projects/coming-soon.png",
    tech: "More Projects",
    description: "More exciting cybersecurity projects.",
  },
];

function Projects() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const next = () =>
    setCurrent((current + 1) % projects.length);

  const prev = () =>
    setCurrent((current - 1 + projects.length) % projects.length);

  let startX = 0;

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      <div
        className="carousel"
        onTouchStart={(e) => (startX = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const endX = e.changedTouches[0].clientX;

          if (startX - endX > 50) next();
          if (endX - startX > 50) prev();
        }}
      >
        <div className="project-card">
          <img
            src={projects[current].image}
            alt={projects[current].title}
          />

          <div className="project-content">
            <h3>{projects[current].title}</h3>

            <p>{projects[current].description}</p>

            <span>{projects[current].tech}</span>
          </div>
        </div>
      </div>

      <div className="dots">
        {projects.map((_, index) => (
          <span
            key={index}
            className={current === index ? "active-dot" : ""}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Projects;
