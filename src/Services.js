import React from "react";
import "./code.css";

function Services() {
  return (
    <section id="services" className="services">
      <div className="services-content">
        <h2>My Services</h2>

        <div className="service-box">
          <h3>Web Development</h3>
          <p>
            I create responsive and user-friendly websites using
            HTML, CSS, JavaScript and React.
          </p>
        </div>

        <div className="service-box">
          <h3>Java Programming</h3>
          <p>
            I develop Java applications using Object-Oriented
            Programming concepts.
          </p>
        </div>

        <div className="service-box">
          <h3>Database Management</h3>
          <p>
            I design and manage databases using MySQL for efficient
            data storage and retrieval.
          </p>
        </div>

        <div className="service-box">
          <h3>Frontend Development</h3>
          <p>
            I build modern and attractive user interfaces using
            React JS and CSS.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;