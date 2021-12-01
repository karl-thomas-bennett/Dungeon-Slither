import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Tile from './Tile'

function Board (props) {
  const boardSize = 10
  const tiles = []
  for (let i = 1; i <= boardSize; i++) {
    for (let j = 1; j <= boardSize; j++) {
      tiles.push(i + ', ' + j)
    }
  }

  return (
    <div className = "board" style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}>
      {tiles.map(item => <Tile key={item} id={item} />)}
    </div>
  )
}

export default Board
