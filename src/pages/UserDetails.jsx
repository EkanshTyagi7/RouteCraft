import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
  const {id}=useParams();
  const navi=useNavigate();
  return (
    <div>
      <h2>UserDetail</h2>
      <p>User is:{id}</p>
      <button onClick={()=>navi(-1)}>Back</button>
    </div>
  )
}

export default UserDetails
