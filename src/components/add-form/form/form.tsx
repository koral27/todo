import React, { FC } from 'react';
import DatePicker from 'react-datepicker';
import CalendarSVG from '../../../images/calendarSVG';
import InboxSVG from '../../../images/inboxSVG';
import { TaskAddingFormProps } from '../../../types';
import 'react-datepicker/dist/react-datepicker.css';

const TaskAddingForm: FC<TaskAddingFormProps> = ({
  title,
  deadline,
  submitHadler,
  changeTitleHandler,
  changeDeadline,
  changeVisible,
}) => {
  interface DatePickerInputProps {
    value: any;
    onClick: any;
  }

  class CustomDatePickerInput extends React.Component<
    DatePickerInputProps,
    {}
  > {
    render() {
      return (
        <button
          type="button"
          className="btn btn-outline-success d-flex align-items-center mr-2"
          onClick={this.props.onClick}
        >
          <CalendarSVG className="mr-1" />
          {this.props.value}
        </button>
      );
    }
  }
  return (
    <form onSubmit={submitHadler}>
      <div className=" add-form mb-2">
        <div className="flex-grow-1 mb-2">
          <input
            type="text"
            value={title}
            className="form-control-plaintext add-form-input"
            placeholder="Что нужно сделать?"
            aria-label="Что нужно сделать?"
            aria-describedby="basic-addon1"
            onChange={changeTitleHandler}
          />
        </div>
        <div className="d-flex">
          <DatePicker
            selected={deadline}
            dateFormat="dd.MM.yyyy"
            onChange={(date: Date) => changeDeadline(date)}
            customInput={
              <CustomDatePickerInput value={deadline} onClick={() => {}} />
            }
          />
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
          type="submit"
          className="btn btn-danger"
          disabled={title ? false : true}
        >
          Добавить задачу
        </button>
        <button
          type="button"
          className="btn btn-link"
          onClick={() => changeVisible(false)}
        >
          Отмена
        </button>
      </div>
    </form>
  );
};

export default TaskAddingForm;
