import { combineReducers } from 'redux'

import gameReducer from './game'
import snakeReducer from './snake'
import tilesReducer from './tiles'

export default combineReducers({
  gameReducer,
  snakeReducer,
  tilesReducer
})
