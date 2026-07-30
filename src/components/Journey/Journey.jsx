import "./Journey.css";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";

function Journey() {
  const education = [
    {
      icon: <FaUniversity />,
      title: "B.E Cyber Security",
      school: "SRM Valliammai Engineering College",
      year: "2025 - Present",
      status: "Currently Pursuing",
      current: true,
    },
    {
      icon: <FaGraduationCap />,
      title: "Higher Secondary (HSC)",
      school: "Don Bosco Matric Hr. Sec. School",
      year: "2025",
      status: "85%",
      current: false,
    },
    {
      icon: <FaSchool />,
      title: "Secondary School (SSLC)",
      school: "Don Bosco Matric Hr. Sec. School",
      year: "2023",
      status: "90%",
      current: false,
    },
  ];

  return (
    <section className="journey" id="journey">

      <div className="section-heading">
        <p>ACADEMIC PASSPORT</p>
        <h2>My Educational Journey</h2>
      </div>

      <div className="passport">

        {education.map((item, index) => (
          <div
            className={`passport-card ${item.current ? "active" : ""}`}
            key={index}
          >
            <div className="passport-icon">
              {item.icon}
            </div>

            <div className="passport-content">

              <h3>{item.title}</h3>

              <p>{item.school}</p>

              <span>{item.year}</span>

              <div className="status">
                {item.current ? "🟢 " : "✔ "}
                {item.status}
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Journey;
