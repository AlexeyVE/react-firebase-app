import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../actions/projectActions'

const CreateProject = ( props ) => {

let [ state, setState] = useState({})

setState = ( e ) => { 
  state[ e.target.id ] = e.target.value
}

const handleSubmit = ( e ) => {
  e.preventDefault()
  props.createProject( state )
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


export default connect( null, { createProject } )( CreateProject )