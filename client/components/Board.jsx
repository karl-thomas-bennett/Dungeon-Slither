import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import Tile from './Tile'

function Board (props) {
  const boardSize = 10
  const tiles = []
  for (let i = 1; i <= boardSize; i++) {
    for (let j = 1; j <= boardSize; j++) {
      tiles.push(i + ', ' + j)
    }
  }
  const [keypress, setKeypress] = useState('')

  return (
    <div className = "board" style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}>
      <KeyboardEventHandler handleKeys={['alphabetic']} onKeyEvent={(key, e) => { console.log(keypress); setKeypress(key) }} />
      {tiles.map(item => <Tile key={item} id={item} />)}
    </div>
  )
}

export default Board
