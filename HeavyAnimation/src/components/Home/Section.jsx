import React from 'react'
import GameBoy from './GameBoy'
import Maze3d from './Maze3d'
import Laptop3d from './Laptop3d'

const Section = () => {
  return (
    <>
    <div className=' h-full grid grid-cols-3 gap-5 place-content-center place-items-center'>
          <GameBoy/>
          <Maze3d/>
          <Laptop3d/>
    </div>
    </>
  )
}

export default Section