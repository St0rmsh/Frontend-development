import React, { useContext } from 'react'
import { Context } from '../context/UserContext';
import { Link } from 'react-router-dom';

const Store = () => {
    const {products,loading} = useContext(Context)
    

    
  return (
    <>
    <div className=' w-full text-center bg-amber-400 flex  gap-2 flex-wrap py-4 justify-center'>
        {products.map((e,indx)=>{
          return(  <Link to={`/store/${e.id}`} key={indx} className='flex flex-col items-center px-4 py-4 cursor-pointer active:scale-98 transition-all duration-200 ease-in-out  gap-2 justify-between bg-black rounded-lg  w-60'>
               <h4 className='text-white px-1 pb-4  pt-2 captalized font-mono'> Category {e.category}</h4>
               <img className='mb-4 w-30' src={e.image} alt={e.title} />
               <h3 className='text-white text-xl font-mono '>Price ${e.price}</h3>
               <h4 className='text-white px-1 text-center font-mono'>{e.title}</h4>

               <h5 className='text-white px-1 text-center font-mono'>{e.rating.rate} Stars  rated by {e.rating.count} Costumers </h5>
            </Link>

          )
            
        })}
        
        
    </div>
    </>
  )
}

export default Store