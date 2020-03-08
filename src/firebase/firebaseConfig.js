  
  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'

  const firebaseConfig = {
    apiKey: "AIzaSyA16SuIti0zCJUkjXm8IIHfLsKiz1LXnK0",
    authDomain: "planner-b84c0.firebaseapp.com",
    databaseURL: "https://planner-b84c0.firebaseio.com",
    projectId: "planner-b84c0",
    storageBucket: "planner-b84c0.appspot.com",
    messagingSenderId: "216147532009",
    appId: "1:216147532009:web:a378b6d6aa6d0b1bd67878",
    measurementId: "G-QS5PMM04VS"
  }
  // Initialize Firebase
  firebase.initializeApp( firebaseConfig )
  firebase.firestore()
  
  export default firebase