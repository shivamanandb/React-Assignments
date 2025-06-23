import React from 'react'
import './UserDetails.css'

const UserDetails = ({name, role, location}) => {
  return (
    <div className='container'>
        <div className='wrapper'>
            <p>Name: <span>{name}</span></p>
            <p>Role: <span>{role}</span></p>
            <p>Location: <span>{location}</span></p>
        </div>
    </div>
  )
}

export default UserDetails
