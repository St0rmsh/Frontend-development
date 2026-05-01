import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="footer flex justify-between py-8 px-3 items-center md:px-6 md:pt-12 lg:pt-18 ">
     <div className="part1">
        <h3 className='font-mono md:text-3xl'>Explore</h3>
     </div>
     <div className="part2 flex gap-2 items-center font-mono md:text-3xl">
        <h4>02K</h4>
        <div className="line">
             <h5 className='border-t-2 w-3 md:w-10 lg:w-20'></h5>
            <h5 className='border w-15 md:w-32 lg:w-90'></h5>
        </div>
        <h4>24K</h4>
     </div>

     <div className="part3 md:text-lg ">
        <div className="icons flex gap-2">
            <div className="icon border p-2 px-3 md:p-2  md:px-3 lg:px-3 rounded-full lg:hover:bg-[#3a3a3a3b] lg:hover:text-xl lg:active:scale-95 lg:hover:border-none lg:transition-all cursor-pointer "><i className="ri-arrow-left-line"></i></div>
            <div className="icon border p-2 px-3 md:p-2 md:px-3 lg:hover:bg-[#3a3a3a3b] lg:hover:text-xl lg:active:scale-95 lg:hover:border-none lg:transition-all rounded-full cursor-pointer lg:px-3 "><i className="ri-arrow-right-line"></i></div>
        </div>
     </div>
    </div>
    </>
  )
}

export default Footer