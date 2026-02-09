import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Section = () => {


  return (
    <>
    <div >
      <div className='flex gap-59 justify-center px-20  text-[9vw]'>
        <div>
          <h1>I</h1>
        </div>
        <div className='flex gap-45'>
          <h1>Lape</h1>

        
          <h1>INDIA</h1>
        </div>
      </div>

      <div className='px-20 py-4 flex gap-[26vw] h-[15vw] '>
        <div className=' flex flex-col uppercase '>
          <h3> <b>Fully 3D</b> and ready <br /> to redfine Digital <br />
          fashion</h3>
        </div>
          <div className='uppercase'>
          <h3>Discover<br /> <b>8192 unique</b> <br />
          beautiful hapes</h3>
        </div>

        <div className='flex items-end justify-start'>
          <h3><b>DAv902</b></h3>
        </div>

      </div>
    </div>
    </>
  )
}

export default Section