import React from "react";
import "./code.css";

import mepro from "./images/mepro-level10.jpg";
import python from "./images/python-iit-bombay.jpg";
import cprogramming from "./images/c-programming-iitb.jpg";
import java from "./images/java-programming-iitb.jpg";
import linux from "./images/linux-programming-iitb.jpg";
import efset from "./images/efset-english-b1.jpg";
import aicte from "./images/aicte-sla.jpg";
import html from "./images/css-iitb.jpg";
import css from "./images/css-iitb.jpg";
function AssessmentCertificates() {
  return (
    <section
      id="assessment-certificates"
      className="assessment-certificates"
      data-aos="zoom-in-up"
    >
      <div className="achievements-content">

        <h2><h2>Technical Certifications</h2></h2>

        <p className="subtitle">
            Certifications earned through online assessments, examinations and skill evaluations.
        </p>

        <div className="achievement-grid">

          <div className="achievement-card">
            <img src={mepro} alt="Pearson MePro Level 10 Expert" className="achievement-img" />
            <h3>Pearson MePro Level 10 Expert</h3>
            <ul>
              <li>Issued By: Pearson MePro</li>
              <li>Level: MePro Level 10 (Expert)</li>
              <li>Type: Assessment-Based Certification</li>
              <li>Issued: 09 Mar 2025</li>
            </ul>
          </div>

          <div className="achievement-card">
            <img src={python} alt="Python Programming" className="achievement-img" />
            <h3>Python Programming</h3>
            <ul>
              <li>Issued By: IIT Bombay</li>
              <li>Score: 77.86%</li>
              <li>Credits: 4</li>
              <li>Issued: 30 Dec 2024</li>
            </ul>
          </div>

          <div className="achievement-card">
            <img src={cprogramming} alt="C Programming" className="achievement-img" />
            <h3>C Programming</h3>
            <ul>
              <li>Issued By: EduPyramids, SINE – IIT Bombay</li>
              <li>Score: 90.00%</li>
              <li>Credits: 2</li>
              <li>Issued: 24 May 2025</li>
            </ul>
          </div>

          <div className="achievement-card">
            <img src={java} alt="Java Programming" className="achievement-img" />
            <h3>Java Programming</h3>
            <ul>
              <li>Issued By: EduPyramids, SINE – IIT Bombay</li>
              <li>Score: 87.50%</li>
              <li>Credits: 4</li>
              <li>Issued: 17 Dec 2025</li>
            </ul>
          </div>

          <div className="achievement-card">
            <img src={linux} alt="Linux Programming" className="achievement-img" />
            <h3>Linux Programming</h3>
            <ul>
              <li>Issued By: EduPyramids, SINE – IIT Bombay</li>
              <li>Score: 71.11%</li>
              <li>Credits: 2</li>
              <li>Issued: 17 Dec 2025</li>
            </ul>
          </div>

          <div className="achievement-card">
            <img src={efset} alt="EF SET English" className="achievement-img" />
            <h3>EF SET English Certificate</h3>
            <ul>
              <li>Issued By: EF SET</li>
              <li>Level: B1 Intermediate</li>
              <li>Overall Score: 50/100</li>
              <li>Issued: 04 Dec 2025</li>
            </ul>
          </div>

          <div className="achievement-card">
            <img src={aicte} alt="AICTE SLA" className="achievement-img" />
            <h3>Student Learning Assessment</h3>
            <ul>
              <li>Issued By: AICTE</li>
              <li>Overall Rating: ⭐⭐⭐⭐⭐</li>
              <li>Type: Self Assessment</li>
              <li>Issued: 03 Feb 2026</li>
            </ul>
          </div>
          <div className="achievement-card">
            <img src={python} alt="HTML" className="achievement-img" />
            <h3>HTML</h3>
            <ul>
              <li>Issued By: IIT Bombay</li>
              <li>Score: 90.00%</li>
              <li>Credits: 1</li>
              <li>Issued: 25 Jun 2026</li>
            </ul>
          </div>
          <div className="achievement-card">
            <img src={python} alt="CSS" className="achievement-img" />
            <h3>CSS</h3>
            <ul>
              <li>Issued By: IIT Bombay</li>
              <li>Score: 95.00%</li>
              <li>Credits: 2</li>
              <li>Issued: 25 Jun 2026</li>
            </ul>
          </div>



        </div>

      </div>
    </section>
  );
}

export default AssessmentCertificates;