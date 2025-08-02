import React, { useState } from 'react'

const DataFetch = () => {
  type User = {
    id: Number,
    name: String
  }
  const [user, setUser] = useState<null | User>(null);
  const handleAddUser =() => {
    setUser({id: 1, name: 'John'})
  }
  return (
    <div>
      <button onClick={handleAddUser}>Click</button>
      <p>{user?.name}</p>
    </div>
  )
}

export default DataFetch
