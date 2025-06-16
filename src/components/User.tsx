import React from 'react'

const User = ({name, age}: {name: string, age: number}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  )
}

export default User
