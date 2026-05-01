import React from 'react'
import { createContext } from 'react'


export const Context = createContext()

const UserContext = ({children}) => {
  return (
    <>
    <Context.Provider>
        {children}
    </Context.Provider>
    </>
  )
}

export default UserContext