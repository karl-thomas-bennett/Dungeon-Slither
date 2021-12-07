import React, { useState, useEffect } from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import { useDispatch, useSelector } from 'react-redux'
import { setGameState, setTileContent } from '../../actions/game'
import Tile from './Tile'

function Board(props) {
  const dispatch = useDispatch()
  const boardSize = 20
  // const tiles = []
  // for (let i = 1; i <= boardSize; i++) {
  //   for (let j = 1; j <= boardSize; j++) {
  //     tiles.push(j + ', ' + i)
  //   }
  // }

  let initial = []
  const [size, setSize] = useState(6)

  const game = useSelector(state => state.game)
  const gameState = game.gameState
  const [snake, setSnake] = useState(initial)
  const [direction, setDirection] = useState(game.direction)
  const [lastDirection, setLastDirection] = useState('left')
  const [holding, setHolding] = useState('none')
  const [toggle, setToggle] = useState(true)

  const tiles = useSelector(state => state.tiles)
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

  const getNeibours = (coord) => {
    const arrayCoord = coord.split(',').map(a => Number(a))
    return [[arrayCoord[0] + 1, arrayCoord[1]].join(), [arrayCoord[0] - 1, arrayCoord[1]].join(), [arrayCoord[0], arrayCoord[1] + 1].join(), [arrayCoord[0], arrayCoord[1] - 1].join()]
  }

  const handleDrop = (key, e) => {
    setHolding('none')
    let dropPoint = tiles.find(tile => tile.coord === snake[0].join())
    const stack = [dropPoint]
    const visited = []
    while (stack.length > 0) {
      let t = stack.shift()
      visited.push[t.coord]
      if (!t.content.includes('empty')) {
        for (let neighbour of getNeibours(dropPoint.coord)) {
          if (!visited.includes(neighbour)) {
            stack.push(tiles.find(tile => tile.coord === neighbour))
          }
        }
      } else {
        dropPoint = t
        break
      }
    }
    dispatch(setTileContent(dropPoint.coord, dropPoint.content.map(thing => thing === 'empty' ? holding : thing)))
  }

  const makeSnake = (initial, directionArr) => {
    for (let i = 1; i < size; i++) {
      initial = [...initial, [initial[0][0] + i * directionArr[0], initial[0][1] + i * directionArr[1]]]
    }
    setSnake(initial)
  }

  useEffect(() => {
    let initial = [tiles.find(tile => tile.content.includes('door-in')).coord.split(',').map(a => Number(a))]
    const dirObj = {
      down: [-1, 0],
      up: [1, 0],
      right: [0, -1],
      left: [0, 1]
    }
    makeSnake(initial, dirObj[direction])
  }, [])


  useEffect(() => {
    handleSnakeDangerously(direction)
    setLastDirection(direction)
  }, [toggle])

  const handleItems = (items, tile) => {
    for (let item of items) {
      if (tile.content.includes(item)) {
        setHolding(item)
        dispatch(setTileContent(tile.coord, tile.content.map(thing => thing === item ? 'empty' : thing)))
      }
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setToggle(toggle => !toggle)
    }, 300)
    return () => clearInterval(timer)
  }, [])
  const handleSnakeDangerously = (direction) => {
    if (snake.length === 0) {
      return
    }
    let newSnake = []
    switch (direction) {
      case 'left':
        newSnake = [[snake[0][0], snake[0][1] - 1]]
        for (let i = 0; i < size - 1; i++) {
          newSnake = [...newSnake, [snake[i][0], snake[i][1]]]
        }
        break
      case 'down':
        newSnake = [[snake[0][0] + 1, snake[0][1]]]
        for (let i = 0; i < size - 1; i++) {
          newSnake = [...newSnake, [snake[i][0], snake[i][1]]]
        }
        break
      case 'right':
        newSnake = [[snake[0][0], snake[0][1] + 1]]
        for (let i = 0; i < size - 1; i++) {
          newSnake = [...newSnake, [snake[i][0], snake[i][1]]]
        }
        break
      case 'up':
        newSnake = [[snake[0][0] - 1, snake[0][1]]]
        for (let i = 0; i < size - 1; i++) {
          newSnake = [...newSnake, [snake[i][0], snake[i][1]]]
        }
        break;
      default:
        break;
    }

    if (gameState === 'playing') {
      const newHeadTile = tiles.find(tile => tile.coord === newSnake[0].join())
      const heads = newSnake.filter(segment => segment[0] === newSnake[0][0] && segment[1] === newSnake[0][1])
      if (newHeadTile === undefined || newHeadTile.content[0] !== 'floor' || heads.length > 1) {
        dispatch(setGameState('lost - concussion is death, who knew?'))
      } else {
        setSnake(newSnake)
        if (holding === 'none' && newHeadTile.content.includes('food')) {
          dispatch(setTileContent(newHeadTile.coord, newHeadTile.content.map(item => item === 'food' ? 'empty' : item)))
          setSize(size + 1)
        }
        if (holding === 'none') {
          handleItems(['key', 'sword'], newHeadTile)
        }
      }
    } else if (gameState === 'won') {
      setSnake(newSnake)
    }
  }




  return (
    <div className="board" style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}>
      <KeyboardEventHandler handleKeys={['alphabetic']} onKeyEvent={(key, e) => gameState === 'playing' ? handleKeys(key, e) : ''} />
      <KeyboardEventHandler handleKeys={['space']} onKeyEvent={handleDrop} />
      {tiles.map(tile => <Tile key={tile.coord} id={tile.coord} content={tile.content} snake={snake} item={holding} direction={lastDirection} />)}
    </div>
  )
}

export default Board
