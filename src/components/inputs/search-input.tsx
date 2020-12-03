import React, { FC } from 'react';
import { InputProps } from '../../types';

const SearchInput: FC<InputProps> = ({
  src,
  placeholder,
  onChange,
  keyPressHandler,
}) => {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          <img src={src} alt="" />
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        aria-label={placeholder}
        aria-describedby="basic-addon1"
        onChange={onChange}
        onKeyPress={keyPressHandler}
      />
    </div>
  );
};

export default SearchInput;
