import React from 'react'
import { useDispatch } from 'react-redux'
import { remove, completeTask } from '../redux/todoActions'

const TodoItem = ({ item }) => {
  const dispatch = useDispatch()

  const handleStatus = (id) => {
    dispatch(completeTask(id))
  }

  const handleRemove = (id) => {
    dispatch(remove(id))
  }

  return (
    <div className='item taskItem'>
      <div className='right floated content'>
        <span className='actions'>
          <input
            type='checkbox'
            checked={`${item.completed ? 'true' : ''}`}
            onChange={() => handleStatus(item.id)}
          />
        </span>
        <span className='actions' onClick={() => handleRemove(item.id)}>
          <i className='fa fa-trash-o' aria-hidden='true'></i>
        </span>
      </div>
      <div className={`content ${item.completed ? 'completed' : ''}`}>
        {item.text}
      </div>
    </div>
  )
}

export default TodoItem
