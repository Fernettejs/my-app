import React from 'react';
import './App.css';
import FrontPage from "./Components/FrontPage";
import Navbar from "./Components/Navbar";
import AboutMeContainer from "./Components/AboutMeContainer";
import ProjectsContainer from "./Components/Projects";



function App() {

  return (
    <div className="App">
      {/* Sticky Nav */}
      <Navbar />

      {/* Front Page */}
      <FrontPage />


      {/* About Me */}
      <div id="aboutLink"></div>
      <AboutMeContainer />

      {/* Projects */}
      <div id="projectLink"></div>
      <ProjectsContainer />
      </div>
  );
}

export default App;
