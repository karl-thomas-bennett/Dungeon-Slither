export const ADD_AUDIO = 'ADD_AUDIO'
export const PLAY_AUDIO = 'PLAY_AUDIO'
export const RESET_AUDIO = 'RESET_AUDIO'
export const STOP_AUDIO = 'STOP_AUDIO'


export function addAudio(name) {
  return {
    type: ADD_AUDIO,
    name
  }
}
export function playAudio(name) {
  return {
    type: PLAY_AUDIO,
    name
  }
}
export function resetAudio(name) {
  return {
    type: RESET_AUDIO,
    name
  }
}

export function stopAudio(name) {
  return {
    type: STOP_AUDIO,
    name
  }
}
