import React, { FC } from 'react';

import AddForm from '../components/add-form/add-form';
import TodoList from '../components/todo-list/todo-list';

export const InboxPage: FC = () => {
  return (
    <>
      <h1>Входящие</h1>
      <div className="row no-gutters mb-5">
        <div className="col-4">
          <AddForm />
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-4">
          <TodoList />
        </div>
      </div>
    </>
  );
};
