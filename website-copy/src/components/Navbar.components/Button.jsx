import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="btn border cursor-pointer px-2  rounded-lg font-mono text-lg text-gray-300 md:px-4 md:text-xl lg:px-5 lg:py-2 active:scale-99">
      <button onClick={()=>navigate("/Contact")} className='md:cursor-pointer lg:cursor-pointer'>Contact</button>
    </div>
    </>
  )
}

export default Button