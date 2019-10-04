import React, { useReducer } from "react"
import { taskReducer } from "./du"

const TaskCard = (props: {}) => {
  const [state, dispatch] = useReducer(taskReducer, { isFetching: true })

  if (state.isFetching) {
    return <div>Loading...</div>
  }

  if ("error" in state) {
    return (
      <div>
        {`Error: ${state.error}`}
        <button>Retry</button>
      </div>
    )
  }

  return <div>{state.task.title}</div>
}
