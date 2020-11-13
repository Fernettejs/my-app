import React from 'react'
import ProjectsGrid from "./ProjectsGrid";
import '../CSS/AboutMeContainer.css';



function ProjectsContainer() {
    return (
        <div>
            <h2 className="header">Projects</h2>
            <div className="projectsContainer">
                <ProjectsGrid />
            </div>
        </div>
    )
}

export default ProjectsContainer
