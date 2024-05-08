"use client"


import { useSession } from 'next-auth/react'
import React from 'react'
// import Link from 'next/link'

const Header = () => {
  const { data: session } = useSession()

  if (session && session.user) {

    return (
      <>
        <div className='flex justify-center p-3'>
          <img src={session.user?.image || "defaultImage.jpg"} alt="Profile" className="w-40 rounded-full" />
          {/* <p>Your email: {session.user.email}</p> */}
        </div>
        <div className='text-center'>
          <h1 className=''>Welcome, {session.user.name} !</h1>
        </div>
      </>
    )
  } else {

    return (
      <div className='p-3'>
        <p className='text-center'>Please sign in to view your data</p>
      </div>
    )
  }
}

export default Header