import {ADD_NEW_ORDER, FETCH_ORDERS_SUCCESS} from '../actions/orders'

const initialState = []

function order (state = initialState, action) {
  switch (action.type) {
    case 'ADD_NEW_ORDER':
      return [ ...state, action.cart ]
    case 'FETCH_ORDERS_SUCCESS':
      return action.orders  
    default:
      return state
  }
}

export default order