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
            development, ethical hacking and modern web
            technologies. I'm always open to internships,
            hackathons, collaborations and exciting projects.
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

            <a
              href="/resume.pdf"
              className="resume-btn"
            >
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

          {/* Social Dock */}

          <div className="social-dock">

            <a
              href="mailto:avinashk08408@gmail.com"
              title="Email"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/avinashk08408"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/avinash-k-201b47384?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/91 6379301585"
              target="_blank"
              rel="noreferrer"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>

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
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="7"
              placeholder="Tell me about your project..."
              required
            ></textarea>

            <button type="submit">
              <FaPaperPlane />
              <span>Send Message</span>
            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;
