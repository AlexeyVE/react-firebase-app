import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import fbConfig from '../firebase/firebaseConfig'
import { getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import rootReducer from '../reducers/'


const middlewares = [
  thunk.withExtraArgument( { getFirebase, getFirestore }),
  logger
]

export default createStore( rootReducer,compose(
  applyMiddleware( ...middlewares ),reduxFirestore( fbConfig ))
)

