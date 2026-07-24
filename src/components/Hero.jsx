import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-subtitle"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Avinash K
        </motion.h1>

        <TypeAnimation
          sequence={[
            "Cyber Security Student",
            2000,
            "Frontend Developer",
            2000,
            "React Developer",
            2000,
            "Security Enthusiast",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="typing"
        />

        <p className="hero-description">
          Building secure applications, modern web experiences, and constantly
          exploring cybersecurity.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects <FaArrowRight />
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="social-icons">
          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
