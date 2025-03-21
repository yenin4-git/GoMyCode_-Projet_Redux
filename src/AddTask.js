import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './actions/taskActions';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      dispatch(addTask(description));
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