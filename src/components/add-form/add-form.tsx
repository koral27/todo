import React, { FC, useState } from 'react';
import { store } from '../../store';
import { addTask } from '../../actions';
import TaskAddingForm from './form/form';
import AddDiv from './addDiv/add-div';
import './add-form.scss';

const AddForm: FC = () => {
  const [title, setTitle] = useState<string>('');
  const [deadline, setDeadline] = useState<Date>(new Date());
  const [visible, setVisible] = useState<boolean>(false);

  const changeTitleHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTitle(event.target.value);
  };

  const submitHadler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTitle('');
    setVisible(false);
    setDeadline(new Date());
    store.dispatch(addTask(title, deadline));
  };

  return (
    <>
      {visible ? (
        <TaskAddingForm
          title={title}
          deadline={deadline}
          changeDeadline={setDeadline}
          submitHadler={submitHadler}
          changeTitleHandler={changeTitleHandler}
          changeVisible={setVisible}
        />
      ) : (
        <AddDiv changeVisible={setVisible} />
      )}
    </>
  );
};

export default AddForm;
