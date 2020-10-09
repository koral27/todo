import React, { useState } from 'react';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar'
import Content from './components/content/content'

import { ITodo } from './interfaces'


const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    }
    setTodos((state) => [ newTodo, ...state ])
  }

  const completeHandler = (id: number) => {
    setTodos(state => state.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }))
  }

  const deleteHandler = (id: number) => {
    setTodos(state => state.filter(todo => todo.id !== id))
  }

  return (
    <>
      <Header />
      <div className="row no-gutter" style={{height: '100%', display: 'flex'}}>
        <div className="col s2">
          <Sidebar />
        </div>
        <div className="col s10">
          <Content 
            onAdd={addHandler} 
            todos={todos} 
            onComplete={completeHandler} 
            onDelete={deleteHandler}
          />
        </div>
      </div>
    </>
  );
}

export default App;
