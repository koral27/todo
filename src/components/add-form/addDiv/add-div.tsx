import React, { Dispatch, FC, SetStateAction } from 'react';

type AddDivProps = {
  changeVisible: Dispatch<SetStateAction<boolean>>;
};

const AddDiv: FC<AddDivProps> = ({ changeVisible }) => {
  return (
    <div className="add-div input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          <img src="/img/arrow-return-right.svg" alt="" />
        </span>
      </div>
      <div className="flex-grow-1">
        <div className="form-control" onClick={() => changeVisible(true)}>
          Добавить задачу
        </div>
      </div>
    </div>
  );
};

export default AddDiv;
