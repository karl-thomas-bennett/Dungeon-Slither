import { combineReducers } from 'redux'

import game from './game'
import snake from './snake'
import tiles from './tiles'
import levelMaker from './level-maker'
import products from './products'
import cart from './cart'
import errorMessage from './errorMessage'
import waiting from './waiting'
import order from './order'

export default combineReducers({
  game,
  snake,
  tiles,
  levelMaker,
  products,
  cart,
  order,
  errorMessage,
  waiting
})
