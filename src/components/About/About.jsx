import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <motion.div
        className="about-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
      >
        <p>GET TO KNOW ME</p>
        <h2>About Me</h2>
      </motion.div>

      <div className="about-container">

        <motion.div
          className="about-image"
          initial={{ opacity:0,x:-60 }}
          whileInView={{ opacity:1,x:0 }}
          transition={{ duration:.8 }}
          viewport={{ once:true }}
        >
          <img src="/profile.png" alt="Avinash" />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity:0,x:60 }}
          whileInView={{ opacity:1,x:0 }}
          transition={{ duration:.8 }}
          viewport={{ once:true }}
        >

          <h3>
            Cyber Security Student & Frontend Developer
          </h3>

          <p>
            I'm Avinash, a Cyber Security student at
            SRM Valliammai Engineering College.
            I enjoy building secure web applications,
            learning ethical hacking, and creating
            modern user interfaces using React.
          </p>

          <p>
            My goal is to become a security engineer
            who combines cybersecurity knowledge with
            strong software development skills to build
            secure and scalable applications.
          </p>

          <div className="about-cards">

            <div className="card">
              <h4>Education</h4>
              <span>SRM Valliammai Engineering College</span>
            </div>

            <div className="card">
              <h4>Focus</h4>
              <span>Cyber Security</span>
            </div>

            <div className="card">
              <h4>Frontend</h4>
              <span>React • HTML • CSS • JavaScript</span>
            </div>

            <div className="card">
              <h4>Backend</h4>
              <span>Python • C • C++</span>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;
