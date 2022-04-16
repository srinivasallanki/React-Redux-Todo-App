import { combineReducers } from 'redux'
import { todoReducer } from './TodoReducer'

const rootReducer = combineReducers({
  taskItems: todoReducer,
})

export default rootReducer
