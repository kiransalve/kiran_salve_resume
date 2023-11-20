import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Language from "./pages/Language";
import Projects from "./pages/Projects";
import Interest from "./pages/Interest";

function App() {
  return (
    <>
      <Header />
      <div className="l-main bd-container">
        <div className="resume">
          <div className="resume_left">
            <Homepage />
            <Profile />
            <Education />
          </div>
          <div className="resume_right">
            <Projects />
            <Experience />
            <Language />
            <Interest />
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
