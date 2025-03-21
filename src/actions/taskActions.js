let nextTaskId = 0;

export const addTask = (description) => ({
  type: 'ADD_TASK',
  payload: {
    id: nextTaskId++,
    description,
    isDone: false,
  },
});

export const toggleTask = (id) => ({
  type: 'TOGGLE_TASK',
  payload: { id },
});

export const editTask = (id, description) => ({
  type: 'EDIT_TASK',
  payload: { id, description },
});

export const filterTasks = (filter) => ({
  type: 'FILTER_TASKS',
  payload: { filter },
});