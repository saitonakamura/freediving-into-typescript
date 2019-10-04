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

type FetchAction = {
  type: "TASK_FETCH"
}

type SuccessAction = {
  type: "TASK_SUCCESS"
  payload: Task
}

type FailAction = {
  type: "TASK_FAIL"
  payload: Error
}

type Actions = FetchAction | SuccessAction | FailAction

type State =
  | { isFetching: true }
  | { isFetching: false; task: Task }
  | { isFetching: false; error: Error }

export const taskReducer = (state: State, action: Actions) => {
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
