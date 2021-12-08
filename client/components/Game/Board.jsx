import React, { useState, useEffect } from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { prepForJS } from '../../../server/utils'
import { playAudio } from '../../actions/audio'
import { setDirection, setGameState, setTileContent } from '../../actions/game'
import { setTilesState } from '../../actions/tiles'
import { getLevelByIdAPI } from '../../apis/levels'
import { handleKeys, handleDrop } from '../../utils/keyEventFunctions'
import GameOver from './GameOver'
import Sounds from './Sounds'
import Tile from './Tile'

function Board(props) {
  const { id } = useParams()
  const dispatch = useDispatch()
  const boardSize = 20

  let initial = []
  const [size, setSize] = useState(6)

  const game = useSelector(state => state.game)
  const [timer, setTimer] = useState(0)
  const gameState = game.gameState
  const [snake, setSnake] = useState(initial)
  const [direction, setGameDirection] = useState(game.direction)
  const [lastDirection, setLastDirection] = useState('left')
  const [holding, setHolding] = useState('none')
  const [toggle, setToggle] = useState(true)
  const [jumpToggle, setJumpToggle] = useState(true)
  const [firstJump, setFirstJump] = useState(true)
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  useEffect(() => {
    setIsFirstLoad(false)
  }, [])

  useEffect(() => {
    if (!isFirstLoad) {
      dispatch(playAudio('snake'))
    }
  }, [isFirstLoad])

  const tiles = useSelector(state => state.tiles)

  const makeSnake = (initial, directionArr) => {
    for (let i = 1; i < size; i++) {
      initial = [...initial, [initial[0][0] + i * directionArr[0], initial[0][1] + i * directionArr[1]]]
    }
    setSnake(initial)
  }



  const reset = (id) => {
    getLevelByIdAPI(id).then(level => {
      const tiles = prepForJS(level.tiles)
      dispatch(setGameState('playing'))
      dispatch(setDirection(level.direction))
      dispatch(setTilesState(tiles))
      let initial = [tiles.find(tile => tile.content.includes('door-in')).coord.split(',').map(a => Number(a))]
      const dirObj = {
        down: [-1, 0],
        up: [1, 0],
        right: [0, -1],
        left: [0, 1]
      }
      makeSnake(initial, dirObj[level.direction])
      setGameDirection(level.direction)
      setLastDirection(level.direction)
      setSize(6)
      setHolding('none')
    })
  }
  useEffect(() => {
    if (id > 0) {
      reset(id)
    }
  }, [])




  useEffect(() => {
    handleSnakeDangerously(direction)
  }, [toggle])

  const handleArrows = (key, e = null) => {
    if (gameState === 'playing') {
      setGameDirection(handleKeys(key, e, lastDirection))
      setToggle(toggle => !toggle)
      setJumpToggle(jumpToggle => !jumpToggle)
      clearInterval(timer)
    }
  }

  const handleSpace = () => {
    if (holding !== 'none') {
      setHolding('none')
      dispatch(setTileContent(handleDrop(tiles.find(tile => tile.coord === snake[0].join()), tiles, holding, snake)))
    }
  }

  const handleItems = (items, tile) => {
    for (let item of items) {
      if (tile.content.includes(item)) {
        setHolding(item)
        if (!isFirstLoad) {
          dispatch(playAudio(item))
        }

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
        dispatch(setGameState('lost - Concussion is death, who knew?'))
        dispatch(playAudio('death'))
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
    setLastDirection(direction)
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

  useEffect(() => {
    if (!isFirstLoad) {
      dispatch(playAudio('coin'))
    }
  }, [size])

  return (
    <>
      <Sounds />
      <div className='game-board'>
        <div className="board" style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}>
          <KeyboardEventHandler handleKeys={['alphabetic']} onKeyEvent={(key, e) => {
            if (gameState === 'playing') {
              setGameDirection(handleKeys(key, e, lastDirection))
              setToggle(toggle => !toggle)
              setJumpToggle(jumpToggle => !jumpToggle)
              clearInterval(timer)
            }
          }
          } />
          <KeyboardEventHandler handleKeys={['space']} onKeyEvent={
            () => {
              if (holding !== 'none') {
                setHolding('none')
                dispatch(playAudio('drop-' + holding))
                dispatch(setTileContent(handleDrop(tiles.find(tile => tile.coord === snake[0].join()), tiles, holding, snake)))
              }
            }
          } />
          {tiles.map(tile => <Tile key={tile.coord} id={tile.coord} content={tile.content} snake={snake} item={holding} direction={lastDirection} toggle={toggle} />)}
          {gameState !== 'playing' && <GameOver gameState={gameState} reset={() => reset(id)} history={props.history} />}
        </div>
      </div>
      <div className='border-game'></div>
      <div className='game-menu'>
        <button className='game-back' onClick={() => props.history.push('/')}>Menu</button>
        <div className='game-instructions'>
          <p className='instruction-text'>Eat your fill and get through the door. It's locked though...</p>
          <div className='instruction-break'></div>
          <p className='instruction-text'>Also, watch out for the slime that guards the dungeon. Something sharp may be useful.</p>
          <div className='instruction-break'></div>
          <p className='instruction-text'>Go forth and slither!</p>
        </div>
        <div className='game-controls'>
          <div></div>
          <button className='game-key' onClick={() => handleArrows('w')}>W</button>
          <div></div>
          <button className='game-key' onClick={() => handleArrows('a')}>A</button>
          <button className='game-key' onClick={() => handleArrows('s')}>S</button>
          <button className='game-key' onClick={() => handleArrows('d')}>D</button>
          <button className='game-key key-space' onClick={handleSpace}>SPACE</button>
        </div>
      </div>
    </>
  )
}

export default Board
