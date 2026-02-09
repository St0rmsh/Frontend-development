import React from 'react'
import { Link , Outlet} from 'react-router-dom'

const Product = () => {
  return (
    <div className='h-[86.3%] w-full  flex items-center justify-center flex-col'>
        <h1 className='text-8xl text-white'>Product's Page</h1>

         <Link className='text-4xl text-white mt-8 underline' to='men'>Men's</Link>
         <Link className='text-4xl text-white mt-8 underline'  to='women'>Women's</Link>
     
    </div>
  )
}

export default Product