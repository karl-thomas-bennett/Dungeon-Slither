const map = {
  'floor': 'grey',
  'wall': 'black',
  'door-in': 'green',
  'door-out': 'red',
  'food': 'item-coin-shadow.png',
  'sword': 'item-sword.png',
  'key': 'item-key-shadow.png',
  'guard': 'slime.png',
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

