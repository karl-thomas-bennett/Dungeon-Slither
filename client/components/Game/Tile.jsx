import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { playAudio } from '../../actions/audio'
import { setGameState, setTileContent } from '../../actions/game'
import { getStyle, getItemPos } from '../../utils/tileUtil'
import SnakeSegment from './SnakeSegment'

const Tile = ({ toggle, content, snake, id, direction, item: snakeItem }) => {
  const dispatch = useDispatch()
  const tiles = useSelector(store => store.tiles)
  const gameState = useSelector(state => state.game.gameState)
  const [style, setStyle] = useState('')
  const [item, setItem] = useState('')
  const [tileImg, setTileImg] = useState('')
  const [closed, setClosed] = useState(false)
  const [count, setCount] = useState(0)
  const coord = id
  const terrain = content[0]
  const floorArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

  const snakeMap = snake.map(segment => {
    return segment[0] + ',' + segment[1]
  })

  useEffect(() => {
    setStyle(getStyle(content[0]))
    setItem(getStyle(content[1]))
  }, [content])

  const itemPos = snake.length > 0 ? getItemPos(snake[0], direction) : [-1, -1]
  const pos = id.split(',').map(v => Number(v))
  useEffect(() => {
    if (content.includes('guard') && snake.length > 0) {
      if (itemPos[0] === pos[0] && itemPos[1] === pos[1] && snakeItem === 'sword') {
        dispatch(setTileContent(id, content.map(item => item === 'guard' ? 'empty' : item)))
        dispatch(playAudio('kill'))
      }
      if (snake[0][0] === pos[0] && snake[0][1] === pos[1]) {
        dispatch(playAudio('death'))
        dispatch(setGameState('lost - The slime ate you'))
      }
    }
    if (content.includes('door-out')) {
      if (itemPos[0] === pos[0] && itemPos[1] === pos[1] && snakeItem === 'key') {
        dispatch(setGameState('won'))
        dispatch(playAudio('win'))
        dispatch(playAudio('unlock'))
      }
    }
  }, [snake])

  useEffect(() => {
    calcImage()
  }, [])

  useEffect(() => {
    checkSnakeMap()
  }, [toggle])

  useEffect(() => {
    if (content[0] === 'door-out') {
      if (gameState === 'won') {
        setTileImg(floorArr.map(a => 'floor-' + a)[Math.floor(Math.random() * floorArr.length)])
      }
      if (gameState === 'playing') {
        setClosed(true)
        const coordX = Number(coord.split(',')[1])
        const coordY = Number(coord.split(',')[0])
        const upper = Math.sqrt(tiles.length)
        if (coordX === 0) { // Left door
          setTileImg('door-left')
        }
        if (coordX === (upper - 1)) { // Right door
          setTileImg('door-right')
        }
        if (coordY === 0 || coordY === (upper - 1)) { // Top or bottom door
          setTileImg('door-up')
        }
      }
    }
    if (content[0] === 'door-in') {
      if (gameState === 'playing') {
        setCount(0)
        setClosed(false)
        setTileImg(floorArr.map(a => 'floor-' + a)[Math.floor(Math.random() * floorArr.length)])
      }
    }
  }, [gameState])

  const checkSnakeMap = () => {
    if (content[0] === 'door-in') {
      if (snake.length > 0) {
        if (count < snake.length) {
          const newCount = count + 1
          setCount(newCount)
        } else {
          if (closed === false) {
            setClosed(true)
            const coordX = Number(coord.split(',')[1])
            const coordY = Number(coord.split(',')[0])
            const upper = Math.sqrt(tiles.length)
            if (coordX === 0) { // Left door
              setTileImg('door-left')
            }
            if (coordX === (upper - 1)) { // Right door
              setTileImg('door-right')
            }
            if (coordY === 0 || coordY === (upper - 1)) { // Top or bottom door
              setTileImg('door-up')
            }
          }
        }
      }
    }
  }

  const calcImage = () => {
    if (terrain === 'floor') {
      setTileImg(floorArr.map(a => 'floor-' + a)[Math.floor(Math.random() * floorArr.length)])
    } else if (terrain === 'door-in') {
      setTileImg(floorArr.map(a => 'floor-' + a)[Math.floor(Math.random() * floorArr.length)])
    } else if (terrain === 'door-out') {
      const coordX = Number(coord.split(',')[1])
      const coordY = Number(coord.split(',')[0])
      const upper = Math.sqrt(tiles.length)
      if (coordX === 0) { // Left door
        setTileImg('door-left')
      }
      if (coordX === (upper - 1)) { // Right door
        setTileImg('door-right')
      }
      if (coordY === 0 || coordY === (upper - 1)) { // Top or bottom door
        setTileImg('door-up')
      }
    } else {
      const coordX = Number(coord.split(',')[1])
      const coordY = Number(coord.split(',')[0])

      let coordArr = [
        { y: coordY - 1, x: coordX },
        { y: coordY, x: coordX + 1 },
        { y: coordY + 1, x: coordX },
        { y: coordY, x: coordX - 1 },
        { y: coordY + 1, x: coordX - 1 },
        { y: coordY + 1, x: coordX + 1 }
      ]
      let neigborArr = []

      coordArr.map(coord => neigborArr.push(checkNeigbor(coord.x, coord.y)))
      const tileName = `${neigborArr[0]}${neigborArr[1]}${neigborArr[2]}${neigborArr[3]}-${neigborArr[4]}${neigborArr[5]}`
      checkForImage(tileName)
    }
  }

  const checkNeigbor = (x, y) => {
    if (tiles.find(tile => tile.coord === `${y},${x}`)) {
      const tile = tiles.find(tile => tile.coord === `${y},${x}`).content[0]
      // if (tile === 'wall' || tile === 'door-in' || tile === 'door-out') {
      if (tile === 'wall') {
        return 'w'
      } else {
        return 'f'
      }
    } else {
      return 'f'
    }
  }

  const checkForImage = (input) => {
    const fileNames = ['ffff', 'fffw', 'ffwf', 'ffww-ff', 'fwff', 'fwfw', 'fwwf-ff', 'fwww-ff', 'fwww-fw', 'fwww-wf', 'wfff', 'wffw', 'wfwf-fw', 'wfwf-wf', 'wfwf-ww', 'wfww', 'wwff', 'wwfw', 'wwwf', 'wwww-ff', 'wwww-fw', 'wwww-wf', 'wwww-ww', 'ffww-wf', 'fwwf-fw', 'wfwf-ff', 'wfww-ff', 'wfww-ww', 'wwwf-ff', 'wwwf-ww', 'fwww', 'fwwf-ww', 'ffww-ww']
    if (fileNames.includes(input)) {
      setTileImg(input)
    } else {
      if (!fileNames.includes(input.substring(0, 4))) {
        console.log('Does not exist')
      }
      setTileImg(input.substring(0, 4))
    }
  }

  return (
    <div className='tile' id={id} style={{ backgroundColor: style }}>
      <img src={`/tiles/${tileImg}.png`} className='tile-image' />
      {item !== 'transparent' ?
        <img className='item' src={'/images/' + item} /> :
        <div className='item' style={{ backgroundColor: item }} />
      }
      {
        snakeMap.includes(id) &&
        (
          <SnakeSegment snake={snake} pos={pos} snakeItem={snakeItem} direction={direction} />
        )
      }
    </div>
  )
}

export default Tile
