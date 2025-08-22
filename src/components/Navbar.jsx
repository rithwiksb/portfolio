import React, { useState } from "react";

const navLinks = [
  { label: "Home", to: "hero" },
  { label: "Education", to: "education" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Achievements", to: "achievements" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-name" onClick={() => handleNavClick("hero")}>Rithwik</span>
      </div>
      
      {/* Desktop Navigation */}
      <div className="nav-links desktop-nav">
        {navLinks.map((link) => (
          <button
            key={link.to}
            className="nav-btn"
            onClick={() => handleNavClick(link.to)}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <button
            key={link.to}
            className="mobile-nav-btn"
            onClick={() => handleNavClick(link.to)}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;