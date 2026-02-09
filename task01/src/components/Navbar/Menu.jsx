import React from 'react'

const Menu = () => {
  return (
    <>
    <div className='flex items-center gap-6'>
        <div className='border w-fit px-5 py-1 flex items-center rounded-full'>
            <h4 className='text-sm uppercase text-black px-2 py-1'>view Marketplace 
                <i class="ri-pause-line"></i>
            </h4>
        </div>


        <div>
            <div>
             <div className="icon border px-3 py-2 rounded-full">
                <i className="ri-menu-line text-xl"></i>
             </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Menu