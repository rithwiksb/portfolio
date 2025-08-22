import React from "react";

const navLinks = [
  { label: "Home", to: "hero" },
  { label: "Education", to: "education" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Achievements", to: "achievements" },
];

const Navbar = () => {
  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
  <span className="navbar-name" onClick={() => handleNavClick("hero")}>Rithwik</span>
      </div>
      <div className="nav-links">
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
    </nav>
  );
};

export default Navbar;