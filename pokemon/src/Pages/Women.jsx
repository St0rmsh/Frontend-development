import React from 'react'
import { Link } from 'react-router-dom'

const Women = () => {
  return (
      <div className='h-[86.3%] w-full flex flex-col items-center justify-center'>
        <h1 className='text-8xl text-white'>Women's Product</h1>

     <Link className='text-4xl text-white mt-8 underline'  to='/product/women/cloths'>Women's Cloth</Link>

    </div>
  )
}

export default Women