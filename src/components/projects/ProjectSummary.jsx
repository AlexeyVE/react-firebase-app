import React from 'react'
import moment from 'moment'
import 'moment/locale/ru'

const ProjectSummary = ({ project }) => {
  return (
    <div className = "card z-depth-0 project-summary border light-blue lighten-5">
      <div className = "card-content grey-text text-darken-3">
        <span className = "project-title">{ project.title }</span>  
        <p>Добавлено: { project.authorFirstName } { project.authorLastName }</p>
        <p className = "grey-text">{moment(project.createAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default ProjectSummary