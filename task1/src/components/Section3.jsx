import React from 'react'

const Section3 = (btnClick) => {
const pics = [
  {
    id: 1,
    title: "Nature View",
    image: "https://picsum.photos/id/1015/600/400"
  },
  {
    id: 2,
    title: "Mountain",
    image: "https://picsum.photos/id/1002/600/400"
  },
  {
    id: 3,
    title: "City Life",
    image: "https://picsum.photos/id/1011/600/400"
  },
  {
    id: 4,
    title: "Beach",
    image: "https://picsum.photos/id/1016/600/400"
  },
  {
    id: 5,
    title: "Forest",
    image: "https://picsum.photos/id/1020/600/400"
  }
];


  return (
    <>
    <section className='w-full min-h-screen flex items-center justify-center'>

        <div className="sec3 mt-30 bg-gray-500 min-h-full w-[95%] rounded-2xl flex justify-between flex-col ">
            <div className="top flex  justify-between p-16">
                <div className="toptext w-[70%]">
                    <h1 className='text-3xl '>Top Destinations</h1>
                </div>
                <div className="topbottom mx-5">
                    <p className='text-lg'>From island escape to cool mountains towns.discover where your next journey will take ypu</p>

                </div>
            </div>
            <div className="center px-25">
                <div className="cards flex justify-center gap-8">
                    <div className="card6 flex flex-col p-5  justify-between">
                         <div className="btn flex justify-end rounded-full ml-auto py-1 px-2   bg-white/10 backdrop-blur-md border border-white/20  text-black shadow-lg hover:bg-white/20 hover:border-white/30 transition">
                            <button className=''>start of $3,200</button>
                        </div>
                        <div className="bottom text-white">
                            <h3 className='text-xl'>El Nido</h3>
                            <h6 className='text-lg'>Beach paradise |<i className="ri-star-fill text-amber-400"></i> 4.0 (1.2K)</h6>
                            <p className='text-sm'><i className="ri-map-pin-fill text-red-500 text-lg"></i> Palawan,Region</p>
                        </div>
                        
                    </div>
                     
                     <div className="card8 flex flex-col p-5  justify-between">
                         <div className="btn flex justify-end rounded-full ml-auto py-1 px-2 capitalize  bg-white/10 backdrop-blur-md border border-white/20  text-black shadow-lg hover:bg-white/20 hover:border-white/30 transition">
                            <button className=''>Start of $4,999</button>
                        </div>
                        <div className="bottom text-white">
                            <h3 className='text-xl'>Baguio City</h3>
                            <h6 className='text-lg'>Mount Gateway |<i className="ri-star-fill  text-amber-400"></i> 4.6 (950)</h6>
                            <p className='text-sm'><i class="ri-map-pin-fill text-red-500 text-lg"></i> Benguet,Region</p>
                        </div>
                        
                    </div>
                     <div className="card9 flex flex-col p-5  justify-between">
                         <div className="btn flex justify-end rounded-full ml-auto py-1 px-2   bg-white/10 backdrop-blur-md border border-white/20  text-black shadow-lg hover:bg-white/20 hover:border-white/30 transition">
                            <button className=''>start of $4,250</button>
                        </div>
                        <div className="bottom text-white">
                            <h3 className='text-xl'>Vigan</h3>
                            <h6 className='text-lg'>Heritage City |<i className="ri-star-fill  text-amber-400"></i> 4.7 (780)</h6>
                            <p className='text-sm'><i class="ri-map-pin-fill text-red-500 text-lg"></i> llocos Sur,Region</p>
                        </div>
                        
                    </div>
                     <div className="card10 flex flex-col p-5  justify-between">
                         <div className="btn flex justify-end rounded-full ml-auto py-1 px-2   bg-white/10 backdrop-blur-md border border-white/20  text-black shadow-lg hover:bg-white/20 hover:border-white/30 transition">
                            <button className=''>start of $5,500</button>
                        </div>
                        <div className="bottom text-white">
                            <h3 className='text-xl'>Siargao</h3>
                            <h6 className='text-lg'>Surf & Chill |<i className="ri-star-fill  text-amber-400"></i> 4.8 (2K)</h6>
                            <p className='text-sm'><i class="ri-map-pin-fill text-red-500 text-lg"></i> Surgao del Norte,Region</p>
                        </div>
                        
                    </div>
                    

                </div>
            </div>
            <div className="bottom flex justify-between p-20">
                <div className="btn border px-4 py-1 rounded-2xl border-none bg-cyan-950">
                    <button className='text-white cursor-pointer' onClick={btnClick}>View more</button>
                </div>
                <div className="icons flex gap-4 ">
                    <div className="arrow-right border rounded-full h-7.5 w-7.5 flex items-center justify-center" onClick={btnClick}><i className="ri-arrow-left-s-line cursor-pointer text-2xl"></i></div>
                    <div className="arrow-left  border rounded-full h-7.5 w-7.5 flex items-center justify-center"onClick={btnClick}><i className="ri-arrow-right-s-line cursor-pointer text-2xl"></i></div>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default Section3