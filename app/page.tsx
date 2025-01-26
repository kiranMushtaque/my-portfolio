import React from "react";
import Hero from "./components/hero";
import Contact from "./components/contact";
import Project from "./components/project";
import About from "./components/about";
import Skills from "./components/skills";

const page = () => {
  return (
    <div>
      <Hero />

      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default page;
