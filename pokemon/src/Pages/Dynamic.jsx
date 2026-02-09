import React from 'react'
import { useParams } from 'react-router-dom'

const Dynamic = () => {
    
const params = useParams();
console.log(params);

  return (
      <div className='h-[86.3%] w-full flex items-center justify-center'>
        <h1 className='text-8xl text-white'>{params.id} Not Dynamic</h1>
    </div>
  )
}

export default Dynamic