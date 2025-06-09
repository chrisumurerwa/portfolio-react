import React, { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <button className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      
      <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
        <a href="#hero" onClick={() => scrollToSection("hero")}>
          Hero
        </a>
        <a href="#experience" onClick={() => scrollToSection("experience")}>
          Experience
        </a>
        <a href="#skills" onClick={() => scrollToSection("skills")}>
          Skills
        </a>
        <a href="#projects" onClick={() => scrollToSection("projects")}>
          Projects
        </a>
        <a href="#contact" onClick={() => scrollToSection("contact")}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;