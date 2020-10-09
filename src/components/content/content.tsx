import React from 'react';

import AddForm from '../add-form/add-form'
import TodoList from '../todo-list/todo-list'

import { ITodo } from '../../interfaces'
import './content.scss'

interface TodoFormProps {
  onAdd(title: string): void
  todos: ITodo[]
  onComplete: (id: number) => void
  onDelete: (id: number) => void
}

const Content: React.FC<TodoFormProps> = (props) => {
  return (
    <main className="main-content">
      <AddForm onAdd={props.onAdd}/>
      <div className="col s6">
        <TodoList todos={props.todos} onComplete={props.onComplete} onDelete={props.onDelete}/>
      </div>
    </main>
  )
}

export default Content;