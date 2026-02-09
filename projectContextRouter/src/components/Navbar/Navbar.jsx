import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between px-5 py-4'>
        <h2 className='text-3xl'>Navbar</h2>

        <div className="links flex gap-4 font-normal text-lg">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    </nav>
    </>
  )
}

export default Navbar