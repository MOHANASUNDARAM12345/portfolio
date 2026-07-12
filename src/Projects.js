import React from "react";
import "./code.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="portfolio-content">

        <h2>My Projects</h2>

        <p className="subtitle">
          Some of the projects I have developed using Java, HTML, CSS and MySQL.
        </p>

        <div className="projects-grid">

          <div className="project-card">
            <div className="project-icon">
              <i className="bx bx-bus"></i>
            </div>

            <h3>Bus Reservation System</h3>

            <div className="tech-stack">
              <span>
                <i className="devicon-java-plain colored"></i> Java
              </span>

              <span>
                <i className="bx bx-cube"></i> OOP
              </span>
            </div>

            <p>
              Console-based application developed using Java and
              Object-Oriented Programming concepts for bus booking and
              reservation.
            </p>

          </div>

          <div className="project-card">
            <div className="project-icon">
              <i className="bx bx-user"></i>
            </div>

            <h3>Student Management System</h3>

            <div className="tech-stack">
              <span>
                <i className="devicon-java-plain colored"></i> Java
              </span>

              <span>
                <i className="bx bx-folder"></i> File Handling
              </span>
            </div>

            <p>
              Java application to manage student records using
              File Handling, Exception Handling and OOP concepts.
            </p>

          </div>

          <div className="project-card">
            <div className="project-icon">
              <i className="bx bx-code-block"></i>
            </div>

            <h3>Portfolio Website</h3>

            <div className="tech-stack">
              <span>
                <i className="devicon-react-original colored"></i> React
              </span>

              <span>
                <i className="devicon-html5-plain colored"></i> HTML
              </span>

              <span>
                <i className="devicon-css3-plain colored"></i> CSS
              </span>

              <span>
                <i className="devicon-javascript-plain colored"></i> JavaScript
              </span>
            </div>

            <p>
              Responsive portfolio website developed using
              React.js with a modern user interface and responsive design.
            </p>

          </div>

          <div className="project-card">
            <div className="project-icon">
              <i className="bx bx-book-content"></i>
            </div>

            <h3>Contact Manager</h3>

            <div className="tech-stack">
              <span>
                <i className="devicon-react-original colored"></i> React
              </span>

              <span>
                <i className="bx bx-data"></i> CRUD
              </span>
            </div>

            <p>
              Contact management application with Add, Edit,
              Delete and Search features using React.js.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;