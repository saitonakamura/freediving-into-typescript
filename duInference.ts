const createFetch = () => ({
  type: "TASK_FETCH"
})

const createSuccess = (task: Task) => ({
  type: "TASK_SUCCESS",
  payload: task
})

const createFail = (error: Error) => ({
  type: "TASK_FAIL",
  payload: error
})

const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case "TASK_FETCH":
      return { isFetching: true }
    case "TASK_SUCCESS":
      return { isFetching: false, task: action.payload }
    case "TASK_FAIL":
      return { isFetching: false, error: action.payload }
  }

  const _exhaustiveCheck: never = action

  return state
}

export {}
