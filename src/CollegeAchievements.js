import React from "react";
import "./code.css";

import techfest2025 from "./images/techfest2025.jpg";
import reach26 from "./images/reach26.jpg";

function CollegeAchievements() {
  return (
    <section id="college-achievements" className="achievements">
      <div className="achievements-content">

        <h2>College Achievements</h2>

        <p className="subtitle">
          My achievements, participation and competition awards during my college journey.
        </p>

        <div className="achievement-grid">

          <div className="achievement-card">
            <img
              src={techfest2025}
              alt="Science Tech Fest 2025"
              className="achievement-img"
            />

            <h3>Science Tech Fest 2025</h3>

            <ul>
              <li>💻 Tech Connect – Certificate of Participation</li>
              <li>🤖 Neon Trap – Certificate of Participation</li>
              <li>✍️ Prompt Verse – Certificate of Participation</li>
            </ul>
          </div>

          <div className="achievement-card">
            <img
              src={reach26}
              alt="REACH'26"
              className="achievement-img"
            />

            <h3>REACH'26 – UI Odyssey</h3>

            <ul>
              <li>🥈 Second Place</li>
              <li>👥 Team of 2 Members</li>
              <li>👤 Mohanasundaram V</li>
              <li>👤 Mohamed Yaseen</li>
              <li>💰 Won ₹600 Cash Prize</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CollegeAchievements;