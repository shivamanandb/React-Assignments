import React from 'react'
import UserDetails from './UserDetails'

const UserCard = (props) => {

    const {name, role, location} = props

  return (
    <div>
        <UserDetails name={name} role={role} location={location}/>
    </div>
  )
}

export default UserCard
