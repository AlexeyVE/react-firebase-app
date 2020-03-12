import React from 'react'
import { connect, useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
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

export const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className = "app-preloader">Loading...</div>;
  return children
}


