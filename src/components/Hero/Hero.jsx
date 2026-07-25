import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* LEFT */}

        <div className="hero-content">

          <motion.p
            className="hero-intro"
            initial={{ opacity:0,y:30 }}
            animate={{ opacity:1,y:0 }}
          >
            HELLO I'M
          </motion.p>

          <motion.h1
            initial={{ opacity:0,y:40 }}
            animate={{ opacity:1,y:0 }}
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
              "Ethical Hacker",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="typing"
          />

          <p className="hero-description">
            Passionate about cybersecurity, secure web development,
            ethical hacking and building modern web applications
            with beautiful user experiences.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <motion.div
          className="hero-image"
          initial={{ opacity:0,scale:.8 }}
          animate={{ opacity:1,scale:1 }}
          transition={{ duration:1 }}
        >

          <div className="image-ring">

            <img
              src="/profile.png"
              alt="Avinash"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;
