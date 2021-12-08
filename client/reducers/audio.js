import { PLAY_AUDIO, RESET_AUDIO, ADD_AUDIO } from '../actions/audio'

const initialState = []

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_AUDIO:
      return { ...state, [action.name]: false }
    case PLAY_AUDIO:
      return { ...state, [action.name]: true }
    case RESET_AUDIO:
      return { ...state, [action.name]: false }
    default:
      return state
  }
}

export default reducer