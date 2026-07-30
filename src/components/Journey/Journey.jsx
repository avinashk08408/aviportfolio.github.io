import "./Journey.css";
function Experience() {
  const experiences = [
    {
      year: "2025 - Present",
      title: "Cyber Security Student",
      company: "SRM Valliammai Engineering College",
      description:
        "Learning networking, Linux, ethical hacking, web security, Python, and cybersecurity fundamentals."
    },
    {
      year: "2025",
      title: "Frontend Developer",
      company: "Personal Projects",
      description:
        "Built responsive websites using HTML, CSS, JavaScript, React, and Vite with modern UI/UX."
    },
    {
      year: "2026",
      title: "Cyber Security Projects",
      company: "Self Learning",
      description:
        "Developing projects such as AuthShield, Web Vulnerability Scanner, and other cybersecurity tools."
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="section-title">
          Experience <span>& Journey</span>
        </h2>

        <div className="timeline">
          {experiences.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>

                <h3>{item.title}</h3>

                <h4>{item.company}</h4>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
