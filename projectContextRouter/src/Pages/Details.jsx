import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../context/UserContext';

const Details = () => {

    const {products} = useContext(Context)
    

    const {id} = useParams()
   let fetchedData = products.find((elem)=> id == elem.id)    

   
  return (
    <>
    <div className='flex flex-col items-center justify-between gap-2 px-10 text-center mb-2'>
        <h2 className='text-3xl uppercase font-bold '>{fetchedData.category}</h2>
        <img className='w-[25%]' src={fetchedData.image} alt={fetchedData.title} />
        <h2 className='text-2xl font-mono pt-2'>Price : ${fetchedData.price}</h2>
        <h2 className='text-2xl font-mono '>{fetchedData.title}</h2>
        <h2 className='text-lg capitalize font-mono'>{fetchedData.description}</h2>
        <h3 className='font-bold text-2xl'>Rating {fetchedData.rating.rate} stars from 5 Stars Rated by {fetchedData.rating.count} Costumers </h3>
    </div>

    </>
  )
}

export default Details