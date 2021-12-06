export const SET_GUARD = 'SET_GUARD'
export const SET_KEY = 'SET_KEY'
export const SET_SWORD = 'SET_SWORD'
export const SET_SELECTION = 'SET_SELECTION'
export const ADD_DOOR_IN = 'ADD_DOOR_IN'
export const ADD_DOOR_OUT = 'ADD_DOOR_OUT'

export const setSelection = (selection) => {
  return {
    type: SET_SELECTION,
    selection
  }
}

export const addDoorIn = () => {
  return {
    type: ADD_DOOR_IN
  }
}

export const addDoorOut = () => {
  return {
    type: ADD_DOOR_OUT
  }
}

export const setGuard = (bool) => {
  return {
    type: SET_GUARD,
    bool
  }
}

export const setKey = (bool) => {
  return {
    type: SET_KEY,
    bool
  }
}

export const setSword = (bool) => {
  return {
    type: SET_SWORD,
    bool
  }
}
