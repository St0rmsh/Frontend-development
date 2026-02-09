import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Store from './Store'

const Home = () => {
    const navigate= useNavigate()
  return (
    <>
    <h1 className='text-5xl text-white font-mono capitalize'> Home Page</h1>
     <button className=' border text-white px-12 cursor-pointer active:scale-98 py-3 rounded-xl mt-6 text-2xl' onClick={()=>{
        navigate("/Store")
     }}>Visit Store</button>
    </>
  )
}

export default Home