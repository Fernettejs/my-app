import React from 'react'
import '../CSS/Grid.css'
import '../CSS/AboutMeContainer.css';
import welcome from '../Images/Welcome.jpg'
import brain from '../Images/left-brain-right-brain2.jpg'
import coding from '../Images/coding in a nutshell.jpg'
import github from '../Images/github_logo.png'



function AboutMeGrid() {
    return (
        <div className="about">

            <div className="aboutContainer">
                <a href="https://my.indeed.com/p/josephf-xgjxe9l" target="_blank" rel="noreferrer" className="image">
                    <img id="projectPhoto" src={welcome} alt="welcome"/>
                    <div className="middle">
                        <div className="projectText">Resume</div>
                    </div>                </a>
            </div>

            <div className="aboutContainer">
                <a href="/resources/Pages/who.html" target="_blank" rel="noreferrer" className="image">
                    <img id="projectPhoto" src={brain} alt="Who"/>
                    <div className="middle">
                        <div className="projectText">Who I Am</div>
                    </div>
                </a>
            </div>

            <div className="aboutContainer">
                <a href="/resources/Pages/how.html" target="_blank" rel="noreferrer" className="image">
                    <img id="projectPhoto" src={coding}alt="Coding in a nutshell"/>
                    <div className="middle">
                        <div className="projectText">How I Work</div>
                    </div>
                </a>
            </div>

            <div className="aboutContainer">
                <a href="https://github.com/Fernettejs" target="_blank" rel="noreferrer" className="image">
                    <img id="projectPhoto" src={github}alt="My gitHub"/>
                    <div className="middle">
                        <div className="projectText">My Github</div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default AboutMeGrid
