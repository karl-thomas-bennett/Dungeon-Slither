import { prototypeLevel } from '../prototype-data'

const initialState = prototypeLevel

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TILE_OBJECTS':
      return state
    case 'RESET':
      return initialState
    default:
      return state
  }
}

export default reducer
