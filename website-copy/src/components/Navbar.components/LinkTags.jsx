import React from 'react'
import { Links, NavLink } from 'react-router-dom'

const LinkTags = () => {
  return (
    <>
    <div className="links flex  gap-2 font-mono md:gap-7 md:text-xl lg:pl-10 text-gray-300">
     <NavLink to="/">Home</NavLink>
     <NavLink to="/about">About</NavLink>
     <NavLink to="/resources">Resources</NavLink>
    </div>
    </>
  )
}

export default LinkTags