import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import OrderItem from './OrderItem'
import OrderList from './OrderList'

function Order (props) {
  
  const { id, products, createdAt, status } = props.order

  function cancelOrder () {
    console.log('coming soon!')
  }

  function completeOrder () {
    console.log('coming soon!')
  }

  return (
    <div className='order'>
      <p className='p name'>Order #{id}</p>
      <p className='p order-details'>Order placed: {createdAt}</p>
      <p className='p order-details'>
        <span className={`fa fa-circle${status}`} aria-hidden="true"></span>
        Status: {status}
      </p>
      <table>
        <thead>
          <tr>
            <td role='columnheader'>Product</td>
            <td role='columnheader'>Quantity</td>
            <td roll='columnheader'>Price</td>
          </tr>
        </thead>
        <tbody>
          {products.map(item => {
            return <OrderItem
              key={item.id}
              product={item}
            />
          })}</tbody>
      </table>
      <div>
        {status === 'pending' &&
          <>
            <button
              onClick={cancelOrder}
              className='button order-button'
            >Cancel Order</button>
            <button
              onClick={completeOrder}
              className='button order-button button-primary'
            >Order Received</button>
          </>
        }
      </div>
    </div>
  )
}

export default Order
