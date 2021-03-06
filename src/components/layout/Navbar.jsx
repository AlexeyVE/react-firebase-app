import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SinLinks from './SinLinks'
import SoutLinks from './SoutLinks'

const Navbar = (props) => {
  const { auth, profile } = props
  const links = auth.uid ? <SinLinks profile = { profile } /> : <SoutLinks />
  return(
    <nav className = "nav-wrapper grey darken-3">
      <div className = "container">
        <Link to = "/" className="brand-logo">Планировщик</Link>
        { links }
      </div>
    </nav>
    )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)