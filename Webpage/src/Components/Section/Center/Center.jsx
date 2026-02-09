import React from 'react'
import CenterPara from './CenterPara/CenterPara'
import Bottom from '../Bottom/Bottom'
import Secondsec from '../../Second/Secondsec'
const Center = () => {
  return (
    <>
    <div className="center-section">
        <nav>
            <div className="Court">
                <h4>Horizion Courts</h4>
            </div>
            <div className="navcenter">
                <h4>About Us</h4>
                <h4>Services</h4>
                <h4>Events</h4>
                <h4>Contact Us</h4>
                <h4>Something</h4>
            </div>
            <button className='btn px-1' onClick={()=>{return "Hello"}}>Book Now<i class="ri-arrow-right-up-line"></i></button>
        </nav>

        <div className=" center-img">
            <div className="img">
                         <CenterPara/>

            </div>
        </div>
                <Bottom/>
                        <Secondsec/>



    </div>

    
    </>
  )
}

export default Center