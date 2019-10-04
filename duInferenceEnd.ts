export const createFetch = () => ({
  type: "TASK_FETCH" as const
})

export const createSuccess = (task: Task) => ({
  type: "TASK_SUCCESS" as const,
  payload: task
})

export const createFail = (error: Error) => ({
  type: "TASK_FAIL" as const,
  payload: error
})

type Actions =
  | ReturnType<typeof createFetch>
  | ReturnType<typeof createSuccess>
  | ReturnType<typeof createFail>

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
