import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
import 'moment/locale/ru'
import { withAuth } from '../hoc/'

const ProjectDetails = ( props ) => {
  const { project } = props
  // moment.locale('ru')
  if ( project ) {
    return (
      <div className = "container section project-details">
        <div className = "card z-depth-0 border light-blue lighten-5">
          <div className = "card-content">
            <span className = "card-title">{ project.title }</span>
            <p> { project.content } </p>
          </div>
          <div className = "card-action grey lighten-4 grey-text">
            <div>Добавлено: { project.authorFirstName } { project.authorLastName }</div>
            <div>{ moment(project.createAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="container center">
        Loading project.....
      </div>
      )
  }
}

const mapStateToProps = ( state, ownProps ) => {
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project: project
  }
}

export default compose(
  connect( mapStateToProps ),
  firestoreConnect([
    { collection: 'projects' }  
  ]),withAuth
  )( ProjectDetails )