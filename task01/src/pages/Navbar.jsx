import React from 'react'
import NavLogo from '../components/Navbar/NavLogo'
import Name from '../components/Navbar/Name'
import Menu from '../components/Navbar/Menu'

const Navbar = () => {
  return (
    <>
     <div className='py-12 px-20 flex justify-between'>
      <NavLogo/>
      <Name/>
      <Menu/>
     </div>
    </>
  )
}

export default Navbar