import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { signIn } from '../../reducers/authReducer'

const SignIn = (props) => {

  const { signIn, authError, auth } = props

  let [ state, setState ] = useState({})

  setState = (e) => {
    state[ e.target.id ] = e.target.value
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    signIn(state)
  }
  if (auth.uid) return <Redirect to = "/" />
  return (
    <div className = "container">
      <form onSubmit = { handleSubmit }  className = "white">
        <h5 className = "grey-text text-darken-3">Войти</h5>
        <div className = "input-field">
          <label htmlFor = "email">Почта</label>
          <input type = "email" id = "email" onChange = { setState }/>
        </div>
        <div className = "input-field">
          <label htmlFor = "password">Пароль</label>
          <input type = "password" id = "password" onChange = { setState } />
        </div>
        <div className = "input-field">
          <button  className = "waves-effect waves-light btn btn orange lighten-1 z-depth-0">
            Вход
          </button>
        </div>
      </form>
      <div className="red-text center">
        { authError ? <p>{ authError }</p> : null }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps, { signIn })(SignIn)