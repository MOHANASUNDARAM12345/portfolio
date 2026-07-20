import React from "react";
import "./FloatingSocial.css";

function FloatingSocial() {
  return (
    <div className="floating-social">

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

      <a
        href="https://leetcode.com/u/MOHANASUNDARAM-V/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bx bx-code-alt"></i>
      </a>

      <a href="mailto:sundaramm838@gmail.com">
        <i className="bx bx-envelope"></i>
      </a>

    </div>
  );
}

export default FloatingSocial;