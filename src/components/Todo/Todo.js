import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addText, resetText, selectText } from '../../store/slices/text'
import { addTodo, checkedTodo, deleteAllCompleted, deleteTodo, selectTodo } from '../../store/slices/todos'

const Todo = () => {
    const text = useSelector(selectText)
    const todos = useSelector(selectTodo)
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
      e.preventDefault()
      if(text !== "") {
        dispatch(addTodo(text))
        dispatch(resetText())
      }
    }

  return (
    <div className='todos'>
      <form onSubmit={handleSubmit}>
        <input value={text} type="text" onChange={(e) => dispatch(addText(e.target.value))} placeholder='Text..' />
        <button>ADD</button>
      </form>
      {
        todos.length ? 
        todos.map(todo => {
          return <div className='todo' key={todo?.id}>
            <label>
              <input type="checkbox" onChange={() => dispatch(checkedTodo(todo?.id))} checked={todo.completed} />
              <h3 style={{color : todo.completed? "green" : "black"  }}>{todo?.text}</h3>
            </label>
            <button onClick={() => dispatch(deleteTodo(todo?.id))}>Delete</button>
            <hr />
          </div>
        })
        : null
      }
      {
        todos.length ? 
        <div className="footer">
          <span>{todos.filter(t => t.completed).length } / { todos.length}</span>
          <button onClick={(e) => dispatch(deleteAllCompleted())}>Delete All Completed</button>
        </div>
        : null
      }
    </div>
  )
}

export default Todo
