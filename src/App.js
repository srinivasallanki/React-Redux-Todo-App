import TodoAdd from './components/TodoAdd'
import { useState } from 'react'
import TodoList from './components/TodoList'

const initialTodos = [
  { id: 1, text: 'Attend meeting at 10Am' },
  { id: 2, text: 'Prepare presentation' },
  { id: 3, text: 'Team interaction session' },
]

function App() {
  const [todos, setTodos] = useState(initialTodos)
  console.log(todos)
  return (
    <div className='ui raised very padded text container segment tall stacked mt-80'>
      <h2>Todo Application</h2>
      <TodoAdd />
      <TodoList />
    </div>
  )
}

export default App
