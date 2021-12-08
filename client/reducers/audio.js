import { STOP_AUDIO } from '../actions/audio'
import { PLAY_AUDIO, RESET_AUDIO, ADD_AUDIO } from '../actions/audio'

const initialState = []

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_AUDIO:
      return { ...state, [action.name]: 'idle' }
    case PLAY_AUDIO:
      return { ...state, [action.name]: 'play' }
    case RESET_AUDIO:
      return { ...state, [action.name]: 'idle' }
    case STOP_AUDIO:
      return { ...state, [action.name]: 'stop' }
    default:
      return state
  }
}

export default reducer