export const addTask = (title: string) => {
  return {
    type: 'ADD_TASK',
    payload: title,
  };
};

export const completeTask = (id: number) => {
  return {
    type: 'COMPLETE_TASK',
    payload: id,
  };
};

export const deleteTask = (id: number) => {
  return {
    type: 'DELETE_TASK',
    payload: id,
  };
};
