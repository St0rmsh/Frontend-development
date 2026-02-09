import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {

const [email, setemail] = useState("")

function prevent(e){
  e.preventDefault()

  setemail(" ")
}


  return (
    <>
    <div className='flex items-center justify-between flex-col gap-6 py-6'>
      <div className='flex flex-col gap-8 bg-gray-200 px-10 py-6 rounded-2xl'>
        <div>
        <h3 className='text-3xl'>Skpify</h3>
      </div>

      <div>
        <h3 className='text-4xl pb-1'>Log in</h3>
        <p className='text-lg'>Continue to SKpify</p>
      </div>

      <div className=' flex flex-col justify-between gap-3'>
        <h3 className='text-xl'>Email</h3>
        <input
        onChange={(e)=>{
           setemail(e.target.value)
        }}
         className='px-3 py-1.5 w-[27vw] border rounded-lg' type="email" name="" id="" value={email} />
        <button  onClick={(e)=>{
          prevent(e)
          console.log(email);
          
          
        }} className='rounded-lg py-2 text-xl bg-gray-700 text-white cursor-pointer active:scale-99 transition-all '>Continue with email</button>
      </div>
      <div className='flex items-center justify-center gap-1'>
        <div className='border-t-2 w-[10vw] '></div>
        <div><h4>or</h4></div>
        <div className='border-t-2 w-[10vw] '></div>
      </div>
        <div className='flex gap-5 '>
        <div className='   w-[8vw] h-[8vh] bg-gray-300 rounded-xl'> 
          <div className="icons cursor-pointer ">

          </div>
        </div>
        <div className='  w-[8vw] h-[8vh] bg-gray-300 rounded-xl'>
          <div className="icons cursor-pointer ">
            
          </div>
        </div>
        <div className='  w-[8vw] h-[8vh] bg-gray-300 rounded-xl'>
          <div className="icons cursor-pointer ">
            
          </div>
        </div>
      </div>

      <div className='flex gap-2'>
        <div><h3>New to Skpify?</h3></div>
          <NavLink   to="/freeTrail">Get started</NavLink>
      </div>

     
      </div>
     
    </div>
    </>
  )
}

export default Login