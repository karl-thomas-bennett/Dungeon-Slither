import React from 'react'
import { useSelector } from 'react-redux'

import TileDesign from './TileDesign'

const BoardDesign = (props) => {
  const board = useSelector(store => store.levelMaker)

  return (
    <>
      <div className='board' style ={{ gridTemplateColumns: `repeat(20, 1fr)` }}>
        {board.map(tile => 
          <TileDesign key={tile.coord} id={tile.coord} content={tile.content} />
        )}
      </div>
      
    </>
  )
}

export default BoardDesign
