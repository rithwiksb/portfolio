import React from "react";
import { motion } from "framer-motion";

const Achievements = () => {
  const achievements = [
    {
      title: "Hackathon Winner",
      description: "Won hackathon with Sign Language Recognition project",
      year: "2024"
    },
    {
      title: "High Academic Performance",
      description: "GPA: 8.74/10.0 in Electronics and Instrumentation Engineering",
      year: "2023-2027"
    },
    {
      title: "Esports Event Leadership",
      description: "Led 100+ volunteers across 50+ esports events",
      year: "2018-2024"
    },
    {
      title: "Co-Founder Success",
      description: "Co-founded and operated Freshiance for 6 years",
      year: "2018-2024"
    }
  ];

  return (
    <section id="achievements" className="section">
      <h2>Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="achievement-year">{achievement.year}</div>
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
