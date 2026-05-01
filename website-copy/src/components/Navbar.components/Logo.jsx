import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <>
    <div className="logo ">
      <h1 className='font-mono text-xl md:text-3xl text-gray-300'><NavLink to="/">LOGO</NavLink></h1>
    </div>
    </>
  )
}

export default Logo