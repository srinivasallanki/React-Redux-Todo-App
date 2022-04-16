import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const taskItems = useSelector((state) => state.taskItems.taskItems)
  return (
    <div className='ui  list'>
      {taskItems.map((item) => {
        return <TodoItem key={item.id} item={item} />
      })}
    </div>
  )
}

export default TodoList
