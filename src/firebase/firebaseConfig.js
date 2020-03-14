import config from './key'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Initialize Firebase
firebase.initializeApp(config)
firebase.firestore()
  
export default firebase