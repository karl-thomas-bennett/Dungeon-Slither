import { combineReducers } from 'redux'

import products from './products'
import cart from './cart'
import errorMessage from './errorMessage'
import waiting from './waiting'
import order from './order'

export default combineReducers({
  products,
  cart,
  order,
  errorMessage,
  waiting
})
