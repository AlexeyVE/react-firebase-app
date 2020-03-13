import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { withAuth } from '../hoc/'


const Dashboard = (props) => {
  const { projects, notifications } = props
  return (
    <div className = "dashboard container">
      <div className = "row">
        <div className = "col s12 m6">
          <ProjectList projects = { projects } />
        </div>
        <div className = "col s12 m5 offset-m1">
          <Notifications notifications = { notifications }/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ( state ) => {
  return {
    projects: state.firestore.ordered.projects,
    notifications: state.firestore.ordered.notifications
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects', orderBy:['createAt','desc']},
    {collection: 'notifications', limit:3, orderBy:['time','desc']}
  ]),withAuth
)(Dashboard)