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
  const [snake, setSnake] = useState([[2, 5], [3, 5], [4, 5], [5, 5]])
  const handleSnakeDangerously = (key, e) => {
    console.log(key)
    switch (key) {
      case 'w':
        setSnake([[snake[0][0], snake[0][1] + 1], [snake[0][0], snake[0][1]],
        [snake[1][0], snake[1][1]], [snake[2][0], snake[2][1]]])
        break
      case 'd':
        setSnake([[snake[0][0] + 1, snake[0][1]], [snake[0][0], snake[0][1]],
        [snake[1][0], snake[1][1]], [snake[2][0], snake[2][1]]])
        break
      case 's':
        setSnake([[snake[0][0], snake[0][1] - 1], [snake[0][0], snake[0][1]],
        [snake[1][0], snake[1][1]], [snake[2][0], snake[2][1]]])
        break
      case 'a':
        setSnake([[snake[0][0] - 1, snake[0][1]], [snake[0][0], snake[0][1]],
        [snake[1][0], snake[1][1]], [snake[2][0], snake[2][1]]])
        break;
      default:
        break;
    }
  }

  return (
    <div className="board" style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}>
      <KeyboardEventHandler handleKeys={['alphabetic']} onKeyEvent={handleSnakeDangerously} />
      {tiles.map(item => <Tile key={item} id={item} snake={snake} />)}
    </div>
  )
}

export default Board
