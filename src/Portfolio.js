import React from "react";
import "./code.css";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-content">
        <h2>My Portfolio</h2>

        <div className="project-box">
          <h3>Bus Reservation System</h3>
          <p>
            A Java console-based application developed using Object-Oriented
            Programming concepts for bus booking and reservation.
          </p>
        </div>

        <div className="project-box">
          <h3>Student Management System</h3>
          <p>
            A Java application to manage student details using file handling
            and exception handling.
          </p>
        </div>

        <div className="project-box">
          <h3>Portfolio Website</h3>
          <p>
            A responsive portfolio website developed using React JS, HTML,
            CSS and JavaScript.
          </p>
        </div>

        <div className="project-box">
          <h3>Contact Manager</h3>
          <p>
            A simple web application to add, edit and delete contacts using
            React JS.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;