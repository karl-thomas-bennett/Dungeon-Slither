import {ADD_NEW_ORDER} from '../actions/order'

const initialState = []

function order (state = initialState, action) {
  switch (action.type) {
    case 'ADD_NEW_ORDER':
      return [ ...state, action.cart ]
    default:
      return state
  }
}

export default order