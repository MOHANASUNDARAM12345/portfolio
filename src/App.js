import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Achievements from "./Achievements";
import CollegeAchievements from "./CollegeAchievements";
import AssessmentCertificates from "./AssessmentCertificates";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Education />
      <Achievements />
      <CollegeAchievements />
      <AssessmentCertificates />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}

export default App;