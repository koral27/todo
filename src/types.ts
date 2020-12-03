export type TTodo = {
  title: string;
  id: number;
  completed: boolean;
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
  payload: {};
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
