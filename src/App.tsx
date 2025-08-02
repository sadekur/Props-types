import React from 'react';
import './App.css';
import User from './components/User';
import UserDemo from './components/UserDemo';
import UseStateType from './components/UseStateType';

function App() {
  // const user1 = {
  //   name:"John Doe",
  //   age:30,
  //   registered:false,
  //   languages:['JavaScript', 'Python']
  // };

  const users = [
    {
      id:1,
      name:"John Doe",
      age:30,
      registered:false,
      languages:['JavaScript', 'Python']
    },
    {
      id:2,
      name:"Jane Doe",
      age:25,
      registered:true,
      languages:['JavaScript', 'Python']
    },
    {
      id:3,
      name:"Bob Smith",
      age:20,
      registered:false,
      languages:['JavaScript', 'Python']
    }
  ];
  return (
    <div className="App">
      <h2>User Managment</h2>
      {/* <User user={user1} /> */}
      {/* <UserDemo users={users} /> */}
      <UseStateType />
    </div>
  );
}

export default App;
