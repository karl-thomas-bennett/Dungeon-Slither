import React from 'react'

import { blankSlate } from '../prototype-data'

import TileDesign from './TileDesign'

const BoardDesign = (props) => {
  return (
    <div className='board' style ={{ gridTemplateColumns: `repeat(20, 1fr)` }}>
      {blankSlate(20).map(tile => 
        <TileDesign key={tile.coord} id={tile.coord} content={tile.content} />
      )}
    </div>
  )
}

export default BoardDesign
