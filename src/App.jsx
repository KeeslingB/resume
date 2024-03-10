import './index.css'
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import React from "react";



function App() {

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Nav />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
