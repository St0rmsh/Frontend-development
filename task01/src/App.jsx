import { useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Scene from './components/Scene/Scene'
import { Canvas } from '@react-three/fiber'


function App() {

  return (
    <>
<div className='h-screen w-full'>
      {/* <Navbar/>
      <Home/> */}
      <Canvas>
        <Scene />
      </Canvas>

      

     

    
</div>
      
    </>
  )
}

export default App
