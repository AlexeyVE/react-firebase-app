// action types
const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGIN_ERROR = "LOGIN_ERROR"
const SIGN_OUT = "SIGN_OUT"


const INITIAL_STATE = {
  authError: null
}
//reducer
export default ( state = INITIAL_STATE, action ) => {
  switch( action.type ) {
    case LOGIN_ERROR:
      return {
        ...state,
        authError: 'Login failed. ' + action.err
      }
    case LOGIN_SUCCESS:
      console.log('Login success')
      return {
        ...state,
        authError: null
      }
    case SIGN_OUT:
      console.log('Sign out success')
      return state
    default: return state
  }
}
// actions
const sign_in = () => ({ type: LOGIN_SUCCESS })
const sign_in_error = (err) => ({ type: LOGIN_ERROR, err })
const sign_out = () => ({ type: SIGN_OUT })
//thunks
export const signIn = (credentials) => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase()

  firebase.auth().signInWithEmailAndPassword(
    credentials.email,
    credentials.password)
  .then(() => dispatch(sign_in()))
  .catch(err => dispatch(sign_in_error(err)))
}

export const signOut = () => (dispatch, getState, { getFirebase } ) => {
  const firebase = getFirebase()

  firebase.auth().signOut()
  .then(() => dispatch(sign_out()))
}