import React from 'react';
import { Link } from "react-router-dom"

import { FaGithub } from "react-icons/fa"

import "./projects.css"

import projectData from "../../images/projects/projectData"

const ProjectsPage = () => {
  
  const [projects, setProjects] = React.useState(projectData)
  console.log(projects);

  return(
    <>
      <div className="projects-root-container">
        {projects.map(project => {
          return (
            <div className="project-card">
              <div className="project-image-container">
                <img className="project-image" src={project.image} alt={project.title}/>
              </div>
              <div className="project-description-container">
                <h2 className="project-title">{project.title}</h2>
                <h5 className="project-description">{project.description}</h5>
                <button className="project-button"><a href={project.github}><FaGithub /></a></button>
              </div>
            </div>
          )
        })}

      </div>
    </>
  )

}

export default ProjectsPage;



