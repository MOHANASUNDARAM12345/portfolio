import React from "react";
import "./code.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Me</h2>

        <p>
          Hello! I am <b>Mohanasundaram V</b>, currently pursuing
          B.Tech Information Technology.
        </p>

        <p>
          I am interested in Web Development and Full Stack Development.
          I have knowledge in Java, Python, HTML, CSS, JavaScript,
          React and MySQL.
        </p>

        <p>
          I am a quick learner, a good team player, and always eager
          to learn new technologies and build innovative projects.
        </p>

        <h3>Skills</h3>

        <ul>
          <li>Java</li>
          <li>Python</li>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React JS</li>
          <li>MySQL</li>
          <li>Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
}

export default About;