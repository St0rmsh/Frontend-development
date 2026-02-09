import React from 'react'

const Section1 = ({btnClick}) => {
 
   
  return (
    <>
    <nav >
        <div className="logodets flex flex-row justify-between px-4 py-4 flex-nowrap">
            <div className="logo text-[#fafafa]  text-2xl "><h3>Wander</h3></div>
            <div className="options flex gap-6 text-[#fafafa] text-m">
                <a href="https://www.google.com"><h4>Home</h4></a>
                <a href="https://www.facebook.com"><h4>Destinations</h4></a>
                <a href="https://www.Instagram.com"><h4>Packages</h4></a>
                <a href="https://www.Reddit.com"><h4>Blog</h4></a>
                <a href="https://www.telegram.com"><h4>About Us</h4></a>
            </div>
            <div className="buttons flex gap-8">
            <div className="searchbar w-fit">
                <input type="text"  placeholder='Search for a place, city, or destination' className=' pl-5 pr-4 text-sm text-black border-gray-200 outline-none focus:ring-2 transition bg-[#fafafa] w-100 p-1 rounded-2xl py-1 border-0'/> 
          
            </div>
            <div className="btn w-fit  px-3 py-1 rounded-2xl border border-white hover:bg-white/20">
                <button className='cursor-pointer text-[#fafafa] ' onClick={btnClick} onMouseMove={()=>{}}>Book now</button>
            </div>
        </div>
        </div>
        
    </nav>
    <section className='w-full h-[91%] flex items-center justify-center' >
         <div className="bgimage w-[99%] h-full  rounded-xl">
            <div className="texts  w-[99%] h-full flex items-center justify-center flex-col text-center">
                <h1 className='text-[180px] text-[#222]  '>WANDERS <sub className='text-[40px] text-[#222] '>PH</sub></h1>
                <p className='px-80 text-[#fafafa] text-[20px]'>Discover breadthtaking destinations across the Philippines with curated tours, local insights and hassle-free planning all in one platform.</p>
                <div className="button py-5 text-[#fafafa] flex gap-8 ">
                <button className=' px-3 py-1 cursor-pointer rounded-2xl bg-white text-black hover:bg-black hover:text-white' onClick={btnClick}>Plan Your Trip</button>
                <button className='cursor-pointer border px-3 py-1 rounded-2xl bg-transparent hover:bg-white/20' onClick={btnClick} >Explore Destination</button>
            </div>
            </div>
            
         </div>
    </section>
    </>
  )
}

export default Section1