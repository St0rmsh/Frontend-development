import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards'

function App() {

 

const [name, setname] = useState('')
const [profile, setprofile] = useState('')
const [role, setrole] = useState('')
const [desc, setdesc] = useState('')

 let storage = JSON.parse(localStorage.getItem('all-Users'))  || [];
 
  const [Users, setUsers] = useState(storage)

const formHandler = (e)=>{
  e.preventDefault()
  
  const old = [...Users]
  old.push({name,profile,desc,role})
  setUsers(old)
  localStorage.setItem('all-Users', JSON.stringify(old))
   
  setname('')
  setdesc('')
  setprofile('')
  setrole('')
}

const deleteHandler = (idx)=>{
    const copy = [...Users]
  const confi = confirm("Are you sure you want to delete this user?")
  if (confi) {
     copy.splice(idx,1)
     setUsers(copy)
     localStorage.setItem('all-Users', JSON.stringify(copy))
  }else{
      setUsers(copy)
      localStorage.setItem('all-Users', JSON.stringify(copy))
}
  }




  return (
    <>
     <main className='w-full h-screen p-6 bg-[#242424]'>
      <div className="form ">
        <form onSubmit={(e)=>{
           formHandler(e)
        }} className=' flex gap-5 justify-center flex-wrap'>
          <input  value={name} onChange={(e)=>{
             setname(e.target.value)
          }}
          className='bg-white w-[45%] px-3 py-2 rounded-lg' type="text" placeholder='Enter Name' />
          
          <input value={profile}  onChange={(e)=>{
             setprofile(e.target.value)
          }}
          className='bg-white w-[45%] px-3 py-2 rounded-lg' type="text" placeholder='Enter Profile pic' />
          
          <input value={role} onChange={(e)=>{
             setrole(e.target.value)
          }}
          className='bg-white w-[45%] px-3 py-2 rounded-lg' type="text" placeholder='Enter Role' />
          
          <input value={desc} 
          onChange={(e)=>{
             setdesc(e.target.value)
          }}
           className='bg-white w-[45%] px-3 py-2 rounded-lg' type="text" placeholder='Enter Description' />
          
          <button className='w-[60%] rounded-md cursor-pointer mt-5 py-2 text-2xl font-bold bg-[#555]'>Submit</button>
        </form>
        
      </div>

   <div className="cards flex flex-row gap-6 flex-wrap">
     {Users.map((elem,idx)=>{
      
     return <Cards elem={elem} idx={idx} deleteHandler={deleteHandler}/>
     })}
   </div>
              
             
     </main>
    </>
  )
}

export default App
