import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setGameState, setTileContent } from '../../actions/game'
import { getStyle, getItemPos } from '../../utils/tileUtil'
import Item from './Item'
import SnakeSegment from './SnakeSegment'

const Tile = ({ content, snake, id, direction, item: snakeItem }) => {
  const dispatch = useDispatch()
  const [style, setStyle] = useState('')
  const [item, setItem] = useState('')

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
        dispatch(setGameState('lost - killed by guard'))
      }
    }
    if (content.includes('door-out')) {
      if (itemPos[0] === pos[0] && itemPos[1] === pos[1] && snakeItem === 'key') {
        dispatch(setGameState('won'))
      }
    }
  }, [snake])

  return (
    <div className='tile' id={id} style={{ backgroundColor: style }}>
      <div className='item' style={{ backgroundColor: item }}></div>
      {
        itemPos[0] === pos[0] && itemPos[1] === pos[1] &&
        snakeItem !== 'none' && <Item item={snakeItem} direction={direction} />
      }
      {
        snakeMap.includes(id) &&
        (
          <SnakeSegment snake={snake} pos={pos} />
        )
      }
    </div>
  )
}

export default Tile
