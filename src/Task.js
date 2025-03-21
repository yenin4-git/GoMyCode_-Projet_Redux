import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from './actions/taskActions';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask(task.id, newDescription));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className='container-task'>
      <li>
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={() => dispatch(toggleTask(task.id))}
            className="input"
          />
          {isEditing ? (
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="input"
            />
          ) : (
            <span>{task.description}</span>
          )}
          <button  onClick={handleEdit} className="Button-onClick">{isEditing ? 'Enrégisterer' : 'Modifier'}</button>
          
        </li>
    </div>
  );
};

export default Task;