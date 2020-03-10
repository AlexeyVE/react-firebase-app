import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../reducers/authReducer'

const SinLinks = (props) => {
  return(
    <ul className = "right">
      <li>
        <NavLink to = "/create-project">Новый проект</NavLink>
      </li>
      <li>
        <a onClick = { props.signOut } >Выйти</a>
      </li>
      <li>
        <NavLink to = "/" className = "btn btn-floating  orange lighten-1 ">AV</NavLink>
      </li>
    </ul>
  )
}

// const mapStateToprops = (state) => {
//   return {
  
//   }
// }

export default connect(null, { signOut })(SinLinks)