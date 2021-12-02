const initialState = { direction: 'down', score: 0, isOver: false }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DIRECTION':
      return { ...state, drection: action.direction }
    case 'SET_SCORE':
      return { ...state, score: action.score }
    case 'SWITCH_GAME_STATE':
      return { ...state, isOver: !isOver }
    default:
      return state
  }
}

export default reducer
