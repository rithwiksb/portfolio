import React from "react";
import { motion } from "framer-motion";

const Hero = () => (
  <section id="hero" className="hero-section animated-texture-bg">
    {/* Seamless animated wave background */}
    <svg className="texture-svg" viewBox="0 0 1200 300" preserveAspectRatio="none">
      <defs>
        <linearGradient id="waveGradient1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00ff88" stopOpacity="0.0" />
          <stop offset="40%" stopColor="#00ff88" stopOpacity="0.15" />
          <stop offset="70%" stopColor="#00e0ff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#101820" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="waveGradient2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#39ff14" stopOpacity="0.0" />
          <stop offset="50%" stopColor="#00e0ff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#101820" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      
      {/* First wave layer */}
      <path d="M0,100 C300,150 600,50 900,120 C1000,140 1100,90 1200,110 L1200,300 L0,300 Z" fill="url(#waveGradient1)">
        <animate attributeName="d" dur="8s" repeatCount="indefinite"
          values="M0,100 C300,150 600,50 900,120 C1000,140 1100,90 1200,110 L1200,300 L0,300 Z;
                  M0,120 C300,80 600,140 900,90 C1000,70 1100,130 1200,100 L1200,300 L0,300 Z;
                  M0,100 C300,150 600,50 900,120 C1000,140 1100,90 1200,110 L1200,300 L0,300 Z" />
      </path>
      
      {/* Second wave layer */}
      <path d="M0,150 C400,100 800,180 1200,140 L1200,300 L0,300 Z" fill="url(#waveGradient2)">
        <animate attributeName="d" dur="12s" repeatCount="indefinite"
          values="M0,150 C400,100 800,180 1200,140 L1200,300 L0,300 Z;
                  M0,170 C400,200 800,120 1200,160 L1200,300 L0,300 Z;
                  M0,150 C400,100 800,180 1200,140 L1200,300 L0,300 Z" />
      </path>
      
      {/* Floating particles */}
      <circle cx="200" cy="60" r="3" fill="#00ff88" opacity="0.6">
        <animate attributeName="cy" values="60;90;60" dur="5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="800" cy="40" r="2" fill="#00e0ff" opacity="0.5">
        <animate attributeName="cy" values="40;70;40" dur="7s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.1;0.5" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="1000" cy="80" r="4" fill="#39ff14" opacity="0.4">
        <animate attributeName="cy" values="80;50;80" dur="6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" />
      </circle>
    </svg>
    <motion.h1
      className="hero-title"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Rithwik S Bharadwaj
    </motion.h1>
    <motion.p
      className="subtitle"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      Full Stack Web Development | Machine Learning | DevOps
    </motion.p>
    <motion.div
      className="hero-links"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <a href="/cv.pdf" download="Rithwik_S_Bharadwaj_CV.pdf" className="download-cv">
        <i className="fas fa-download"></i> Download CV
      </a>
      <a href="mailto:rithwiksbharadwaj@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
      <a href="https://leetcode.com/rithwiksb/" target="_blank" rel="noopener noreferrer">Leetcode</a>
      <a href="https://linkedin.com/in/rithwikbharadwaj" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/rithwiksb" target="_blank" rel="noopener noreferrer">GitHub</a>
    </motion.div>
  </section>
);

export default Hero;