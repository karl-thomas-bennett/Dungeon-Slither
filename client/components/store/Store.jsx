import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import ErrorMessage from './ErrorMessage'
import Cart from './Cart'
import ProductList from './ProductList'
import OrderList from './OrderList'
import WaitIndicator from './WaitIndicator'

function Store() {
  return (
    <>
      <Route path='/store' component={Header} />
      <Route path='/store' component={ErrorMessage} />
      <Route exact path='/store' render={({ history }) => {
        return <ProductList history={history}>
          <WaitIndicator />
        </ProductList>
      }} />
      <Route path='/store/cart' render={({ history }) => {
        return <Cart history={history}>
          <WaitIndicator />
        </Cart>
      }} />
      <Route path='/store/orders' render={() => {
        return <OrderList>
          <WaitIndicator />
        </OrderList>
      }} />
    </>
  )
}

export default Store