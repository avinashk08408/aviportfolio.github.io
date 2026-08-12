import "./About.css";
import profile from "../../assets/profile.png";

function About() {
  return (
    <section className="about" id="about">

      <div className="section-title">
        
         <p>PROFILE</p>
        <h2>WHO I AM</h2>
      </div>

      <div className="about-wrapper">

        <div className="about-left">
          <img src={profile} alt="Avinash" />
        </div>

        <div className="about-right">

          <h3>Cyber Security Student & Web Developer</h3>

          
  <p>
    I’m <strong>Avinash</strong>, a Cyber Security student and web developer
    passionate about crafting <strong>modern digital experiences</strong> and
    exploring the security behind them. I enjoy transforming ideas into
    intuitive, purposeful web applications while continuously deepening my
    understanding of cybersecurity, networking, and application security.
    I’m driven by curiosity and a hands-on mindset — building, experimenting,
    and refining with every project. For me, technology isn’t just about
    writing code; it’s about understanding systems, solving meaningful
    problems, and creating solutions that are both <strong>functional and
    secure</strong>.
  </p>
                    <p>
          <div className="about-quote">
            <p>"The best way out is always through."</p>
              <span>--Robert Frost</span>
            </div>
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
