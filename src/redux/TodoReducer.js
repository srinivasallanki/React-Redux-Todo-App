import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from './actionTypes'

const initialState = {
  taskItems: [
    { id: 1, text: 'Attend meeting at 9Am', completed: false },
    { id: 2, text: 'Prepare presentation', completed: true },
    { id: 3, text: 'Team interaction session', completed: false },
  ],
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        taskItems: [action.payload, ...state.taskItems],
      }
    case DELETE_TODO:
      return {
        ...state,
        taskItems: [
          ...state.taskItems.filter((task) => task.id !== action.payload),
        ],
      }
    case COMPLETE_TODO:
      let updatedTaskItems = []
      state.taskItems.map((task) => {
        if (task.id === action.payload) {
          if (task.completed === true) {
            task.completed = false
          } else {
            task.completed = true
          }
        }
        updatedTaskItems.push(task)
      })
      return {
        ...state,
        taskItems: updatedTaskItems,
      }
    default:
      return state
  }
}
