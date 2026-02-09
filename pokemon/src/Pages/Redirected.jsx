import React from 'react'
import { useParams } from 'react-router-dom'

const Redirected = () => {

    const params = useParams();

    console.log(params);
    
  return (
     <div className='h-[86.3%] w-full flex items-center justify-center'>
        <h1 className='text-8xl text-white'>{params.id} Page</h1>
    </div>
  )
}

export default Redirected
