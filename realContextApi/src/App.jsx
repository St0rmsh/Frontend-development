import { useState } from 'react'
import './App.css'
import Section from './components/Section'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from "./components/Footer"


function App() {

  return (
    <>
  <main className='bg-[#2a2a2a] flex flex-col items-center gap-10 px-4'>
    <Navbar/>
      <h1 className='text-5xl text-white mt-10 uppercase'>Hello</h1>

    <Section/>
  </main>
  <Routes>
    <Route path='/' element={<Navbar/>}/>
    <Route path='/footer' element={<Footer/>}/>
  </Routes>
   
    </>
  )
}

export default App
