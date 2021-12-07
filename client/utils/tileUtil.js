const map = {
  'floor': 'grey',
  'wall': 'black',
  'door-in': 'green',
  'door-out': 'red',
  'food': 'green',
  'sword': 'blue',
  'key': 'purple',
  'guard': 'red',
  'empty': 'transparent'
}

export const getStyle = (key) => {
  return map[key]
}

export const getItemPos = (snakeHead, direction) => {
  switch (direction) {
    case 'left':
      return [snakeHead[0], snakeHead[1] - 1]
    case 'right':
      return [snakeHead[0], snakeHead[1] + 1]
    case 'up':
      return [snakeHead[0] - 1, snakeHead[1]]
    case 'down':
      return [snakeHead[0] + 1, snakeHead[1]]
  }
}

