import React from 'react'
import { NavLink } from 'react-router-dom'

const SoutLinks = ( props ) =>
{
  return(
    <ul className="right">
      <li>
        <NavLink to="/signup">Зарегестрироватся</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Войти</NavLink>
      </li>
    </ul>
    )
}
export default SoutLinks