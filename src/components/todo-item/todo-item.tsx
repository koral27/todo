import React, { FC } from 'react';
import { TTodoProps } from '../../types';
import { store } from '../../store';
import { completeTask, deleteTask } from '../../actions';
import { TodoDate } from '../todo-date';
import './todo-item.scss';

const TodoItem: FC<TTodoProps> = ({ todo }) => {
  const { title, id, completed, deadline } = todo;
  const classes = ['todo-item', 'list-group-item', 'align-items-start'];

  if (completed) classes.push('completed');

  return (
    <li className={classes.join(' ')}>
      <input
        type="checkbox"
        checked={completed}
        className="todo-checkbox mr-3"
        onChange={() => store.dispatch(completeTask(id))}
      />
      <div className="todo-body">
        <span className="todo-title">{title}</span>
        <TodoDate deadline={deadline} />
      </div>
      <button className="btn btn-link ml-auto p-0">
        <img
          src="/img/trash-fill.svg"
          alt=""
          onClick={() => store.dispatch(deleteTask(id))}
        />
      </button>
    </li>
  );
};

export default TodoItem;
