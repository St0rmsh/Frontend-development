import React from 'react'
import { useParams } from 'react-router-dom';

const First = () => {

    const params = useParams();
    
  return (
    <div>
        <h1 className='flex justify-center items-center text-8xl text-white '>{params.id} Course</h1>
    </div>
  )
}

export default First