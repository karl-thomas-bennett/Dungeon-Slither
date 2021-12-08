export function getSegment(prev, current, next) {
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