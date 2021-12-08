import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { NavLink } from 'react-router-dom'
import { addOrder } from '../../actions/orders'

import CartItem from './CartItem'

function Cart (props) {

  const { children } = props
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  function submitCart (evt) {
    evt.preventDefault()
    dispatch(addOrder(cart))
  }

  return cart.length
    ? (
      <div className='store-cart'>
        <table>
          <thead>
            <tr>
              <td role='columnheader'>Product</td>
              <td role='columnheader'>Quantity</td>
              <td role='columnheader'>Remove</td>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, id) => {
              return (
                <CartItem
                  key={id}
                  item={item}
                />)
            })}
          </tbody>
        </table>
        
        {/* <div className='store-actions'>
          <div className='continue-shopping'> */}
            <p>
              <NavLink to='/store'><ul>Continue shopping</ul></NavLink>
            </p>
          {/* </div>
          
          <div className='place-order'> */}
            <span>
              {children}
              <button
                className='button-primary'
                onClick={submitCart}>
                Place Order
              </button>
            </span>          
          {/* </div>  

        </div> */}
      </div>
    )
    : 
    <div className = 'empty-cart'>
      <p>Your cart is empty! Start shopping <NavLink to='/store'>here</NavLink></p>
    </div>
}

export default Cart
