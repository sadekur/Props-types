import React from 'react'
type UserProps = {
    user: {
    name: string;
    age: number;
    registered: boolean;
    languages: string[];
}
};
const User = ({user}: UserProps) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.age}</p>
      {user.registered ? <p>Registered</p> : <p>Not Registered</p>}
      {user.languages.map((key, index) => {
        return <p key={index}>{key}</p>
      })}
    </div>
  )
}

export default User
