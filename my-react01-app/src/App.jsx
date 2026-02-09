import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Newreturn from './Newreturn'

function App() {
let Stu = [
  {
    fullName: "S.S",
    Name: "S",
    age: 21
  },
   {
    fullName: "S.S",
    Name: "S",
    age: 18
  },
   {
    fullName: "S.S",
    Name: "S",
    age: 9
  }
]  
 

function istrue(){
  Stu.map((elem)=>{
    if (elem.age < 18 ) {
    return elem.age + 5

    }
  })
}

  return (
    <>
    <div className="cards">
     <div className="cards1">
      {Stu.map((elem)=>{
        
        return <h1>the Element {elem.fullName} and age is : {elem.age} {elem.age >= 18 ? "true":"false"} and name is : {elem.Name}</h1>
        
      })}
      <button onClick={istrue}>Click Me</button>
     </div>
    {/* <Newreturn/> */}
  
    </div>
   
    </>
  )
}

export default App
