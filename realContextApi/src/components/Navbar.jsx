import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
        <NavLink to="/"  className={({isActive})=>{
           return isActive ? "text-red-500" : "text-white"
        }}>Navbar </NavLink>


        <div className="links text-2xl">
            <NavLink to="/footer" className={({isActive})=>{
            return isActive ? "text-red-500" : "text-white"
        }}>Footer </NavLink>
        </div>
    </nav>
    </>
  )
}

export default Navbar