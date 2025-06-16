import React from 'react';
import './App.css';
import User from './components/User';

function App() {
  const user1 = {
    name:"John Doe",
    age:30,
    registered:false,
    languages:['JavaScript', 'Python']
  }
  return (
    <div className="App">
      <h2>User Managment</h2>
      <User user={user1} />
    </div>
  );
}

export default App;
