import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../actions/projectActions'

const CreateProject = ( props ) => {

let [ state, setState] = useState({})

setState = ( e ) => { 
  state[ e.target.id ] = e.target.value
  console.log( state )
  return state
}

const handleSubmit = ( e ) => {
  e.preventDefault()
  return state = {}
}

return (
  <div className = "container">
    <form onSubmit = { handleSubmit }  className = "white">
      <h5 className = "grey-text text-darken-3">
        Создать новый проект
      </h5>
      <div className = "input-field">
        <label htmlFor = "projectTitle">Название проекта</label>
        <input type = "text" id = "projectTitle" onChange = { setState }/>
      </div>
      <div className = "input-field">
        <label htmlFor = "projectDescription">Описание проекта</label>
        <textarea id = "projectDescription" 
                  className = "materialize-textarea" 
                  onChange = { setState }>
        </textarea>
      </div>
      <div className = "input-field">
        <button className = "waves-effect waves-light btn btn orange lighten-1 z-depth-0">
          Добавить
        </button>
      </div>
    </form>
  </div>
  )
}


const mapStateToProps = ( state ) => {
  return {

  }
}

export default connect( mapStateToProps )( CreateProject )