import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Store from './Pages/Store'
import Details from './Pages/Details'
import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <div className='h-screen'>
      <Navbar/>


    <Routes>
      <Route path='/' element={<Section/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/store/:id' element={<Details/>}/>
    </Routes>
    <Footer/>

    </div>

    </>
  )
}

export default App
