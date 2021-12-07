import { blankSlate } from '../prototype-data'
import { SET_TERRAIN_TYPE, ADD_ITEM_TO_TILE, REMOVE_ITEM_FROM_TILE, RESET_LEVEL_EDITOR } from '../actions/level-maker'

const initialState = blankSlate(20)
const terrainCheck = ['wall', 'door-in', 'door-out']

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TERRAIN_TYPE:
      const item = state.find(tile => tile.coord === action.coord).content[1]
      return state.map(tile => tile.coord === action.coord ? { ...tile, content: [action.terrain, item] } : tile)
    case ADD_ITEM_TO_TILE:
      let terrainAdd = state.find(tile => tile.coord === action.coord).content[0]
      if (terrainCheck.includes(terrainAdd)) {
        return state
      } else {
        return state.map(tile => tile.coord === action.coord ? { ...tile, content: [terrainAdd, action.item] } : tile)
      }
    case REMOVE_ITEM_FROM_TILE:
      let terrainRemove = state.find(tile => tile.coord === action.coord).content[0]
      return state.map(tile => tile.coord === action.coord ? { ...tile, content: [terrainRemove, 'empty'] } : tile)
    case RESET_LEVEL_EDITOR:
      return blankSlate(20)
    default:
      return state
  }
}

export default reducer
