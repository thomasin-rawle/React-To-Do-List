import React from 'react';
import './Todo.css'

const Todo = (props) => {
  return (
    <div>
      <li className={props.isComplete ? 'completed' : ''} onClick={() => props.checkOffTodo(props.task, props.isComplete)} >{props.task}</li>
      {/* <li className="todo" onClick={() => props.removeTodo(props.task)} >{props.task}</li> */}
    </div>
  )
}


export default Todo;