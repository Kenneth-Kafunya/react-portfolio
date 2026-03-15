// import { useState } from "react";

import Hero from "./components/Hero";

import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
