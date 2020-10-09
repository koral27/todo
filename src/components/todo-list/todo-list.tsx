import React from 'react';

import { ITodo } from '../../interfaces'

import './todo-list.scss'

type TodoListProps = {
  todos: ITodo[],
  onComplete: (id: number) => void
  onDelete: (id: number) => void
}


const TodoList: React.FC<TodoListProps> = ({ todos, onComplete, onDelete }) => {
  
  const items = todos.map((todo) => {
    const { title, id, completed } = todo;
    const classes = ['todo-item', 'collection-item']

    if (completed) {
      classes.push('completed')
    }

    return (   
      <li 
        key={id} 
        className={classes.join(' ')}>
        <label>
          <input type="checkbox" checked={completed} onChange={() => onComplete(id)}/>
          <span>{title}</span>
          <button className="secondary-content btn-flat">
            <i 
              className="material-icons red-text"
              onClick={() => onDelete(id)}>
                delete
            </i>
          </button>
        </label>
      </li>
    )
  })
  
  return (
    <ul className="todo-list collection">
      { items }
    </ul>
  )
}

export default TodoList;