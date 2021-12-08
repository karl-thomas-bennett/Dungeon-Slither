import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGameState, setTileContent } from '../../actions/game'
import { getStyle, getItemPos } from '../../utils/tileUtil'
import Item from './Item'
import SnakeSegment from './SnakeSegment'

const Tile = ({ content, snake, id, direction, item: snakeItem }) => {
  const dispatch = useDispatch()
  const tiles = useSelector(store => store.tiles)
  const [style, setStyle] = useState('')
  const [item, setItem] = useState('')
  const [tileImg, setTileImg] = useState('')
  const coord = id
  const terrain = content[0]

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
      }
      if (snake[0][0] === pos[0] && snake[0][1] === pos[1]) {
        dispatch(setGameState('lost - The slime ate you'))
      }
    }
    if (content.includes('door-out')) {
      if (itemPos[0] === pos[0] && itemPos[1] === pos[1] && snakeItem === 'key') {
        dispatch(setGameState('won'))
      }
    }
  }, [snake])

  useEffect(() => {
    calcImage()
  }, [])

  const calcImage = () => {
    if (terrain === 'floor') {
      const floorArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
      setTileImg(floorArr.map(a => 'floor-' + a)[Math.floor(Math.random() * floorArr.length)])
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
