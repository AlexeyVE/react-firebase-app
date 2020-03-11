import React from 'react'

const ProjectSummary = ({ project }) => {
  return (
    <div className = "card z-depth-0 project-summary border light-blue lighten-5">
      <div className = "card-content grey-text text-darken-3">
        <span className = "project-title">{ project.title }</span>  
        <p>Сообщение от : { project.authorFirstName }</p>
        <p className = "grey-text">6 марта 14:20</p>
      </div>
    </div>
  )
}

export default ProjectSummary