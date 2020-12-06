export const addTask = (title: string, deadline: Date) => {
  // console.log(deadline.getFullYear());
  return {
    type: 'ADD_TASK',
    payload: {
      title,
      deadline,
    },
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
