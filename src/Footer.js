import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3>Mohanasundaram V</h3>

      <p>
        Thank you for visiting my portfolio.
      </p>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-social">
        <a
          href="https://github.com/MOHANASUNDARAM12345"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/mohanasundaram-v-237846356"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://leetcode.com/u/MOHANASUNDARAM-V/"
          target="_blank"
          rel="noreferrer"
        >
          LeetCode
        </a>
      </div>

      <p className="copyright">
        © 2026 Mohanasundaram V | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;