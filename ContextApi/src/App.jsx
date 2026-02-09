import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import AllCourses from './Pages/AllCourses'
import CourseDetails from './Pages/CourseDetails'
import First from './Pages/First'
import Second from './Pages/Second'
import Error from './Pages/Error'
import Section from './Components/Section/Section'

function App() {
  const [theme, settheme] = useState("Light")

  const newtheme = (newTheme)=>{
    settheme(newTheme)
  }

  return (
    <>
    <main  className='bg-[#2a2a2a] w-full h-screen '>
    <Navbar/>
    <h1 className='text-6xl text-white flex items-center justify-center'>Theme : {theme}</h1>
    <Section theme={newtheme}/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/allcourses" element={<AllCourses/>}/>
    <Route path="/CourseDetails" element={<CourseDetails/>}/>
    <Route path="/allcourses/:id" element={<First/>}/>


        <Route path="/CourseDetails/second" element={<Second/>}/>

        <Route path="*" element={<Error/>}/>



    </Routes>

    </main>

    
      
    </>
  )
}

export default App
