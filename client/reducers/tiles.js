import { prototypeLevel } from '../prototype-data'
import { SET_TILE_CONTENT } from '../actions/game'

const initialState = prototypeLevel

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TILE':
      return [...state, action.tile]
    case SET_TILE_CONTENT:
      return [...state, state.find(tile => tile.coord === action.coord).content = action.content]
    case 'RESET':
      return initialState
    default:
      return state
  }
}

export default reducer
