import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Sign Language Recognition",
    tech: ["python", "opencv", "mediapipe", "scikit-learn", "fastapi"],
    details: [
      "Tech stack: Python, OpenCV, MediaPipe, Scikit-learn, FastAPI",
      "Hackathon-winning project that recognizes common phrases of Indian Sign Language using hand gesture comparison and ML.",
      "Hand gesture comparison with reference video",
      "ML model with 84.21% accuracy, 20000+ parameters",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/rithwiksb/gesturerecog_dl" },
    ],
  },
  {
    name: "LegaDoc",
    tech: ["react", "fastapi", "pymupdf"],
    details: [
      "Tech stack: React, FastAPI, PyMuPDF",
      "ML-powered tool to analyze legal documents for compliance issues and missing/weak contractual clauses.",
      "User access and file uploads using JWT authentication",
    ],
    links: [{ label: "GitHub", url: "https://github.com/rithwiksb/legadoc" }],
  },
  {
    name: "CodeCollab",
    tech: ["react", "flask", "socket-io", "webrtc"],
    details: [
      "Tech stack: React, Flask, Socket.IO, WebRTC",
      "Real-time code collaboration platform with syntax highlighting, video call, and chat.",
      "Integrated chat panel, code snippets, join/delete rooms",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/rithwiksb/codecollab" },
    ],
  },
  {
    name: "Fake News Detector",
    tech: ["python", "scikit-learn", "flask"],
    details: [
      "Tech stack: Python, Scikit-learn, Flask",
      "Web app to detect fake news articles using machine learning techniques.",
      "Trained on real-world news datasets using Naive Bayes, with text preprocessing and feature extraction.",
      "REST API for predictions, simple UI for user input.",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/rithwiksb/fake-news-detector/tree/main/fake-news-detector" },
    ],
  },
];

const techIcons = {
  python: <i className="fab fa-python" title="Python"></i>,
  opencv: <i className="fas fa-camera" title="OpenCV"></i>,
  mediapipe: <i className="fas fa-hand-paper" title="Mediapipe"></i>,
  "scikit-learn": <i className="fas fa-brain" title="Scikit-learn"></i>,
  fastapi: <i className="fas fa-bolt" title="FastAPI"></i>,
  react: <i className="fab fa-react" title="ReactJS"></i>,
  flask: <i className="fas fa-flask" title="Flask"></i>,
  "socket-io": <i className="fas fa-network-wired" title="Socket.IO"></i>,
  webrtc: <i className="fas fa-video" title="WebRTC"></i>,
  pymupdf: <i className="fas fa-file-pdf" title="PyMuPDF"></i>,
};

const Projects = () => (
  <section id="projects" className="section">
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Projects
    </motion.h2>
    <div className="projects-list">
      {projects.map((project, idx) => (
        <motion.div
          className="project-block"
          key={project.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: idx * 0.15 }}
        >
          <div className="project-title-row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
              <h3 style={{ margin: 0 }}>{project.name}</h3>
              <span className="project-tech-inline" style={{ display: "flex", gap: "0.5em" }}>
                {project.tech.map((tech) => (
                  <motion.span
                    className="tech-icon neon-glow"
                    key={tech}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {techIcons[tech]}
                  </motion.span>
                ))}
              </span>
            </div>
            {project.links && project.links.length > 0 && (
              <span className="project-title-links">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-text"
                    style={{ color: "#39ff14", fontWeight: 600, fontSize: "1em", textDecoration: "underline dotted", letterSpacing: "0.5px" }}
                  >
                    {link.label}
                  </a>
                ))}
              </span>
            )}
          </div>
          <ul className="project-details">
            {project.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;