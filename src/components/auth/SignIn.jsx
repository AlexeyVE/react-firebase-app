import React, { useState } from 'react'

const SignIn = ( props ) => {

let [ state, setState ] = useState({})

setState = ( e ) => {
  state[ e.target.id ] = e.target.value
  console.log( state )
}
const handleSubmit = ( e ) => {
  e.preventDefault()
  state = {}
  console.log(state)
}

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
        <button className = "waves-effect waves-light btn btn orange lighten-1 z-depth-0">Вход</button>
      </div>
    </form>
  </div>
  )
}

export default SignIn