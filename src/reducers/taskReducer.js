const initialState = {
    tasks: [],
    filter: 'ALL', // 'ALL', 'DONE', 'NOT_DONE'
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id
              ? { ...task, isDone: !task.isDone }
              : task
          ),
        };
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id
              ? { ...task, description: action.payload.description }
              : task
          ),
        };
      case 'FILTER_TASKS':
        return {
          ...state,
          filter: action.payload.filter,
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;