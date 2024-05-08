import React from 'react'
import SigninButton from './SigninButton'

const Navbar = () => {
  return (
    <nav className='bg-[#333] text-white p-5'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <SigninButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar