import { combineReducers } from 'redux'

import game from './game'
import snake from './snake'
import tiles from './tiles'
import levelMaker from './level-maker'
import levelData from './level-data'
import products from './products'
import cart from './cart'
import errorMessage from './errorMessage'
import waiting from './waiting'
import order from './order'
import audio from './audio'

export default combineReducers({
  game,
  snake,
  tiles,
  levelMaker,
  levelData,
  products,
  cart,
  order,
  errorMessage,
  waiting,
  audio
})
