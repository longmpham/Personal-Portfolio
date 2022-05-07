import React from 'react';
import { Link } from "react-router-dom"

import { FaGithub } from "react-icons/fa"

import "./projects.css"

import projectsData from "./projectsData"

const ProjectsPage = () => {
  
  const [projects, setProjects] = React.useState(projectsData)
  // console.log(projects);

  // React.useEffect( () => {
  //   const fetchProjects = async () => {
  //     const options = {
  //       headers : { 
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //        }
  //     }
  //     const projects = await fetch(projectData, options)
  //     console.log(projects.body)
  //     setProjects(projects)

  //   }
  //   fetchProjects();
  // },[])

  return(
    <>
      <div className="projects-root-container">
        {projects.map(project => {
          return (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img className="project-image" src={project.image} alt={project.title}/>
              </div>
              <div className="project-description-container">
                <h2 className="project-title">{project.title}</h2>
                <h4 className="project-description">{project.description}</h4>
              </div>
              <button className="project-button"><a href={project.github}><FaGithub /></a></button>
            </div>
          )
        })}

      </div>
    </>
  )

}

export default ProjectsPage;