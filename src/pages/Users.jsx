import React from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
  return (
    <div>
      <h2>Users</h2>
      <Link to="/dashboard/users/1">User1</Link>
      <Link to="/dashboard/users/2">User2</Link>
      <Link to="/dashboard/users/3">User3</Link>
    </div>
  )
}

export default Users
