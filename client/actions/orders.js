import { getOrders, placeOrder } from "../api/orders"
import { showError } from '../actions/error'

export const ADD_NEW_ORDER = 'ADD_NEW_ORDER'
export const FETCH_ORDERS_PENDING = 'FETCH_ORDERS_PENDING'
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS'

export function fetchOrdersPending () {
  return {
    type: FETCH_ORDERS_PENDING
  }
}

export function fetchOrdersSuccess (orders) {
  return {
    type: FETCH_ORDERS_SUCCESS,
    orders: orders
  }
}

export function addNewOrder (cart) {
  console.log('action add order')
//  console.log( cart )
   return {
     type: ADD_NEW_ORDER,
     cart
   }
 }

 export const addOrder = ( cart ) =>{
   console.log('thunking')
  return (dispatch) =>{
    console.log('dispatching')

    //post to back end via api
    placeOrder( cart )
    // .then( newOrderId=>{
    //   const newOrderObj ={
    //     id: newOrderId,
    //     name: cart.name,
    //     quantity: cart.quantity
    //   }
    // })

    //send to redux

    .then (() =>{
      dispatch(addNewOrder(cart))
    })
//    dispatch( (newOrderObj))
  }
 }

export const fetchOrders = () =>{
  return (dispatch) =>{
    dispatch(fetchOrdersPending())
    return getOrders()
    .then ((orders) =>{

      dispatch(fetchOrdersSuccess(orders))
      return null
    })
    .catch((err) => {
      const errMessage = err.response?.text || err.message
      dispatch(showError(errMessage))
    })
//    .catch()
  }
} 