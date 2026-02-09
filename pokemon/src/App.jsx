import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Dynamic from './Pages/Dynamic'
import Error from './Pages/Error'
import Product from './Pages/Product'
import Men from './Pages/Men'
import MenCloths from './Pages/MenCloths'
import Women from './Pages/Women'
import Path from './Pages/Path'
import Redirected from './Pages/redirected'


function App() {


  return (
    <>
    <main className='h-screen w-full bg-[#2a2a2a]'>
     <Navbar/>

     <Routes>

      {/* Normal Routes */}
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />


    {/* Nested Routes */}

      <Route path='/product' element={<Product/>} />
      <Route path='/product/men' element={<Men/>} />
      <Route path='/product/women' element={<Women/>} />
      <Route path='/product/men/cloths' element={<MenCloths/>} />


      {/* Dynamic Routes */}
      <Route path='/path' element={<Path/>} />
      <Route path='/path/:id' element={<Redirected/>} />
      <Route path='/path/:id/dyanamic' element={<Dynamic/>} />




      {/* Error Route */}

            <Route path='*' element={<Error/>} />

     </Routes>

    </main> 
    </>
  )
}

export default App
