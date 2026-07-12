import React from "react";
import "./code.css";

function Header() {
  return (
    <header className="header">
      <a href="#home" className="logo">
        Mohanasundaram V
      </a>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#school-achievements">School Achievements</a>
        <a href="#college-achievements">College Achievements</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;