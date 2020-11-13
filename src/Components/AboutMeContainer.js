import React from 'react'
import AboutMe from "./AboutMeGrid";
import Widgets from "./Widgets";
import '../CSS/AboutMeContainer.css';


function AboutMeContainer() {
    return (
        <div>
            <h2 className="header">About Me</h2>
            <div className="aboutMeContainer">
                <AboutMe />
                <Widgets />
            </div>
        </div>
    )
}

export default AboutMeContainer
