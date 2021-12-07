import { SET_GAME_STATE, SET_DIRECTION } from '../actions/game'

const initialState = { direction: 'down', score: 0, gameState: 'playing' }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIRECTION:
      return { ...state, drection: action.direction }
    case 'SET_SCORE':
      return { ...state, score: action.score }
    case SET_GAME_STATE:
      return { ...state, gameState: action.gameState }
    default:
      return state
  }
}

export default reducer
