import "./Projects.css";

const projects = [
  {
    title: "AuthShield",
    description: "Secure authentication system with role-based access control.",
    image: "/projects/authshield.png",
    tech: ["React", "Flask", "SQLite"],
    github: "#",
    demo: "#",
  },
  {
    title: "Web Vulnerability Scanner",
    description: "Scans websites for common vulnerabilities.",
    image: "/projects/scanner.png",
    tech: ["Python", "Flask"],
    github: "#",
    demo: "#",
  },
  {
    title: "Fake GitHub Repo Detector",
    description: "Detects fake GitHub repositories using AI.",
    image: "/projects/github-detector.png",
    tech: ["React", "AI"],
    github: "#",
    demo: "#",
  },
  {
    title: "Coming Soon",
    description: "More cybersecurity projects.",
    image: "/projects/coming-soon.png",
    tech: ["Cyber"],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="section-heading">
        <p>PORTFOLIO</p>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-scroll">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <img src={project.image} alt={project.title} />

            <div className="project-info">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="buttons">

                <a href={project.github}>GitHub</a>

                <a href={project.demo}>Live Demo</a>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;
