const CREATE_PROJECT = "CREATE_PROJECT"
const CREATE_PROJECT_ERROR = "CREATE_PROJECT_ERROR"

export const createProject = ( payload )  => 
  ( dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('projects').add({
     ...payload,
     authorFirstName: "no name",
     authorLastName: "no-name",
     authorId: 12345,
     createAt: new Date()
    }).then(() => dispatch({ type: CREATE_PROJECT, project: payload }))
    .catch(( err ) => dispatch({ type: CREATE_PROJECT_ERROR, err }))    
  }
