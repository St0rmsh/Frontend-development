import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

const [data, setdata] = useState(1)

let storage = localStorage.getItem('pokemondata') || "";

const [pokemon, setpokemon] = useState(storage)

const [nums, setnums] = useState(1)


const [first, setfirst] = useState("")
const [second, setsecond] = useState("")

const [ability, setability] = useState("")
const [hiddenability, sethiddenability] = useState("")

async function fetchPokemon(){
 try {
   let response = await axios.get(` https://pokeapi.co/api/v2/pokemon/${nums}/`)
   let name = response.data.name;
   let type1 = response.data?.types[0]?.type.name
   let type2 = response.data?.types[1]?.type.name
   let ability = response.data.abilities[0].ability.name
   let id = response.data.id                      
   let hidden =  response.data?.abilities[1].ability.name

   setdata(id);
   console.log(ability);
   
   
   
   localStorage.setItem('pokemondata',name)
   sethiddenability(hidden)
  setpokemon(name);
  setfirst(type1)
  setsecond(type2)
  setability(ability);
  console.log(response);
  console.log(type1,type2);
  
  
 } catch (error) {
  console.error(`Error While fetching ${error}`);
  alert(`Pokemon not found for PokeDex number ${nums}`);
 }
  
}

useEffect(()=>{
    fetchPokemon()
},[nums])


  return (
    <>
 <div className="poke flex flex-col justify-between items-center ">
     <input onChange={(e)=>{
          setnums(Number(e.target.value));
          
    }} type="text" placeholder='Enter number'  className='text-black bg-white px-6 py-2 rounded-2xl mb-5'/>
    <button onClick={()=>{
      setnums(nums + 1)
    }}>Click Me to add 1 </button>
    <img className='h-50 ' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data}.png`} />

    <h2 className='text-2xl mt-10'>Name : {pokemon}  <br /> <span>PokeDex number :  {nums}</span></h2>
    <h3 className='text-xl mt-2 '> Type : {first} {second} </h3>
    <h4 className='text-lg mt-4'> Ability : {ability}</h4>
    <h4 className='text-lg mt-2'> Hidden Ability : {hiddenability}</h4>
 </div>
    </>
  )
}

export default App
