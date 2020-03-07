import React from 'react'
import { NavLink } from 'react-router-dom'

const SinLinks = ( props ) =>
{
  return(
    <ul className="right">
      <li>
        <NavLink to="/create-project">Новый проект</NavLink>
      </li>
      <li>
        <NavLink to="/">Выйти</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating  orange lighten-1">NN</NavLink>
      </li>
    </ul>
    )
}

export default SinLinks