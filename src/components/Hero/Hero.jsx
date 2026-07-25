import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-intro"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
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
            "Ethical Hacking Learner",
            2000,
          ]}
          wrapper="span"
          repeat={Infinity}
          speed={50}
          className="typing"
        />

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          I build secure, modern and interactive web applications while
          continuously exploring cybersecurity, ethical hacking and secure
          software development.
        </motion.p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;
