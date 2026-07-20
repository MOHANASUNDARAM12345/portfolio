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
function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    },3000);

    return () => clearTimeout(timer);

  },[]);

  if(loading){

    return <Loader/>;

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