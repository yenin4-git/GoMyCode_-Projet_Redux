import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from './actions/taskActions';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Task = ({ task }) => { // déclaration de la fonction Task
  const [isEditing, setIsEditing] = useState(false); // déclaration de la variable isEditing
  const [newDescription, setNewDescription] = useState(task.description); // déclaration de la variable newDescription
  const dispatch = useDispatch(); // déclaration de la variable dispatch

  const handleEdit = () => { // déclaration de la fonction handleEdit
    if (isEditing) { // si isEditing est vrai
      dispatch(editTask(task.id, newDescription)); // on dispatch la fonction editTask avec les paramètres task.id et newDescription
    }
    setIsEditing(!isEditing); // on change la valeur de isEditing
  };

  return (
    <div className='container-task '>
      <li>
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={() => dispatch(toggleTask(task.id))} // on dispatch la fonction toggleTask avec le paramètre task.id
            className="input"
          />
          {isEditing ? (
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)} // on change la valeur de newDescription
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