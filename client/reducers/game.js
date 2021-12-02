import { SET_SELECTION } from '../actions/level-maker'

const initialState = { direction: 'down', score: 0, isOver: false, selection: 'floor' }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DIRECTION':
      return { ...state, drection: action.direction }
    case 'SET_SCORE':
      return { ...state, score: action.score }
    case 'SWITCH_GAME_STATE':
      return { ...state, isOver: !isOver }
    case SET_SELECTION:
      return { ...state, selection: action.selection }
    default:
      return state
  }
}

export default reducer
