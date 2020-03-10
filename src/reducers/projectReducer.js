
// action types
const CREATE_PROJECT = "CREATE_PROJECT"
const CREATE_PROJECT_ERROR = "CREATE_PROJECT_ERROR"

const INITIAL_STATE = {
  projects: []
}
// reducer
export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CREATE_PROJECT:
      console.log('create project', action.payload)
      return state
    case CREATE_PROJECT_ERROR:
      console.log('create project error', action.err)
      return state  
    default: return state
  }
}
// actions
const create_project = (payload) => ({ type: CREATE_PROJECT,project: payload })
const create_project_error = (err) => ({ type :CREATE_PROJECT_ERROR, err })

// thunks
export const createProject = (payload)  => 
  ( dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection( 'projects' ).add({
     ...payload,
     authorId: 12345,
     createAt: new Date()
    }).then(() => dispatch( create_project( payload )))
    .catch(( err ) => dispatch( create_project_error( err )))    
  }
