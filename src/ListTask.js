import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { filterTasks } from './actions/taskActions';

const ListTask = () => { // déclaration de la fonction ListTask
  const tasks = useSelector((state) => { // déclaration de la variable tasks
    if (state.filter === 'DONE') { // si state.filter est égal à 'DONE'
      return state.tasks.filter((task) => task.isDone); // on retourne les tâches qui sont faites
    } else if (state.filter === 'NOT_DONE') { // sinon si state.filter est égal à 'NOT_DONE'
      return state.tasks.filter((task) => !task.isDone); // on retourne les tâches qui ne sont pas faites
    } else {
      return state.tasks; // sinon on retourne toutes les tâches
    }
  });
  const dispatch = useDispatch(); // déclaration de la variable dispatch

  return (
    <div className='mb-2'>
      <div className='d-flex justify-content-end'>
        <button className="onClick-button" onClick={() => dispatch(filterTasks('DONE'))}>Fait</button>
        <button className="button" onClick={() => dispatch(filterTasks('NOT_DONE'))}>Pas fait</button>
      </div>
      <ul className="list-group">
        {tasks.map((task) => ( // pour chaque tâche dans tasks
          <Task key={task.id} task={task} /> // on retourne le composant Task avec les paramètres key et task
        ))}
      </ul>
    </div>
  );
};

export default ListTask; // export de la fonction ListTask