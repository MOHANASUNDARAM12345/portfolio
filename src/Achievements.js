import React from "react";
import "./Achievements.css";

import class6 from "./images/class6.jpg";
import speech from "./images/speech.jpg";
import exhibition from "./images/exhibition.jpg";
import sports from "./images/sports.jpg";
import jrc from "./images/jrc.jpg";
import sslc from "./images/sslc.jpg";
import hsc from "./images/hsc.jpg";

function Achievements() {
  const achievements = [
    {
      image: class6,
      title: "Class VI Merit Certificate",
      achievement: "Second Rank",
      year: "2018",
    },
    {
      image: speech,
      title: "Speech & Writing Achievements",
      achievement:
        "Speech Competition - First Prize\nEnglish Speech - Second Prize\nEssay Writing - Third Prize",
      year: "2018 - 2020",
    },
    {
      image: exhibition,
      title: "Mini Exhibition Achievements",
      achievement:
        "Science - First Prize\nEnglish - First Prize\nSocial Science - Third Prize",
      year: "2019",
    },
    {
      image: sports,
      title: "Running Race",
      achievement: "First Prize",
      year: "2019",
    },
    {
      image: jrc,
      title: "Junior Red Cross Essay Competition",
      achievement: "Third Prize",
      year: "2017",
    },
    {
      image: sslc,
      title: "SSLC Public Examination Merit Certificate",
      achievement: "Third Rank",
      year: "2021 - 2022",
    },
    {
      image: hsc,
      title: "Class XII Merit Certificate",
      achievement: "Second Rank",
      year: "2023 - 2024",
    },
  ];

  return (
    <section id="school-achievements" className="achievements">
      <h2 className="section-title">School Achievements</h2>

      <div className="achievement-container">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="achievement-content">
              <h3>{item.title}</h3>
              <p style={{ whiteSpace: "pre-line" }}>
                {item.achievement}
              </p>
              <span>{item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;