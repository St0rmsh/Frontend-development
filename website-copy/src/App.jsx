import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { typography } from './Styles/Typography'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import Resources from './pages/Resources'
import Footer from './components/Footer/Footer'

function App() {



  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/resources' element={<Resources/>}/>
    </Routes>
     
    </>
  )
}

export default App
