import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const FreeTrail = () => {

  const [email, setemail] = useState('')

  function prevent(e){
    e.preventDefault()
    setemail("")
  }


  return (
    <>
    <div className='flex items-center justify-between flex-col gap-6 py-6'>
    <div className='flex flex-col gap-8 bg-gray-200 px-10 py-6 rounded-2xl'>
        <div>
        <h2 className='text-2xl pb-1'>Start your free trail</h2>
        <p className='text-sm'>Get 3 days free, then 3 month for $3/month</p>
      </div>

      <div>
        <div className='flex flex-col gap-1.5'>
          <h3 className='text-xl'>Email</h3>
          <input 
           onChange={(e)=>{
            setemail(e.target.value)
          }}
           value={email} className='h-[5vh] w-[27vw] rounded-lg border px-3 py-1' type="email" />
          <button
         


          onClick={(e)=>{
              prevent(e)

              console.log(email);
              
          }}
          
          className=' active:scale-99  cursor-pointer py-1.5 text-lg rounded-lg text-white bg-[#3a3a3a] transition-all'>Continue with email</button>
        </div>
      </div>
      <div className='flex items-center gap-1 justify-center'>
        <div className='border-t-2 w-[10vw] '></div>
        <div><h4>or</h4></div>
        <div className='border-t-2 w-[10vw] '></div>
      </div>

      <div className='flex flex-col gap-2'>
        <div className=' flex justify-center py-2.5 rounded-lg active:scale-99 cursor-pointer bg-[#d7d2d2] text-lg'>
          <div className="icon">
            <h3>Sign up with Google</h3>
          </div>
        </div>
          <div className=' flex justify-center py-2.5 rounded-lg active:scale-99 cursor-pointer  bg-[#d7d2d2]  text-lg'>
          <div className="icon">
            <h3>Sign up with Apple</h3>
          </div>
        </div>
          <div className=' flex justify-center py-2.5 rounded-lg active:scale-99 cursor-pointer  bg-[#d7d2d2]  text-lg'>
          <div className="icon">
            <h3>Sign up with Facebook</h3>
          </div>
        </div>
      </div>

      <div className='flex gap-2 justify-center'>
        <div>
          <h3>Already have a Skpify account?</h3>
        </div>
        <div>
          <NavLink to="/login">Log in</NavLink>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default FreeTrail