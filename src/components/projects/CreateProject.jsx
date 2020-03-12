import React, { useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createProject } from '../../reducers/projectReducer'
import { withAuth } from '../hoc/'

const CreateProject = ( props ) => {

  const { createProject, history } = props 

  let [ state, setState] = useState({})

  setState = (e) => { 
    state[ e.target.id ] = e.target.value
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createProject(state) 
    history.push('/')    
  }

  return (
    <div className = "container">
      <form onSubmit = { handleSubmit }  className = "white">
        <h5 className = "grey-text text-darken-3">
          Создать новый проект
        </h5>
        <div className = "input-field">
          <label htmlFor = "title">Название проекта</label>
          <input type = "text" id = "title" onChange = { setState }/>
        </div>
        <div className = "input-field">
          <label htmlFor = "content">Описание проекта</label>
          <textarea id = "content" 
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


export default compose(connect(null, { createProject } ),withAuth)(CreateProject)