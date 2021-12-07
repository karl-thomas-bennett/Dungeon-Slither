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

