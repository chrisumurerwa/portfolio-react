import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      // If not on homepage, navigate to homepage first, then scroll
      navigate("/", { replace: false });

      // Delay scrolling to allow homepage to load
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // 100ms delay
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-logo">Umurerwa</div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
        <a href="#hero" onClick={() => handleScrollToSection("hero")}>Hero</a>
        <a href ="#experience" onClick={() => handleScrollToSection("experience")}>Experience</a>
        <a href ="#skills"onClick={() => handleScrollToSection("skills")}>skills</a>
        <a href="#projects" onClick={() => handleScrollToSection("projects")}>Projects</a>
        <a href onClick={() => handleScrollToSection("contact")}>Contact</a>
        <a href onClick={() => { setIsMenuOpen(false); navigate('/blog'); }}>Blog</a>
      </nav>
    </header>
  );
};

export default Header;
