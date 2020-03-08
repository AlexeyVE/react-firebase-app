const NEW_PROJECT = "NEW_PROJECT"
const initialState = {
  projects: []
}

export default ( state = initialState, action ) => {
  switch( action.type ) {
    case NEW_PROJECT:
      return { state, projects: [ ...state.projects, action.payload ]}
    default: return state
  }
}