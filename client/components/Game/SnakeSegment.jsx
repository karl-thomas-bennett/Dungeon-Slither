import React from 'react'
import imageDict from '../../utils/imageDictionary'
import { getSegment } from '../../utils/snakeUtil'

const SnakeSegment = ({ snake, pos }) => {
  const i = snake.findIndex(segment => segment[0] === pos[0] && segment[1] === pos[1])
  const segment = getSegment(snake[i - 1], snake[i], snake[i + 1])
  const image = imageDict[segment]

  let className = 'snake'
  if (image.flipped) {
    className += ' flipped'
  }

  return (
    <img src={'/segments/' + image.name + '.png'} className={className} />
  )
}

export default SnakeSegment
