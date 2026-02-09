import React from 'react'

const Section2 = (btnClick) => {
  return (
    <>
    <section className='w-full h-screen'>
        <div className="cards w-full h-screen px-20 py-26 flex justify-between gap-50">
            <div className="card1 h-142  text-white flex flex-col justify-between gap-12">
                <div className="head  h-[60%] flex flex-col gap-1 "><h1 className='text-3xl my-4 '>
                    Why Thousands of Travelers Choose WANDERS.ph for Their Philippine Adventure</h1>
                    <p className='text-lg my-6'>From pristine beaches to culture hotspots, we make exploring the Philippines easier,safer and more exciting with expert-crafted itineraries and round-the-clock support.</p>
                    <div className="icons flex gap-5 text-3xl">
                        <div className="insta">
                            <a href="https://www.Instagram.com"><i className="ri-instagram-line"></i></a>
                        </div>
                        <div className="twitter">
                            <a href="https:www.twitter.com"><i className="ri-twitter-line"></i></a>
                        </div>
                        <div className="facebook">
                            <a href="https://www.facebook.com"><i className="ri-facebook-line"></i></a>
                        </div>
                        </div>
                    </div>
                    <div className="bottom flex gap-30 text-center mx-2">
                        <div className="card  w-fit">
                            <i class="ri-emotion-happy-fill text-3xl px-18"></i>
                            <h3 className='text-xl m-2'>12K</h3>
                            <h6 className='text-sm'>Happy and Satisified Travelers</h6>
                        </div>
                         <div className="card w-fit ">
                            <i class="ri-verified-badge-fill text-3xl px-18"></i>
                            <h3 className='text-xl m-2'>10yrs</h3>
                            <h6 className='text-sm'>Proven Travel Industry Experience</h6>
                        </div>
                         <div className="card w-fit">
                            <i className="ri-map-pin-fill text-3xl px-18"></i>
                            <h3 className='text-xl m-2'>50+</h3>
                            <h6 className='text-sm'>Phillippine Destinations Covered</h6>
                        </div>
                    </div>
            </div>
            <div className="card2 text-white flex flex-col gap-5">
                <div className="card border flex flex-row rounded-2xl bg-cyan-800 border-none items-center justify-center">
                    <img src="https://images.pexels.com/photos/18478307/pexels-photo-18478307.jpeg"  alt="" className=' w-38 h-45 px-2 py-2 rounded-2xl' />
                    <div className="para flex  flex-col gap-9 p-2">
                        <h3>Local Experties</h3>
                        <p>Our Philipino travel experts craft unique experiences with insider knowledge you won't find in typical tours.</p>
                    </div>
                </div>
                <div className="card border flex flex-row rounded-2xl bg-cyan-800 border-none items-center justify-center">
                    <img src="https://images.pexels.com/photos/33689814/pexels-photo-33689814.jpeg"  alt="" className='w-38 h-45 px-2 py-2 rounded-2xl' />
                    <div className="para flex  flex-col gap-9 p-2">
                        <h3>All-in-One Booking</h3>
                        <p>Book everything in one place-easy,fast hassle-free.whether for quick getaways pr planned vacations.</p>
                    </div>
                </div>
                <div className="card border flex flex-row items-center justify-center rounded-2xl bg-cyan-800 border-none">
                    <img src="https://images.pexels.com/photos/33944537/pexels-photo-33944537.jpeg"  alt="" className=' w-38 h-45 px-2 py-2 rounded-2xl' />
                    <div className="para flex  flex-col gap-9 p-2">
                        <h3>24/7 Support</h3>
                        <p>We're here anytime ,anywhere.Get real-time help anytime you need it before during or after your trip.</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default Section2