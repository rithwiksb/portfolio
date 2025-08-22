import React from "react";

const Experience = () => (
  <section id="experience" className="section">
    <h2>Experience</h2>
    <div className="exp-header">
      <span className="exp-role">Co-Founder</span>, Freshiance
      <span className="date"> May 2018 – May 2024</span>
    </div>
    <ul className="exp-list">
      <li>Led 100+ volunteers to successfully operate and execute Esports events</li>
      <li>Handled all live broadcasting technology</li>
      <li>Built and managed organization website</li>
      <li>Built Discord bots with discord.py and Discord API</li>
    </ul>

    <div className="company-block" style={{ marginTop: "2.5rem" }}>
      <div
        className="company-name"
        style={{
          fontWeight: 700,
          fontSize: "1.15rem",
          marginBottom: "0.5rem",
        }}
      >
        Claxon Tournaments Pte. Ltd.
      </div>
      <div style={{ paddingLeft: "1.5rem" }}>
        <div className="exp-header">
          <span className="exp-role">Software Developer</span>
          <span className="date"> Jan 2023 – Apr 2024</span>
        </div>
        <ul className="exp-list">
          <li>Maintained Discord Bots built on Discord API using Discord.js</li>
          <li>Advisor to the development of the company website</li>
          <li>
            Built and maintained discord servers for internal management and
            community engagement
          </li>
        </ul>
        <div className="exp-header" style={{ marginTop: "1.2rem" }}>
          <span className="exp-role">Event Coordinator</span>
          <span className="date"> Jun 2018 – May 2022</span>
        </div>
        <ul className="exp-list">
          <li>
            Helped handle over 50 esports events, coordinating logistics and
            volunteer efforts
          </li>
          <li>Assessed and interviewed volunteers for event roles</li>
          <li>Created and managed event schedules and timelines</li>
          <li>Managed event budgets and resources</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;