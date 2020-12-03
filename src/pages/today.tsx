import React, { FC } from 'react';
import AddForm from '../components/add-form/add-form';

export const TodayPage: FC = () => {
  return (
    <>
      <h1>Сегодня</h1>
      <div className="row no-gutters mb-5">
        <div className="col-4">
          <AddForm />
        </div>
      </div>
    </>
  );
};
