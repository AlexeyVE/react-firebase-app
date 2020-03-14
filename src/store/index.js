import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import fbConfig from '../firebase/firebaseConfig'
import { getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import rootReducer from '../reducers/'

// const middlewares = [
//   thunk.withExtraArgument( { getFirebase, getFirestore }),
//   DEBUG && logger,
// ].filter(Boolean);



const logger = createLogger()

let middleware = []

const reduxThunk = thunk.withExtraArgument( { getFirebase, getFirestore })

if (process.env.NODE_ENV === 'production') {
  middleware = [ reduxThunk ]
}
else {
  middleware = [ reduxThunk, logger ]
}


export default createStore( rootReducer,compose(
  applyMiddleware(...middleware),reduxFirestore( fbConfig ))
)

