import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../redux/todoActions'

const TodoAdd = () => {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState('')

  const handleTodo = (e) => {
    dispatch(add(todo))
    setTodo('')
  }
  return (
    <div className='ui fluid action input'>
      <input
        type='text'
        placeholder='New Todo'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className='ui primary button' onClick={handleTodo}>
        ADD
      </button>
    </div>
  )
}

export default TodoAdd
