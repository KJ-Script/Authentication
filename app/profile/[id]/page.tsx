import React from 'react'

const UserProfile = ({params}: any) => {
  return (
    <div className="w-full text-center">
        <p>Profile number: {params.id}</p>
    </div>
  )
}

export default UserProfile