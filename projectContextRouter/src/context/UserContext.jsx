import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

 export const Context = createContext()

const UserContext = ({children}) => {
    

    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(false)

 const   getData =  async ()=>{
        try {
         setloading(true)

         const res = await axios.get("https://fakestoreapi.com/products/")

        setproducts(res.data);
            
        } catch (error) {
            console.error("Error occured due to ", error);
            
        } finally{
            setloading(false)
        }
        
    }

    useEffect(()=>{
     getData()
    },[])
  return (
    <>
    <Context.Provider value={{products,loading}}>
        {children}
    </Context.Provider>
      
    </>
  )
}

export default UserContext