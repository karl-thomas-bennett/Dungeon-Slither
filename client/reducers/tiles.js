import { prototypeLevel } from '../prototype-data'
import { SET_TILE_CONTENT } from '../actions/game'
import { SET_TILES_STATE } from '../actions/tiles'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TILE':
      return [...state, action.tile]
    case SET_TILE_CONTENT:
      return state.map(tile => tile.coord === action.coord ? { ...tile, content: action.content } : tile)//[...state, state.find(tile => tile.coord === action.coord).content = action.content]
    case SET_TILES_STATE:
      return action.content
    case 'RESET':
      return initialState
    default:
      return state
  }
}

export default reducer
