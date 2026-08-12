import { useState } from "react";
import "./Education.css";

function Education() {
  const [active, setActive] = useState(null);

  const education = [
    {
      year: "2023",
      title: "SSLC",
      school: "Don Bosco Matriculation Higher Secondary School",
      type: "FOUNDATION",
      percentage: "90%",
    },
    {
      year: "2023 — 2025",
      title: "HSC",
      school: "Don Bosco Matriculation Higher Secondary School",
      type: "ACADEMIC DEVELOPMENT",
      percentage: "85%",
    },
    {
      year: "2025 — PRESENT",
      title: "B.E. CYBER SECURITY",
      school: "SRM Valliammai Engineering College",
      type: "SPECIALIZATION",
      skills: [
        "Cybersecurity",
        "Development",
        "Networking",
      ],
    },
  ];

  const toggleCredential = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="education" id="education">

      {/* Heading */}
      <div className="section-heading">
        <p>EDUCATION</p>
        <h2>MY ACADEMIC PATH</h2>
      </div>

      {/* Academic Path */}
      <div className="academic-path">

        {/* Foundation Side */}
        <div className="foundation">

          <div className="path-label">
            FOUNDATION
          </div>

          {/* SSLC */}
          <div className="education-card">

            <div className="education-year">
              2023
            </div>

            <h3>SSLC</h3>

            <p className="school">
              Don Bosco Matriculation
              Higher Secondary School
            </p>

            <div className="credential-area">

              <button
                onClick={() => toggleCredential(0)}
                className="credential-btn"
              >
                {active === 0
                  ? "CLOSE"
                  : "CREDENTIAL"}
              </button>

              {active === 0 && (
                <div className="credential-info">
                  <span>SSLC</span>
                  <strong>90%</strong>
                </div>
              )}

            </div>

          </div>

          {/* HSC */}
          <div className="education-card">

            <div className="education-year">
              2023 — 2025
            </div>

            <h3>HSC</h3>

            <p className="school">
              Don Bosco Matriculation
              Higher Secondary School
            </p>

            <div className="credential-area">

              <button
                onClick={() => toggleCredential(1)}
                className="credential-btn"
              >
                {active === 1
                  ? "CLOSE"
                  : "CREDENTIAL"}
              </button>

              {active === 1 && (
                <div className="credential-info">
                  <span>HSC</span>
                  <strong>85%</strong>
                </div>
              )}

            </div>

          </div>

        </div>

        {/* Connecting Arrow */}
        <div className="path-connector">
          <span>→</span>
        </div>

        {/* Specialization */}
        <div className="specialization">

          <div className="path-label">
            SPECIALIZATION
          </div>

          <div className="education-card current">

            <div className="education-year">
              2025 — PRESENT
            </div>

            <h3>B.E. CYBER SECURITY</h3>

            <p className="school">
              SRM Valliammai Engineering College
            </p>

            <div className="focus-area">

              <span>Cybersecurity</span>
              <span>Development</span>
              <span>Networking</span>

            </div>

            <button
              onClick={() => toggleCredential(2)}
              className="credential-btn"
            >
              {active === 2
                ? "CLOSE"
                : "CREDENTIAL"}
            </button>

            {active === 2 && (
              <div className="credential-info">
                <span>B.E. Cyber Security</span>
                <strong>IN PROGRESS</strong>
              </div>
            )}

          </div>

          {/* Next */}
          <div className="next-stage">

            <span className="next-label">
              NEXT →
            </span>

            <h3>INDUSTRY</h3>

            <p>READY</p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;
