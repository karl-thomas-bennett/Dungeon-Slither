import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import Tile from './Tile'

function Board(props) {
  const boardSize = 10
  const tiles = []
  for (let i = 1; i <= boardSize; i++) {
    for (let j = 1; j <= boardSize; j++) {
      tiles.push(i + ', ' + j)
    }
  }
  const [snakePos, setSnakePos] = useState([0, 0])
  const handleSnakeDangerously = (key, e) => {
    console.log(key)
    switch (key) {
      case 'w':
        setSnakePos([snakePos[0], snakePos[1] + 1])
        break
      case 'd':
        setSnakePos([snakePos[0] + 1, snakePos[1]])
        break
      case 's':
        setSnakePos([snakePos[0], snakePos[1] - 1])
        break
      case 'a':
        setSnakePos([snakePos[0] - 1, snakePos[1]])
        break;
      default:
        break;
    }
  }

  return (
    <div className="board" style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}>
      <KeyboardEventHandler handleKeys={['alphabetic']} onKeyEvent={handleSnakeDangerously} />
      {tiles.map(item => <Tile key={item} id={item} />)}
    </div>
  )
}

export default Board
