import React, { useState, useEffect } from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import { useDispatch, useSelector } from 'react-redux'
import { setGameState, setTileContent } from '../../actions/game'
import { handleKeys, handleDrop } from '../../utils/keyEventFunctions'
import Tile from './Tile'

function Board(props) {
  const dispatch = useDispatch()
  const boardSize = 20

  let initial = []
  const [size, setSize] = useState(6)

  const game = useSelector(state => state.game)
  const [timer, setTimer] = useState(0)
  const gameState = game.gameState
  const [snake, setSnake] = useState(initial)
  const [direction, setDirection] = useState(game.direction)
  const [lastDirection, setLastDirection] = useState('left')
  const [holding, setHolding] = useState('none')
  const [toggle, setToggle] = useState(true)
  const [jumpToggle, setJumpToggle] = useState(true)
  const [firstJump, setFirstJump] = useState(true)

  const tiles = useSelector(state => state.tiles)

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
    setTimer(setInterval(() => {
      setToggle(toggle => !toggle)
    }, 300))
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

  useEffect(() => {
    if (firstJump) {
      setFirstJump(false)
    } else {
      setTimer(setInterval(() => {
        setToggle(toggle => !toggle)
      }, 300))
      return () => clearInterval(timer)
    }
  }, [jumpToggle])



  return (
    <div className="board" style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}>
      <KeyboardEventHandler handleKeys={['alphabetic']} onKeyEvent={(key, e) => {
        if (gameState === 'playing') {
          setDirection(handleKeys(key, e, lastDirection))
          setToggle(toggle => !toggle)
          setJumpToggle(jumpToggle => !jumpToggle)
          clearInterval(timer)
        }
      }
      } />
      <KeyboardEventHandler handleKeys={['space']} onKeyEvent={
        () => {
          setHolding('none')
          dispatch(setTileContent(handleDrop(tiles.find(tile => tile.coord === snake[0].join()), tiles, holding, snake)))
        }
      } />
      {tiles.map(tile => <Tile key={tile.coord} id={tile.coord} content={tile.content} snake={snake} item={holding} direction={lastDirection} />)}
    </div>
  )
}

export default Board
