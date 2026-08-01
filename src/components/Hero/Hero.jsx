import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="cyber-grid"></div>
      <div className="noise"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="hero-intro">
            HELLO I'M
          </p>

          <h1>
            Avinash <span>K</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Cyber Security Student",
              2000,
              "Frontend Developer",
              2000,
              "React Developer",
              2000,
              "Ethical Hacker",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="typing"
          />

          <p className="hero-description">
            Passionate about cybersecurity, secure web development,
            ethical hacking and building modern web applications
            with beautiful user experiences.
          </p>

        

          {/* Buttons */}

          <div className="hero-buttons">

            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="image-glow"></div>

          <div className="image-card">

            <img
              src="/profile.png"
              alt="Avinash K"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
