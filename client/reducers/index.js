import { combineReducers } from 'redux'

import game from './game'
import snake from './snake'
import tiles from './tiles'
import levelMaker from './level-maker'
import levelData from './level-data'

export default combineReducers({
  game,
  snake,
  tiles,
  levelMaker,
  levelData
})
