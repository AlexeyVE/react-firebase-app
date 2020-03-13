// action types
const LOGIN_SUCCESS = "LOGIN_SUCCESS"

const LOGIN_ERROR = "LOGIN_ERROR"

const SIGN_OUT = "SIGN_OUT"

const SIGNUP_SUCCESS = "SIGN_UP_SUCCESS"

const SIGNUP_ERROR = "SIGNUP_ERROR"


const INITIAL_STATE = {
  authError: null,
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
    case SIGNUP_SUCCESS:
      console.log('signup success')
      return {
        ...state,
        authError: null
      }
    case SIGNUP_ERROR:
      return {
        ...state,
        authError: 'Sign up failed. ' + action.err
      }    
    default: return state
  }
}
// actions
const sign_in = () => ({ type: LOGIN_SUCCESS })

const sign_in_error = (err) => ({ type: LOGIN_ERROR, err })

const sign_out = () => ({ type: SIGN_OUT })

const sign_up = () => ({ type: SIGNUP_SUCCESS })

const sign_up_error = (err) => ({ type: SIGNUP_ERROR,err })
//thunks
export const signIn = (credentials) => 
  (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    return firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password)
    .then(() => dispatch(sign_in()))
    .catch(err => dispatch(sign_in_error(err.message)))
  }
 

export const signOut = () => 
  (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    return firebase.auth().signOut()
    .then(() => {
      firebase.logout()
      dispatch(sign_out())
    })
  }


export const signUp = (newUser) => 
  (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    return firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password)
    .then(res => firestore.collection('users').doc(res.user.uid)
      .set({ 
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0]+newUser.lastName[0]})
    .then(() => dispatch(sign_up()))
    .catch(err => dispatch(sign_up_error(err.message)))
    )
  }