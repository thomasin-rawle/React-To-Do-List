import React from 'react';
import Todo from './Todo'

const List = (props) => {
  return (
    <ul>
      {props.todos.map(todo => <Todo key={todo} task={todo} removeTodo={props.removeTodo} />)}
    </ul>
  )
}

export default List;