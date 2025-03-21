import React from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container border border-1 border-primary mt-5 h-100 w-50">
      <div className="row">
      <div>
      <h1 className='text-center pt-5 mb-3'
      style={{color: 'violet', fontSize: '50px', fontFamily: 'Arial', fontWeight: 'bold'}}
      >ToDo List Redux</h1>
      <div>
      <AddTask />
      </div>
      <div>
      <ListTask />
      </div>
    </div>
        </div>
    </div>
  );
};

export default App;