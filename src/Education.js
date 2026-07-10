import React from "react";
import "./Education.css";

import school10 from "./images/school10.jpg";
import school12 from "./images/school12.jpg";
import college from "./images/college.jpg";
import futureJob from "./images/future-job.jpg";

function Education() {
  return (
    <section className="education" id="education">

      <h2 className="heading">
        My <span>Education</span>
      </h2>

      <div className="education-container">

        {/* 10th */}

        <div className="education-card">

          <img
            src={school10}
            alt="10th School"
            className="education-img"
          />

          <div className="education-content">

            <h3>🏫 SSLC (10th Standard)</h3>

            <h4>Infant Jesus Higher Secondary School</h4>

            <p>Maravanur</p>

            <p><strong>Marks :</strong> 413 / 500</p>

            <span className="completed">
              ✅ Completed
            </span>

          </div>

        </div>

        {/* 12th */}

        <div className="education-card">

          <img
            src={school12}
            alt="12th School"
            className="education-img"
          />

          <div className="education-content">

            <h3>💻 HSC (12th Standard)</h3>

            <h4>St. Antony's Higher Secondary School</h4>

            <p>Manjampatty</p>

            <p>
              <strong>Group :</strong> Computer Science
            </p>

            <p><strong>Marks :</strong> 467 / 600</p>

            <span className="completed">
              ✅ Completed
            </span>

          </div>

        </div>

        {/* College */}

        <div className="education-card">

          <img
            src={college}
            alt="College"
            className="education-img"
          />

          <div className="education-content">

            <h3>🎓 B.Tech Information Technology</h3>

            <h4>
              JJ College of Engineering and Technology
            </h4>

            <p>CGPA : 7.61</p>

            <span className="studying">
              🟡 Currently Pursuing
            </span>

          </div>

        </div>

        {/* Future Career */}

        <div className="education-card future-card">

          <img
            src={futureJob}
            alt="Future Career"
            className="education-img"
          />

          <div className="education-content">

            <h3>💼 Aspiring Software Developer</h3>

            <p>
              Currently pursuing
              <br />
              <strong>B.Tech Information Technology</strong>
            </p>

            <h4>Interested In</h4>

            <ul>

              <li>Full Stack Development</li>

              <li>Java Development</li>

              <li>Python Development</li>

              <li>Web Development</li>

            </ul>

            <span className="career">
              🚀 Ready to Begin My IT Career
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;