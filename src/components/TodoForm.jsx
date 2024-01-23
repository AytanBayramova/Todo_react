import React, {useState} from 'react'

function TodoForm({addTodo}) {
  const [value, setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault();

    addTodo(value)

    setValue('')
  }
  return (
<form className='TodoForm' onSubmit={handleSubmit}>
  <input type="text"  className='todo-input' value={value} placeholder='Add Todo' onChange={(e)=>setValue(e.target.value)}/>
  {/* <input type="number"  className='todo-input'  placeholder='Add user age' /> */}
  <button type='submit' className='todo-btn'>Add todo</button>
</form>  


)
}

export default TodoForm