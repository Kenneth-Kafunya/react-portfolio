// import { useState } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
