import React from 'react'
import { NavLink } from 'react-router-dom'

const AllCourses = () => {
  return (
    <>
    <div className="All flex flex-col justify-center items-center h-[90%] gap-8">
        <h1 className='text-9xl text-white'>ALL Courses</h1>
        <NavLink className="text-2xl text-white font-bold" to="/CourseDetails">Details</NavLink>
    </div>
    </>
  )
}

export default AllCourses