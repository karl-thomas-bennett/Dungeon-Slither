import React, { useEffect } from 'react'

import Order from './Order'

import {fetchOrders} from '../../actions/orders'
import { useDispatch, useSelector } from 'react-redux'

function OrderList ( props ) {
  const { children } = props
  const orders = useSelector(state => state.order)
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(fetchOrders())
  },[])

  return (
    <div className='orderlist'>
      {children} { /* Holds the WaitIndicator */ }
      {orders?.map(order => {
        return (
          <Order
            key={order.id}
            order={order}
          />
        )
      })}
    </div>
  )
}

export default OrderList