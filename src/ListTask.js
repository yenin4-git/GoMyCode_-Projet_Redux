import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { filterTasks } from './actions/taskActions';

const ListTask = () => {
  const tasks = useSelector((state) => {
    if (state.filter === 'DONE') {
      return state.tasks.filter((task) => task.isDone);
    } else if (state.filter === 'NOT_DONE') {
      return state.tasks.filter((task) => !task.isDone);
    } else {
      return state.tasks;
    }
  });
  const dispatch = useDispatch();

  return (
    <div className='mb-2'>
      <div className='d-flex justify-content-end'>
        <button className="onClick-button" onClick={() => dispatch(filterTasks('DONE'))}>Fait</button>
        <button className="button" onClick={() => dispatch(filterTasks('NOT_DONE'))}>Pas fait</button>
      </div>
      <ul className="list-group">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;