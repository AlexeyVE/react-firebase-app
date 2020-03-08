import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import fbConfig from '../firebase/firebaseConfig'
import { getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import rootReducer from '../reducers/'


const middlewares = [
  logger,
  thunk.withExtraArgument( { getFirebase, getFirestore })
]

export default createStore( rootReducer,compose(
  applyMiddleware( ...middlewares ),reduxFirestore(fbConfig))
)

