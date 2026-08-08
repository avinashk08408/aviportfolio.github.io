import "./About.css";
import profile from "../../assets/profile.png";

function About() {
  return (
    <section className="about" id="about">

      <div className="section-title">
        <p>WHO</p>
        <h2>I Am</h2>
      </div>

      <div className="about-wrapper">

        <div className="about-left">
          <img src={profile} alt="Avinash" />
        </div>

        <div className="about-right">

          <h3>Cyber Security Student & Web Developer</h3>

          <p>
            I'm <strong>Avinash</strong>, a Cyber Security student at
            <strong> SRM Valliammai Engineering College</strong> with a passion
            for building secure web applications and learning ethical hacking,
            networking, and modern web technologies. I enjoy turning ideas into
            practical, user-friendly solutions while continuously improving my
            cybersecurity skills.
          </p>

          <div className="about-stats">

            <div className="stat-box">
              <h2>4+</h2>
              <span>Projects</span>
            </div>

            <div className="stat-box">
              <h2>1+</h2>
              <span>Hackathons</span>
            </div>

            <div className="stat-box">
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
