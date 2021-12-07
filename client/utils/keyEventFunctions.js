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
  }
}

export const handleDrop = (dropPoint, tiles, holding) => {
  let output = dropPoint
  const stack = [dropPoint]
  const visited = []
  while (stack.length > 0) {
    let t = stack.shift()
    visited.push[t.coord]
    if (!t.content.includes('empty')) {
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