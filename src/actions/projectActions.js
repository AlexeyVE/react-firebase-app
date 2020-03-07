const CREATE_PROJECT = "CREATE_PROJECT"

export const createProject = ( payload )  => ( dispatch, getState ) =>
  dispatch({ type: CREATE_PROJECT, project: payload })