import React from 'react'
import { Link } from 'react-router-dom'

const Men = () => {
  return (
   <div className='h-[86.3%] w-full flex items-center flex-col justify-center'>
        <h1 className='text-8xl text-white'>Men's Product</h1>

        <Link className='text-4xl text-white mt-8 underline'  to='/product/men/cloths'>Men's Cloth</Link>
    </div>
  )
}

export default Men