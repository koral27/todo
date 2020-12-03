import { Action, State, TTodo } from './types';

const savedTasks: any = JSON.parse(localStorage.getItem('todos') || '[]');

const initialState: State = {
  todos: savedTasks,
};

const todoReducer: Function = (state: State = initialState, action: Action) => {
  const todos = state.todos;

  switch (action.type) {
    case 'ADD_TASK':
      console.log(action.payload);
      const newTodo: TTodo = {
        title: action.payload.title as string,
        id: Date.now(),
        completed: false,
        deadline: action.payload.deadline as string,
      };
      const newTodos = [...todos, newTodo];
      localStorage.setItem('todos', JSON.stringify(newTodos));

      return { ...state, todos: newTodos };

    case 'DELETE_TASK':
      const shouldDelete = window.confirm('Удалить задачу?');

      if (shouldDelete) {
        const filteredTodos = todos.filter(({ id }) => id !== action.payload);
        localStorage.setItem('todos', JSON.stringify(filteredTodos));
        return { ...state, todos: filteredTodos };
      }
      return state;

    case 'COMPLETE_TASK':
      return {
        ...state,
        todos: todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};

export { todoReducer };
