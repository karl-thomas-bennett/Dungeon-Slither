import React, { useState, useEffect } from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import Tile from './Tile'

function Board(props) {
  const boardSize = 10
  const tiles = []
  for (let i = 1; i <= boardSize; i++) {
    for (let j = 1; j <= boardSize; j++) {
      tiles.push(j + ', ' + i)
    }
  }

  const [snake, setSnake] = useState([[2, 5], [3, 5], [4, 5], [5, 5]])
  const [direction, setDirection] = useState('left')
  const [lastDirection, setLastDirection] = useState('left')
  const [toggle, setToggle] = useState(true)
  const handleKeys = (key, e) => {
    switch (key) {
      case 'w':
        if (lastDirection !== 'down') {
          setDirection('up')
        }
        break;
      case 'd':
        if (lastDirection !== 'left') {
          setDirection('right')
        }
        break;
      case 's':
        if (lastDirection !== 'up') {
          setDirection('down')
        }
        break;
      case 'a':
        if (lastDirection !== 'right') {
          setDirection('left')
        }
        break;
    }
  }

  useEffect(() => {
    handleSnakeDangerously(direction)
    setLastDirection(direction)
  }, [toggle])

  useEffect(() => {
    const timer = setInterval(() => {
      setToggle(toggle => !toggle)
    }, 400)
    return () => clearInterval(timer)
  }, [])
  const handleSnakeDangerously = (direction) => {
    switch (direction) {
      case 'up':
        setSnake([[snake[0][0], snake[0][1] - 1], [snake[0][0], snake[0][1]],
        [snake[1][0], snake[1][1]], [snake[2][0], snake[2][1]]])
        break
      case 'right':
        setSnake([[snake[0][0] + 1, snake[0][1]], [snake[0][0], snake[0][1]],
        [snake[1][0], snake[1][1]], [snake[2][0], snake[2][1]]])
        break
      case 'down':
        setSnake([[snake[0][0], snake[0][1] + 1], [snake[0][0], snake[0][1]],
        [snake[1][0], snake[1][1]], [snake[2][0], snake[2][1]]])
        break
      case 'left':
        setSnake([[snake[0][0] - 1, snake[0][1]], [snake[0][0], snake[0][1]],
        [snake[1][0], snake[1][1]], [snake[2][0], snake[2][1]]])
        break;
      default:
        break;
    }
  }

  return (
    <div className="board" style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}>
      <KeyboardEventHandler handleKeys={['alphabetic']} onKeyEvent={handleKeys} />
      {tiles.map(item => <Tile key={item} id={item} snake={snake} />)}
    </div>
  )
}



export default Board
