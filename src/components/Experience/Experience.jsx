import { motion } from "framer-motion";
import "./Experience.css";

const timeline = [
  {
    year: "2025",
    title: "Started B.Tech Cyber Security",
    company: "SRM Valliammai Engineering College",
    description:
      "Started my journey in Cyber Security while building a strong foundation in networking, programming, and secure software development.",
  },
  {
    year: "2026",
    title: "Frontend Development",
    company: "Self Learning",
    description:
      "Built responsive web applications using HTML, CSS, JavaScript, and React while improving UI/UX skills.",
  },
  {
    year: "2026",
    title: "Cyber Security Projects",
    company: "Personal Projects",
    description:
      "Developed AuthShield, Web Vulnerability Scanner, and explored browser extension security projects.",
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <motion.div
        className="experience-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>MY JOURNEY</p>
        <h2>Experience & Learning</h2>
      </motion.div>

      <div className="timeline">
        {timeline.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <span className="year">{item.year}</span>

              <h3>{item.title}</h3>

              <h4>{item.company}</h4>

              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
