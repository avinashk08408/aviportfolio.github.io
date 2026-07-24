import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo">
          Avinash<span>.</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
