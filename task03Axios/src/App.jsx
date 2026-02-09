import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  let data = JSON.parse(localStorage.getItem('userData')) || []

  const [UserData, setUserData] = useState(data)

 async function getData(){
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    let fetchedData= response.data;
    localStorage.setItem('userData', JSON.stringify(fetchedData))
  setUserData(fetchedData);
  } catch (error) {
    console.error(`Error while fetching data ${error}`);
    
  }
  
}
  return (
    <>
      <main className=' bg-[#2a2a2a]' >
        <div className=' p-8 flex flex-col items-center justify-baseline '>
       
        <button onClick={getData} className='mb-6  w-fit ' >fetch Data</button>

      </div>
      <div className="second flex flex-wrap gap-8 ">
        {UserData.map((e,idx)=>{
            return(
                <div key={idx} className="main flex flex-wrap flex-row gap-10 ">
              <div className='  bg-emerald-300 px-8 ml-5 py-8 rounded-2xl flex flex-col gap-5 items-center  justify-between'>
                <h1 className='text-2xl font-bold '>Name : {e.name}</h1>
                <h3  className='text-xl font-medium'>Address : {e.address.city}</h3>
                <h4 className='text-xl font-medium'>Email : {e.email}</h4>
                <h4 className='text-xl font-medium'>Username : {e.username}</h4>
                <h5 className='text-xl font-medium'>Website : {e.website}</h5>
                <h5 className='text-xl font-medium'>Company :  {e.company.name}</h5>
                <h5 className='text-xl font-medium'>Phone :  {e.phone}</h5>
              </div>
            </div>
            ) 
        })}
      </div>
      </main>
    </>
  )
}

export default App
