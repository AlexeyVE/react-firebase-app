import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../reducers/authReducer'
 
const SignUp = ( props ) => {

const { auth, signUp, authError } = props

let [ state, setState] = useState({})

setState = ( e ) => { 
  state[ e.target.id ] = e.target.value
}

const handleSubmit = ( e ) => {
  e.preventDefault()
  signUp(state)
}
if (auth.uid) return <Redirect to = "/" />
return (
  <div className = "container">
    <form onSubmit = { handleSubmit }  className = "white">
      <h5 className = "grey-text text-darken-3">
        Зарегестрироваться
      </h5>
      <div className = "input-field">
        <label htmlFor = "firstName">Имя</label>
        <input type = "text" id = "firstName" onChange = { setState }/>
      </div>
      <div className = "input-field">
        <label htmlFor = "lastName">Фамилия</label>
        <input type = "text" id = "lastName" onChange = { setState }/>
      </div>
      <div className = "input-field">
        <label htmlFor = "email">Почта</label>
        <input type = "email" id = "email" onChange = { setState }/>
      </div>
      <div className = "input-field">
        <label htmlFor = "password">Пароль</label>
        <input type = "password" id = "password" onChange = { setState } />
      </div>
      <div className = "input-field">
        <button className = "waves-effect waves-light btn btn orange lighten-1 z-depth-0">
          Регистрация
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


export default connect(mapStateToProps,{ signUp })(SignUp)