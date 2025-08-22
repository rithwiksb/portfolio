import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/rithwiksb",
      icon: "fab fa-github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/rithwikbharadwaj",
      icon: "fab fa-linkedin"
    },
    {
      name: "Email",
      url: "mailto:rithwiksbharadwaj@gmail.com",
      icon: "fas fa-envelope"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/rithwiksb/",
      icon: "fas fa-code"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" }
  ];

  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* About Section */}
          <motion.div 
            className="footer-column"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-title">Rithwik S Bharadwaj</h3>
            <p className="footer-description">
              Full Stack Developer passionate about Machine Learning, Web Development, and DevOps. 
              Building innovative solutions and leading tech communities.
            </p>
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <i className={link.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-column"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-subtitle">Quick Links</h4>
            <nav className="footer-nav">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="footer-link"
                  whileHover={{ x: 5, color: "#00ff88" }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer-column"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-subtitle">Get In Touch</h4>
            <div className="contact-info">
              <motion.a 
                href="mailto:rithwiksbharadwaj@gmail.com"
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <i className="fas fa-envelope"></i>
                <span>rithwiksbharadwaj@gmail.com</span>
              </motion.a>
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <i className="fas fa-map-marker-alt"></i>
                <span>Mysore/Bangalore, India</span>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <i className="fas fa-graduation-cap"></i>
                <span>Electronics & Instrumentation</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Rithwik S Bharadwaj. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="footer-bg-elements">
        <motion.div 
          className="footer-glow footer-glow-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="footer-glow footer-glow-2"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
