import React from 'react'

const SnakeSegment = ({ snake, pos }) => {

  const i = snake.indexOf(pos)
  const segment = getSegment(snake[i - 1], snake[i], snake[i + 1])

  return (
    <svg viewBox="0 0 110 110">
      <use href="assets.svg#head"></use>
    </svg>
  )
}

function getSegment(prev, current, next) {
  if (prev === undefined) {
    return 'head-' + getDirection(next, current)
  }
  if (next === undefined) {
    return 'tail-' + getDirection(current, prev)
  }
  return 'body-' + getDirection(current, prev) + getDirection(next, current)
}

function getDirection(a, b) {
  if (a[0] === b[0]) {
    return a[1] < b[1] ? 'up' : 'down'
  } else {
    return a[0] < b[0] ? 'right' : 'left'
  }
}

export default SnakeSegment