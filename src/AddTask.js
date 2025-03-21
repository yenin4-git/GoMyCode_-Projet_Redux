import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './actions/taskActions';

const AddTask = () => { // déclaration de la fonction AddTask
  const [description, setDescription] = useState(''); //déclaration de la variable description
  const dispatch = useDispatch(); // déclaration de la variable dispatch

  const handleSubmit = (e) => { // déclaration de la fonction handleSubmit
    e.preventDefault();
    if (description.trim()) {
      dispatch(addTask(description)); // on dispatch la fonction addTask avec le paramètre description
      setDescription('');
    }
  };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ajouter une tâche"
                className="task-input" // Ajoutez une classe pour l'input
            />
            <button type="submit" className="add-button">Ajouter</button>
        </form>
    </div>
);
};

export default AddTask;