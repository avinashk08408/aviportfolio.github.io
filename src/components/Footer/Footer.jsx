import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp
} from "react-icons/fa";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">

          <h2>Avinash K</h2>

          <p>
            Cyber Security Student • Frontend Developer
          </p>

        </div>

        <div className="footer-links">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </div>

        <div className="footer-social">

          <a
            href="https://github.com/avinashk08408"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

        </div>

      </div>

      <div className="copyright">

        © 2026 Avinash K • All Rights Reserved

      </div>

      <button
        className="scroll-top"
        onClick={scrollTop}
      >
        <FaArrowUp />
      </button>

    </footer>
  );
}

export default Footer;
