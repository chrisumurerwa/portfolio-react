import React from 'react';
import './App.css';
import Hero from './components/Hero';
// import About from './components/About';
import Skills from './components/skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Hero />
      {/* <About /> */}
      <Experience />
      <Skills />

      <Projects />
      <Contact />
    </div>
  );
}

export default App;

