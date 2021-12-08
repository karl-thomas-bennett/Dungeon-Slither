import { SET_SELECTION, SET_DIRECTION, SET_GUARD, SET_KEY, SET_SWORD, ADD_DOOR_IN, ADD_DOOR_OUT, REMOVE_DOOR_IN, REMOVE_DOOR_OUT } from '../actions/level-data'

const initialState = { doorIn: 0, doorOut: 0, guard: false, key: false, sword: false, selection: 'floor', direction: 'down' }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTION:
      return { ...state, selection: action.selection }
    case SET_DIRECTION:
      return { ...state, direction: action.direction }
    case SET_GUARD:
      return { ...state, guard: action.bool }
    case SET_KEY:
      return { ...state, key: action.bool }
    case SET_SWORD:
      return { ...state, sword: action.bool }
    case ADD_DOOR_IN:
      return { ...state, doorIn: state.doorIn + 1 }
    case ADD_DOOR_OUT:
      return { ...state, doorOut: state.doorOut + 1 }
    case REMOVE_DOOR_IN:
      return { ...state, doorIn: state.doorIn - 1 }
    case REMOVE_DOOR_OUT:
      return { ...state, doorOut: state.doorOut - 1 }
    default:
      return state
  }
}

export default reducer
