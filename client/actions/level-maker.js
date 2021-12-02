export const SET_TERRAIN_TYPE = 'SET_TERRAIN_TYPE'
export const ADD_ITEM_TO_TILE = 'ADD_ITEM_TO_TILE'
export const REMOVE_ITEM_FROM_TILE = 'REMOVE_ITEM_FROM_TILE'
export const RESET_LEVEL_EDITOR = 'RESET_LEVEL_EDITOR'
export const SET_SELECTION = 'SET_SELECTION'

export const setTerrainType = (coord, terrain) => {
  return {
    type: SET_TERRAIN_TYPE,
    coord,
    terrain
  }
}

export const addItemToTile = (coord, item) => {
  return {
    type: ADD_ITEM_TO_TILE,
    coord,
    item
  }
}

export const removeItemFromTile = (coord) => {
  return {
    type: REMOVE_ITEM_FROM_TILE,
    coord
  }
}

export const resetLevelEditor = (coord) => {
  return {
    type: RESET_LEVEL_EDITOR,
    coord
  }
}

export const setSelection = (selection) => {
  return {
    type: SET_SELECTION,
    selection
  }
}
