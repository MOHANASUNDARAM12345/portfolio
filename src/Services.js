import React from "react";
import "./code.css";

function Services() {
  return (
    <section id="services" className="services">
      <div className="services-content">

        <h2>My Services</h2>
        <p className="subtitle">
          What I Can Do
        </p>

        <div className="services-grid">

          <div className="service-card">
            <div className="service-icon">
              <i className="bx bx-code-alt"></i>
            </div>

            <h3>Web Development</h3>

            <p>
              Build responsive, modern and user-friendly websites using
              HTML, CSS, JavaScript and React.js.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="bx bxl-java"></i>
            </div>

            <h3>Java Development</h3>

            <p>
              Develop Java applications using Object-Oriented Programming,
              Collections and problem-solving concepts.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="bx bx-data"></i>
            </div>

            <h3>Database Management</h3>

            <p>
              Design and manage MySQL databases with efficient queries,
              relationships and data storage.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="bx bxl-react"></i>
            </div>

            <h3>Frontend Development</h3>

            <p>
              Create attractive, responsive user interfaces using
              React.js with reusable components.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;