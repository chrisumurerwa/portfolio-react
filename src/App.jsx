import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Experience />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;


