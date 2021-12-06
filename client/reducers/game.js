import { SET_GAME_STATE } from '../actions/game'
import { SET_SELECTION } from '../actions/level-maker'


const initialState = { direction: 'down', score: 0, gameState: 'playing', selection: 'floor' }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DIRECTION':
      return { ...state, drection: action.direction }
    case 'SET_SCORE':
      return { ...state, score: action.score }
    case SET_GAME_STATE:
      return { ...state, gameState: action.gameState }
    case SET_SELECTION:
      return { ...state, selection: action.selection }
    default:
      return state
  }
}

export default reducer
