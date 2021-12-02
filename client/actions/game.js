
export const SET_GAME_STATE = 'SET_GAME_STATE'
export const setGameState = (gameState) => {
  return {
    type: SET_GAME_STATE,
    gameState
  }
}