import React from 'react'
import imageDict from '../../utils/imageDictionary'

const SnakeSegment = ({ snake, pos }) => {
  const i = snake.findIndex(segment => segment[0] === pos[0] && segment[1] === pos[1])
  const segment = getSegment(snake[i - 1], snake[i], snake[i + 1])
  const image = imageDict.find(image => {
    return image.cases.find(imageCase => {
      return imageCase.name === segment
    })
  })

  let className = 'snake'
  if (image.cases.find(imageCase => imageCase.name === segment).flipped) {
    className += ' flipped'
  }


  return (
    <img src={'/segments/' + image.name + '.png'} className={className} />
  )
}

function getSegment(prev, current, next) {
  if (prev === undefined) {
    return 'head-' + getDirection(next, current)
  }
  if (next === undefined) {
    return 'tail-' + getDirection(current, prev)
  }
  return 'body-' + getDirection(next, current) + '-' + getDirection(current, prev)
}

function getDirection(a, b) {
  if (a[0] === b[0]) {
    return a[1] < b[1] ? 'right' : 'left'
  } else {
    return a[0] < b[0] ? 'down' : 'up'
  }
}

export default SnakeSegment