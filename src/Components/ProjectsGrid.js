import React from 'react'
import '../CSS/Grid.css'
import '../CSS/Projects.css';
import OperationOutlast from '../Images/OperationOutlast.png';
import alex_image from '../Images/alex_banner.jpg'
 
// import angry from '../Images/Angry8ball_logo.png';
// import angrySite from '../Projects/The_Angry_Eightball/index.html'


function ProjectsGrid() {
    return (
         <div className="projects">

            <div className="projectContainer">
                <a href="https://www.operationoutlast.com/" target="_blank" rel="noreferrer" className="image">
                    <img id="projectPhoto" src={OperationOutlast} alt="OperationOutlast"/>
                    <div className="middle">
                        <div className="projectText"><b>Operation Outlast:</b> <br/> Wordpress website created for an LLC I began while going to college.</div>
                    </div>
                </a>
            </div>
               <div className="projectContainer">
                    <a href="https://backfirstresponders.github.io/" target="_blank" rel="noreferrer" className="image">
                    <img id="projectPhoto" src={alex_image}alt="Alex"/>
                    <div className="middle">
                        <div className="projectText"><b>Alex's Portfolio:</b> <br/> Personal website for my wife using HTML, CSS, and minimal JS.</div>
                    </div>
                </a>
            </div>

            {/* <div className="projectContainer">
                <a href={moreCowbellSite} target="_blank" rel="noreferrer" className="image">
                    <img id="projectPhoto" src={moreCowbell_Img}alt="Cowbell"/>
                    <div className="middle">
                        <div className="projectText"><b>More Cowbell:</b> <br/> HTML, CSS, and JavaScript super simple creation.</div>
                    </div>
                </a>
            </div> */}

            {/* <div className="projectContainer">
                <a href={angrySite} target="_blank" rel="noreferrer" className="image">
                    <img id="projectPhoto" src={angry}alt="Angry8ball"/>
                    <div className="middle">
                        <div className="projectText"><b>Angry Eightball:</b> <br/> Practicing with JavaScript code. Very minimal CSS design.</div>
                    </div>
                </a>
            </div> */}
        </div>
    )
}

export default ProjectsGrid
