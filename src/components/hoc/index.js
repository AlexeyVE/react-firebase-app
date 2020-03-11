import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const mapStateToProps = (state) => { 
  return {
    auth: state.firebase.auth
  }
}
export const withAuth = (Component) => {
  const CheckAuth = ({ ...props }) => {
    if (!props.auth.uid) 
    return <Redirect to = "/signin"/>
    return <Component {...props}/>
  }  
  return connect(mapStateToProps)(CheckAuth)
}


