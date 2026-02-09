import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between bg-black text-white px-30 py-10 items-center'>
        <div className='flex  justify-between items-center gap-12'>
            <NavLink to="/" className='text-4xl'>SK47</NavLink>
            <h4 className='text-2xl uppercase '>Sujit Kumar</h4>
        </div>

        <div className='flex justify-between items-center gap-5 text-lg '>
            <div>
                <NavLink to="/login" >Log in</NavLink>
            </div>
            <div className='cursor-pointer px-3 py-1 rounded-full text-black bg-white hover:bg-black hover:text-white hover:border-black transition-all'>
                <NavLink to="/freeTrail">Start free trail</NavLink>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar