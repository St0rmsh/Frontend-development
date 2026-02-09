import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'

function App() {
   function btnClick(){
        alert("Right now This is Just a Demo Website. Booking feature is not available yet.")
    }

  return (
    
    <>
    <main className='w-full h-screen bg-[#222]'>
      <Section1 btnClick={btnClick} />
    </main>
    <main className='w-full h-screen bg-[#222]'>
            <Section2 btnClick={btnClick}/>

    </main>
    <main className='w-full h-screen bg-[#222]'>
      <Section3 btnClick={btnClick}/>
    </main>
     <main className='w-full h-screen bg-[#222]'>
      <Section4 btnClick={btnClick}/>
    </main>
 
    </>
  )
}

export default App
