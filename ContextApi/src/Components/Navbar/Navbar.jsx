import React from 'react'
import { Link, Links, NavLink, useNavigate, useNavigation } from 'react-router-dom'

const Navbar = () => {

  const navigation  = useNavigate()
  return (
    <>
    <nav className='bg-amber-400 p-4 flex justify-between items-center '>
        <h1 className='text-2xl font-bold '>Navbar</h1>

       <div className="nav flex gap-4 text-xl">
         <NavLink  to="/">Home</NavLink>
         <NavLink  to="/about">About</NavLink>
         <NavLink  to="/allcourses">Courses</NavLink>
       </div>

    <button onClick={()=>{
      navigation("/CourseDetails")
    }} className='px-4 py-1 border active:scale-96 cursor-pointer  rounded-2xl text-md uppercase'>Click Me</button>
    </nav>
    </>
  )
}

export default Navbar