import "./Contact.css";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPaperPlane,
  FaDownload,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        {/* LEFT SIDE */}

        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="contact-tag">
            CONTACT & COLLABORATION
          </span>

          <h2>
            Let's Create
            <br />
            <span>Secure Digital</span>
            <br />
            Experiences.
          </h2>

          <p>
            I'm passionate about cybersecurity, secure web
            development and modern web technologies. I'm always
            open to internships, hackathons, collaborations,
            and exciting projects.
          </p>

          {/* Availability */}

          <div className="availability-card">

            <div className="status-dot"></div>

            <div>

              <h4>Available for Opportunities</h4>

              <span>
                Internships • Hackathons • Open Source •
                Frontend Projects
              </span>

            </div>

          </div>

          {/* Buttons */}

          <div className="contact-buttons">

            <a href="/resume.pdf" className="resume-btn">

              <FaDownload />

              Resume

            </a>

            <a
              href="mailto:avinashk08408@gmail.com"
              className="email-btn"
            >

              <FaPaperPlane />

              Email Me

            </a>

          </div>

          {/* Quick Connect */}

          <div className="quick-connect">

            <h3>Quick Connect</h3>

            <div className="contact-grid">

              <a
                href="mailto:avinashk08408@gmail.com"
                className="contact-box"
              >

                <FaEnvelope />

                <h4>Email</h4>

                <p>Send Mail</p>

              </a>

              <a
                href="https://github.com/avinashk08408"
                target="_blank"
                rel="noreferrer"
                className="contact-box"
              >

                <FaGithub />

                <h4>GitHub</h4>

                <p>View Projects</p>

              </a>

              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
                className="contact-box"
              >

                <FaLinkedin />

                <h4>LinkedIn</h4>

                <p>Let's Connect</p>

              </a>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="contact-box"
              >

                <FaWhatsapp />

                <h4>WhatsApp</h4>

                <p>Quick Chat</p>

              </a>

            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="7"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;
