import React, { FC } from 'react';
import { connect } from 'react-redux';
import { State, TTodo, TTodos } from '../../types';
import { TodoItem } from '../todo-item';
import './todo-list.scss';

const TodoList: FC<TTodos> = ({ todos }) => {
  const items = todos.map((todo: TTodo) => {
    return <TodoItem key={todo.id} todo={todo} />;
  });

  if (todos.length === 0) return <p>Наслаждайтесь отдыхом!</p>;

  return <ul className="todo-list list-group">{items}</ul>;
};

const mapStateToProps = (state: State) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    add: () => {
      dispatch({ type: 'ADD_TASK' });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
