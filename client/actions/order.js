import { placeOrder } from "../api/orders"

export const ADD_NEW_ORDER = 'ADD_NEW_ORDER'

export function addNewOrder (cart) {
  console.log('action add order')
//  console.log( cart )
   return {
     type: ADD_NEW_ORDER,
     cart
   }
 }

export const saveOrders = (cartArr) => {
  return {
    type: 'SAVE_ORDER',
    cart: cartArr
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