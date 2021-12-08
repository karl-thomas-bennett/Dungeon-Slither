import React from 'react'
import imageDict from '../../utils/imageDictionary'
import { getSegment } from '../../utils/snakeUtil'
import Item from './Item'

const SnakeSegment = ({ snake, pos, snakeItem, direction }) => {
  const i = snake.findIndex(segment => segment[0] === pos[0] && segment[1] === pos[1])
  const segment = getSegment(snake[i - 1], snake[i], snake[i + 1])
  const image = imageDict[segment]

  let className = 'snake'
  if (image.flipped) {
    className += ' flipped'
  }

  return (
    <>
      <img src={'/segments/' + image.name + '.png'} className={className} />
      {snakeItem !== 'none' && i === 0 && <Item item={snakeItem} direction={direction} />}
    </>
  )
}

export default SnakeSegment
