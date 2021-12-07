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