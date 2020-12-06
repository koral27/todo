import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';

export type TTodo = {
  title: string;
  id: number;
  completed: boolean;
  deadline: Date;
};

export type TTodos = {
  todos: TTodo[];
};

export type TTodoProps = {
  todo: TTodo;
};

export type State = {
  todos: Array<TTodo>;
};

export type Action = {
  type: String;
  payload: {
    title?: string | undefined;
    deadline?: Date | undefined;
  };
};

export type InputProps = {
  src?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  keyPressHandler?: (event: React.KeyboardEvent) => void;
};

export type Svg = {
  className?: string;
};

export type TaskAddingFormProps = {
  title: string;
  deadline: Date;
  submitHadler: (event: FormEvent<HTMLFormElement>) => void;
  changeTitleHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  changeDeadline: Dispatch<SetStateAction<Date>>;
  changeVisible: Dispatch<SetStateAction<boolean>>;
};
