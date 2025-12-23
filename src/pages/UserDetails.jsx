import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
  const {id}=useParams();
  return (
    <div>
      <h2>UserDetail</h2>
      <p>User is:{id}</p>
    </div>
  )
}

export default UserDetails
