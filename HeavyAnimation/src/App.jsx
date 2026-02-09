import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Navbar/Login'
import FreeTrail from './components/Navbar/FreeTrail'

function App() {

  return (
    <>
     <div className='h-screen overflow-hidden'>
      <Navbar/>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/freeTrail' element={<FreeTrail/>} />
     </Routes>
     </div>
    </>
  )
}

export default App
