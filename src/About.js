import React from "react";
import "./code.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">

        <h2>About Me</h2>

        <p className="subtitle">
          Passionate Full Stack Developer | B.Tech Information Technology Student
        </p>

        <p>
          Hello! I'm <strong>Mohanasundaram V</strong>, a B.Tech Information
          Technology student with a strong interest in Full Stack Web Development.
        </p>

        <p>
          I enjoy building responsive, user-friendly web applications using
          modern technologies. I continuously improve my programming skills
          through projects and hands-on learning.
        </p>

        <p>
          I have hands-on experience in Java, Python, HTML, CSS, JavaScript,
          React.js, MySQL, Git, and GitHub. I am always eager to explore new
          technologies and build innovative software solutions.
        </p>

        <p>
          I am a quick learner, a collaborative team player, and passionate
          about improving my technical and problem-solving skills.
        </p>

        <h3>Technical Skills</h3>

        <div className="skills-container">

          <div className="skill">
            <span className="java-icon">
              <i className="devicon-java-plain colored"></i>
            </span>
            Java
          </div>

          <div className="skill">
            <i className="devicon-python-plain colored"></i>
            Python
          </div>

          <div className="skill">
            <i className="devicon-html5-plain colored"></i>
            HTML5
          </div>

          <div className="skill">
            <i className="devicon-css3-plain colored"></i>
            CSS3
          </div>

          <div className="skill">
            <i className="devicon-javascript-plain colored"></i>
            JavaScript
          </div>

          <div className="skill">
            <i className="devicon-react-original colored"></i>
            React.js
          </div>

          <div className="skill">
            <i className="devicon-mysql-plain colored"></i>
            MySQL
          </div>

          <div className="skill">
            <i className="devicon-git-plain colored"></i>
            Git
          </div>

          <div className="skill">
            <i className="devicon-github-original"></i>
            GitHub
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;