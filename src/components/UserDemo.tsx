import React from 'react'

interface UserProps {
    users: {
    id: number;
    name: string;
    age: number;
    registered: boolean;
    languages: string[];
  }[];
}

const UserDemo = ({users}: UserProps) => {
    console.log(users);
  return (
    <div>
        <>
        {users.map(( user, index) => (
            <>
                <h2>{ index + 1}. { user.name}</h2>
                <p>{user.age}</p>
                {user.registered ? <p>Registered</p> : <p>Not Registered</p>}
                {user.languages.map((key, index) => {
                    return <p key={index}>{key}</p>
                })}
            </>
        ))}
      </>
    </div>
  )
}

export default UserDemo
