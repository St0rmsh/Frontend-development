import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <nav  className='flex justify-between p-8 bg-sky-400'>
        <h1 className='text-3xl font-bold text-white'>Navbar</h1>

        <div className="Links flex gap-8 text-lg font-medium text-white">
            <Link to='/'>Home</Link>
            <Link to="/about">About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/product'>Product's</Link>
        </div>
        
      </nav>
    </>
  )
}

export default Navbar