import React from 'react'

import { prototypeLevel } from '../prototype-data'

import Tile from './Tile'

const BoardPrototype = (props) => {
  return (
    <div className='board' style ={{ gridTemplateColumns: `repeat(20, 1fr)` }}>
      {prototypeLevel.map(tile => 
        <Tile key={tile.coord} id={DataTransferItemList.coord} content={tile.content} />
      )}
    </div>
  )
}

export default BoardPrototype
