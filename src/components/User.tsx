import React from 'react'
type UserProps = {
    name:string,
    age:number,
    registered:boolean,
    languages:string[]
};
const User = ({name, age, registered, languages}: UserProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
      {registered ? <p>Registered</p> : <p>Not Registered</p>}
      {languages.map((key, index) => {
        return <p key={index}>{key}</p>
      })}
    </div>
  )
}

export default User
