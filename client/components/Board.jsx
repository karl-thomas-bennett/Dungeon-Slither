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

  let initial = []
  const size = 10
  for (let i = 0; i < size; i++) {
    initial = [...initial, [i, 5]]
  }

  const [snake, setSnake] = useState(initial)
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
    let newSnake = 0
    switch (direction) {
      case 'up':
        newSnake = [[snake[0][0], snake[0][1] - 1]]
        for (let i = 0; i < size - 1; i++) {
          newSnake = [...newSnake, [snake[i][0], snake[i][1]]]
        }
        setSnake(newSnake)
        break
      case 'right':
        newSnake = [[snake[0][0] + 1, snake[0][1]]]
        for (let i = 0; i < size - 1; i++) {
          newSnake = [...newSnake, [snake[i][0], snake[i][1]]]
        }
        setSnake(newSnake)
        break
      case 'down':
        newSnake = [[snake[0][0], snake[0][1] + 1]]
        for (let i = 0; i < size - 1; i++) {
          newSnake = [...newSnake, [snake[i][0], snake[i][1]]]
        }
        setSnake(newSnake)
        break
      case 'left':
        newSnake = [[snake[0][0] - 1, snake[0][1]]]
        for (let i = 0; i < size - 1; i++) {
          newSnake = [...newSnake, [snake[i][0], snake[i][1]]]
        }
        setSnake(newSnake)
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
