import "./Journey.css";
import { FaUniversity, FaGraduationCap, FaSchool } from "react-icons/fa";

const education = [
  {
    icon: <FaUniversity />,
    title: "B.E Cyber Security",
    school: "SRM Valliammai Engineering College",
    year: "2025 - Present",
    status: "Pursuing",
    current: true,
  },
  {
    icon: <FaGraduationCap />,
    title: "Higher Secondary",
    school: "Don Bosco Matric Hr. Sec. School",
    year: "2025",
    status: "85%",
  },
  {
    icon: <FaSchool />,
    title: "Secondary School",
    school: "Don Bosco Matric Hr. Sec. School",
    year: "2023",
    status: "90%",
  },
];

function Journey() {
  return (
    <section className="journey" id="journey">

      <div className="section-title">
        <p>ACADEMIC PASSPORT</p>
        <h2>Verified Learning Records</h2>
      </div>

      <div className="passport-grid">

        {education.map((item, index) => (
          <div
            className={`passport-card ${item.current ? "current" : ""}`}
            key={index}
          >
            <div className="icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.school}</p>

            <span>{item.year}</span>

            <div className="badge">
              {item.current ? "🟢 " : "⭐ "}
              {item.status}
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Journey;
