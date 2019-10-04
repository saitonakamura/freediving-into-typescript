export const createFetch = () => ({
  type: "TASK_FETCH"
})

export const createSuccess = task => ({
  type: "TASK_SUCCESS",
  payload: task
})

export const createFail = error => ({
  type: "TASK_FAIL",
  payload: error
})

export const taskReducer = (state, action) => {
  switch (action.type) {
    case "TASK_FETCH":
      return { isFetching: true }
    case "TASK_SUCCESS":
      return { isFetching: false, task: action.payload }
    case "TASK_FAIL":
      return { isFetching: false, error: action.payload }
  }

  return state
}
