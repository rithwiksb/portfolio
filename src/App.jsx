
import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Animated Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#0f2027" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#00fff7" },
            links: { enable: true, color: "#00fff7", distance: 150, opacity: 0.5, width: 2 },
            collisions: { enable: true },
            move: { direction: "none", enable: true, outModes: { default: "bounce" }, speed: 2 },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.7 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 6 } },
          },
          detectRetina: true,
        }}
        style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0 }}
      />
      {/* Floating SVG shapes outside Hero */}
      <svg className="bg-floating-shape" style={{ left: '5vw', top: '12vh', width: 80, height: 80 }}>
        <circle cx="40" cy="40" r="32" fill="#00ff88" />
      </svg>
      <svg className="bg-floating-shape" style={{ right: '8vw', top: '22vh', width: 60, height: 60, position: 'fixed' }}>
        <rect x="10" y="10" width="40" height="40" rx="12" fill="#00e0ff" />
      </svg>
      <svg className="bg-floating-shape" style={{ left: '50vw', top: '5vh', width: 48, height: 48 }}>
        <polygon points="24,0 48,48 0,48" fill="#39ff14" />
      </svg>
      {/* Main Content with Framer Motion Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <Navbar />
        <div className="main-content">
          <Hero />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
        </div>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;