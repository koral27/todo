import React, { FC, useState } from 'react';
import { store } from '../../store';
import { addTask } from '../../actions';
import CalendarSVG from '../../images/calendarSVG';
import InboxSVG from '../../images/inboxSVG';
import './add-form.scss';

const AddForm: FC = () => {
  const [title, setTitle] = useState<string>('');
  const [clicked, setClicked] = useState<boolean>(true);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const submitHadler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTitle('');
    store.dispatch(addTask(title));
  };

  const addDiv = (
    <div className="add-div input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          <img src="/img/arrow-return-right.svg" alt="" />
        </span>
      </div>
      <div className="flex-grow-1">
        <div className="form-control" onClick={() => setClicked(true)}>
          Добавить задачу
        </div>
      </div>
    </div>
  );

  const form = (
    <form onSubmit={submitHadler} className="">
      <div className=" add-form mb-2">
        <div className="flex-grow-1 mb-2">
          <input
            type="text"
            value={title}
            className="form-control-plaintext add-form-input"
            placeholder="Что нужно сделать?"
            aria-label="Что нужно сделать?"
            aria-describedby="basic-addon1"
            onChange={changeHandler}
          />
        </div>
        <div className="d-flex">
          <button
            type="button"
            className="btn btn-outline-success d-flex align-items-center mr-2"
          >
            <CalendarSVG className="mr-1" />
            Сегодня
          </button>
          <button
            type="button"
            className="btn btn-outline-primary d-flex align-items-center"
          >
            <InboxSVG className="mr-1" />
            Входящие
          </button>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => store.dispatch(addTask(title))}
        >
          Добавить задачу
        </button>
        <button
          type="button"
          className="btn btn-link"
          onClick={() => setClicked(false)}
        >
          Отмена
        </button>
      </div>
    </form>
  );

  return <>{clicked ? form : addDiv}</>;
};

export default AddForm;
