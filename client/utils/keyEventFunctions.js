export const handleKeys = (key, e, lastDirection) => {
  switch (key) {
    case 'w':
      if (lastDirection !== 'down') {
        return 'up'
      } else {
        return 'down'
      }
    case 'd':
      if (lastDirection !== 'left') {
        return 'right'
      } else {
        return 'left'
      }
    case 's':
      if (lastDirection !== 'up') {
        return 'down'
      } else {
        return 'up'
      }
    case 'a':
      if (lastDirection !== 'right') {
        return 'left'
      } else {
        return 'right'
      }
    default:
      return lastDirection
  }
}

export const handleDrop = (dropPoint, tiles, holding, snake) => {
  let output = dropPoint
  const stack = [dropPoint]
  const visited = []
  while (stack.length > 0) {
    let t = stack.shift()
    visited.push[t.coord]
    if (!t.content.includes('empty') || snake.map(segment => segment[0] + ',' + segment[1]).includes(t.coord)) {
      for (let neighbour of getNeibours(t.coord)) {
        if (!visited.includes(neighbour)) {
          stack.push(tiles.find(tile => tile.coord === neighbour))
        }
      }
    } else {
      output = t
      break
    }
  }
  output.content = output.content.map(item => item === 'empty' ? holding : item)
  return output
}

const getNeibours = (coord) => {
  const arrayCoord = coord.split(',').map(a => Number(a))
  return [[arrayCoord[0] + 1, arrayCoord[1]].join(), [arrayCoord[0] - 1, arrayCoord[1]].join(), [arrayCoord[0], arrayCoord[1] + 1].join(), [arrayCoord[0], arrayCoord[1] - 1].join()]
}