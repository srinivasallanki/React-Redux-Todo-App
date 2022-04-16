import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from './actionTypes'

let nextTodoId = 4

export const add = (item) => {
  return {
    type: ADD_TODO,
    payload: {
      id: ++nextTodoId,
      text: item,
      completed: false,
    },
  }
}

export const remove = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  }
}

export const completeTask = (id) => ({
  type: COMPLETE_TODO,
  payload: id,
})
