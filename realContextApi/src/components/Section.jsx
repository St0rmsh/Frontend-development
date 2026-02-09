import React, { useContext } from 'react'
import { FetchDataContext } from '../context/UserContext'

const Section = () => {

const {users} = useContext(FetchDataContext)
    
  return (
    <>
   <div className="class flex gap-5 flex-wrap px-10 items-center justify-center group perspective-1000">
     {users.map((data,idx)=>{
    return(
        <div key={idx} className='relavtive  px-3 py-4 bg-amber-500 flex gap-3 flex-col rounded-2xl items-center hover:scale-110 transition-all cursor-pointer duration-350 ease-out shadow-xl transform-gpu group-hover:rotateX-12 group-hover:rotateY-12 '>
            <img className='w-[28%] rounded-full' src={data.avatar} alt="pic" />
            <h1 className='text-xl font-bold '>Name : {data.name}</h1>
            <h1 className='text-lg font-medium  '>Age :{data.age}</h1>
            <h1 className='text-lg font-medium  '>Profession : {data.profession}</h1>
            <h1 className='text-md font-medium px-2'>Skills : {data.skills.join(", ")}</h1>
            <h1 className='text-lg font-medium  '>Email : {data.email}</h1>

        </div>
    )
        
    })}
   </div>
    </>
  )
}

export default Section