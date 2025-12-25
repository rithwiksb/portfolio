import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "C++", "JavaScript"]
    },
    {
      category: "Frameworks/Libraries",
      skills: ["HTML5", "CSS3", "React", "ReactJS", "Scikit-Learn", "FastAPI", "Flask"]
    },
    {
      category: "Technologies",
      skills: ["NoSQL", "RESTful APIs", "PostgreSQL", "Linux", "Git/GitHub", "LangChain", "AWS", "Docker", "Kubernetes", "GitHub Actions"]
    },
    {
      category: "Concepts",
      skills: ["Machine Learning", "Generative AI", "Data Structures and Algorithms (DSA)", "Object Oriented Programming (OOPs)", "Operating Systems (OS)", "Database Management System (DBMS)", "CI/CD Pipelines", "System Design"]
    }
  ];

  // Floating tech logos with their positions and animations
  const floatingLogos = [
    { icon: "fab fa-python", x: 15, y: 20, delay: 0, duration: 8 },
    { icon: "fab fa-js-square", x: 85, y: 15, delay: 1, duration: 10 },
    { icon: "fab fa-react", x: 25, y: 70, delay: 2, duration: 9 },
    { icon: "fab fa-html5", x: 75, y: 80, delay: 0.5, duration: 11 },
    { icon: "fab fa-css3-alt", x: 50, y: 25, delay: 1.5, duration: 7 },
    { icon: "fas fa-database", x: 20, y: 45, delay: 3, duration: 12 },
    { icon: "fab fa-git-alt", x: 80, y: 50, delay: 2.5, duration: 8.5 },
    { icon: "fab fa-aws", x: 45, y: 75, delay: 0.8, duration: 9.5 },
    { icon: "fab fa-docker", x: 65, y: 35, delay: 1.8, duration: 10.5 },
    { icon: "fas fa-brain", x: 35, y: 55, delay: 2.2, duration: 11.5 },
    { icon: "fab fa-linux", x: 70, y: 65, delay: 1.2, duration: 9.8 },
    { icon: "fas fa-server", x: 55, y: 85, delay: 2.8, duration: 8.2 },
    { icon: "fas fa-robot", x: 30, y: 30, delay: 3.2, duration: 9.2 },
    { icon: "fas fa-code", x: 90, y: 40, delay: 1.6, duration: 10.8 }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -90
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="skills-section-seamless">
      {/* Floating animated tech logos background - more spread out */}
      <div className="floating-logos-container">
        {floatingLogos.map((logo, index) => (
          <motion.div
            key={index}
            className="floating-logo"
            style={{
              left: `${logo.x}%`,
              top: `${logo.y}%`,
            }}
            initial={{ 
              opacity: 0,
              scale: 0,
              rotate: 0
            }}
            animate={{
              opacity: [0, 0.08, 0.15, 0.08, 0],
              scale: [0.5, 1.5, 1, 1.2, 0.8],
              rotate: [0, 180, 360],
              x: [0, 50, -30, 25, 0],
              y: [0, -40, 30, -20, 0]
            }}
            transition={{
              duration: logo.duration,
              delay: logo.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <i className={logo.icon}></i>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="skills-content-seamless"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="skills-title-seamless"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="skills-flow">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="skill-group"
              variants={categoryVariants}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="group-title">{category.category}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    variants={skillVariants}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      boxShadow: "0 8px 25px rgba(0, 255, 136, 0.4)"
                    }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
