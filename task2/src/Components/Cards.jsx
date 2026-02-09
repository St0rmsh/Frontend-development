import React from 'react'

const Cards = ({elem,idx,deleteHandler}) => {  
  return (
    <>
    <div className="cards flex flex-col py-10 items-center bg-red-600  mt-15 rounded-2xl w-76  ">
       <img className='h-20 w-20 rounded-full object-center object-cover' src={elem.profile} alt="" />
       <h2 className='mt-5 font-bold text-2xl mb-3'>{elem.name}</h2>
       <h4 className='font-medium text-xl mb-2'>{elem.role}</h4>
       <h5 className='font-light text-xl mb-5'>{elem.desc}</h5>
       <button onClick={()=>{
        deleteHandler(idx)
       }} className='border-none active:scale-96 cursor-pointer px-8 py-2 rounded-lg bg-[#222] text-xl text-white'>Remove</button>
    </div>
    
    </>
  )
}

export default Cards