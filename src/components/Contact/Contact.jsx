import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <motion.div
        className="contact-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>GET IN TOUCH</p>
        <h2>Contact Me</h2>
      </motion.div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-card">
            <FaEnvelope className="icon" />
            <div>
              <h3>Email</h3>
              <p>avinashk08408@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaGithub className="icon" />
            <div>
              <h3>GitHub</h3>
              <p>github.com/avinashk08408</p>
            </div>
          </div>

          <div className="info-card">
            <FaLinkedin className="icon" />
            <div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/your-profile</p>
            </div>
          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;
