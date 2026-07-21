import React, { useEffect, useState } from "react";

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
import Footer from "./Footer";

import ScrollTop from "./ScrollTop";
import ScrollProgress from "./ScrollProgress";
import FloatingSocial from "./FloatingSocial";
import CursorGlow from "./CursorGlow";
import Loader from "./Loader";
import LiveClock from "./LiveClock";

import { playHover } from "./Sound";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: "ease-in-out",
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let lastPlay = 0;

    const handleHover = (e) => {
      const now = Date.now();

      if (now - lastPlay < 200) return;

      const target = e.target;

      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".project-card") ||
        target.closest(".service-box")
      ) {
        lastPlay = now;
        playHover();
      }
    };

    document.addEventListener("mouseover", handleHover);

    return () => {
      document.removeEventListener("mouseover", handleHover);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <CursorGlow />

      <ScrollProgress />

      <FloatingSocial />

      <LiveClock />

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

      <Footer />

      <ScrollTop />
    </>
  );
}

export default App;