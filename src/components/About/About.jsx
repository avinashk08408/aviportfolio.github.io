import "./About.css";
import profile from "../../assets/profile.png";

function About() {
  return (
    <section className="about" id="about">

      <div className="section-heading">
        <p>PROFILE</p>
        <h2>Who I Am</h2>
      </div>

      <div className="about-container">

        <div className="about-image">
          <img src={profile} alt="Avinash" />
        </div>

        <div className="about-content">

          <h3>Cyber Security Student & Web Developer</h3>

          <p>
            I'm <strong>Avinash</strong>, a Cyber Security student at
            <strong> SRM Valliammai Engineering College</strong>.
            I enjoy building secure web applications, exploring ethical hacking,
            and creating modern digital experiences using React, Python and
            cybersecurity tools.
          </p>

          <div className="stats">

            <div className="stat-card">
              <h2>8+</h2>
              <span>Projects</span>
            </div>

            <div className="stat-card">
              <h2>1+</h2>
              <span>Hackathons</span>
            </div>

            <div className="stat-card">
              <h2>15+</h2>
              <span>Technologies</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
