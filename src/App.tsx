import React from 'react';
import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <h2>User Managment</h2>
      <User
        name="John Doe"
        age={30}
        registered={false}
        languages={['JavaScript', 'Python']}
      />
    </div>
  );
}

export default App;
