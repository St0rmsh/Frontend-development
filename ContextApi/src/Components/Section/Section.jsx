import React from 'react'
import { useState } from 'react';

const Section = (props) => {
  const [newtheme, setnewtheme] = useState("")
  
  return (
    <>
    <div className="section flex flex-col justify-center items-center   ">
      <form className='flex  flex-col mt-10 gap-3.5' onSubmit={(e)=>{
        e.preventDefault();
        props.theme(newtheme)
        setnewtheme("")
      }} >
        <input className='bg-white px-3 py-2 rounded-xl text-[#111]' onChange={(e)=>{
          setnewtheme(e.target.value);


        }} type="text" placeholder='Enter Theme Color' value={newtheme} />
        <button className='px-2 py-1 hover:scale-102 active:scale-97 cursor-pointer border rounded-2xl text-white text-2xl'>Submit</button>
      </form>
    </div>
    
    </>
  )
}

export default Section