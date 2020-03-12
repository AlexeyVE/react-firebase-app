import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import firebase from './firebase/firebaseConfig'
import { AuthIsLoaded } from './components/hoc/'

import App from './App'
import * as serviceWorker from './serviceWorker'

import './index.css'

const rrfConfig = { 
  userProfile: 'users',
  useFirestoreForProfile: true,
}
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance 
}


ReactDOM.render(
  <Provider store = { store }>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>  
    </ReactReduxFirebaseProvider> 
  </Provider>, document.getElementById('root')
)




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
