import React from 'react'
import reactLogo from './assets/react.svg'
import {motion} from "motion/react"

const Newreturn = () => {
  return (
    <>
       {/* <div className="card">
       <div className="top">
        <img src={reactLogo} alt="img" />
        <p>Save <i className="ri-bookmark-line Bookmark"></i></p>
       </div>
       <div className="center">
        <h5>Dev <span>Something</span></h5>

        <h3>UI/UX Developer</h3>
       </div>

       <div className="bottom">
        <div className="contact"><h6>Contact</h6></div>
        <div className="mail"><h6>Mail</h6></div>
       </div>
      
      </div> */}
      <motion.div className="box"
      whileHover={{
        backgroundColor:"lime"
      }}
      drag
     animate={{
      x:[0,880,840,0,0],
      y:[0,0,340,350,0],
      rotate:[0,360,-360,360,0],
      scale:[0.8,1.2,0.2,1],
      
     }}
     transition={{
      duration:3,
      delay:1,
      repeat:Infinity,
      ease:"anticipate"
     }}
      ></motion.div>
    </>
  )
}

export default Newreturn