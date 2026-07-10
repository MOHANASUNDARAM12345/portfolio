import React, { useEffect } from "react";
import "./code.css";

function Home() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hi, I'm Mohanasundaram V</h1>

        <h3>Web Developer</h3>

        <p>
          I am an Information Technology student with a passion for Web
          Development. I have knowledge in Java, Python, HTML, CSS,
          JavaScript, React and MySQL. I enjoy learning new technologies
          and building innovative projects.
        </p>

        <div className="home-sci">
          <a
            href="https://leetcode.com/u/MOHANASUNDARAM-V/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bx-code-alt"></i>
          </a>

          <a
            href="https://github.com/MOHANASUNDARAM12345"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/mohanasundaram-v-237846356"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a href="mailto:sundaramm838@gmail.com">
            <i className="bx bx-envelope"></i>
          </a>
        </div>

        <a
          href={`${process.env.PUBLIC_URL}/Mohanasundaram_CV.pdf`}
          download
          className="cv-btn"
        >
          <i className="bx bx-download"></i>
          Download CV
        </a>
      </div>
    </section>
  );
}

export default Home;