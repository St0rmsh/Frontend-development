import React from 'react'

const Section4 = ({btnClick}) => {
  return (
    <>
    <section className='w-full h-screen px-30 py-30  flex justify-center gap-15'>
        <div className='flex justify-between mt-30 gap-10'>
            <div className="left  h-100 w-120 bg-sky-950 rounded-2xl flex justify-between flex-col p-10">
            <div className="up text-white">
                <h1 className='text-3xl mb-2'>Tour Packages</h1>

                <h4 className='text-lg'>Affordable,customizable,and unforgettable adventures.</h4>
            </div>
            <div className="down  w-fit px-4 py-1 rounded-2xl bg-gray-600">
                <button className='text-white cursor-pointer' onClick={btnClick}>Browser all packages</button>
            </div>
        </div>
        <div className="right  flex justify-between gap-6 ">
            <div className="img2 card h-100 w-80 rounded-2xl flex flex-col justify-between px-10 py-8">
                <div className="up text-2xl ">
                    <div className="icons">
                        <h3 className='text-white'><i class="ri-ship-2-fill"></i></h3>
                    </div>
                    <h2 className='text-white'>Island Hopper Adventure</h2>
                </div>

                <div className="down">
                    <p className='text-sm text-white'>Hop from beach to beach in palawan with boat tours,guided snorkeling,and a sunset cruise.</p>
                </div>
                
            </div>
             <div className="img1  card h-100 w-80  rounded-2xl flex flex-col justify-between px-10 py-8">
                <div className="up text-xl pr-8 ">
                    <div className="icons">
                        <h3 className='text-white '><i className="ri-run-line text-2xl"></i></h3>
                    </div>
                    <h2 className='text-white'>Northern Highland Escape</h2>
                </div>

                <div className="down">
                    <p className='text-sm text-white'>Exprecinece the cool breeze of Baguio and Sagada with scenic views,food trips,and local art.</p>
                </div>
                
            </div>
            
        </div>
        </div>
    </section>
    </>
  )
}

export default Section4