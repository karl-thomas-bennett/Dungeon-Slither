export const SET_GAME_STATE = 'SET_GAME_STATE'
export const SET_TILE_CONTENT = 'SET_TILE_CONTENT'
export const SET_DIRECTION = 'SET_DIRECTION'

export const setTileContent = (coord, content) => {
  return {
    type: SET_TILE_CONTENT,
    coord,
    content
  }
}

export const setGameState = (gameState) => {
  return {
    type: SET_GAME_STATE,
    gameState
  }
}

export const setDirection = (direction) => {
  return {
    type: SET_DIRECTION,
    direction
  }
}
