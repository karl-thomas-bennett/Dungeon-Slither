import React from 'react'
import { Route } from 'react-router-dom'

import Header from './store/Header'
import ErrorMessage from './store/ErrorMessage'
import Cart from './store/Cart'
import ProductList from './store/ProductList'
import OrderList from './store/OrderList'
import WaitIndicator from './store/WaitIndicator'

function App () {
  return (
    <div className='app'>
      <Route path='/' component={Header} />
      <Route path='/' component={ErrorMessage} />
      <Route exact path='/' render={({ history }) => {
        return <ProductList history={history}>
          <WaitIndicator />
        </ProductList>
      }} />
      <Route path='/cart' render={({ history }) => {
        return <Cart history={history}>
          <WaitIndicator />
        </Cart>
      }} />
      <Route path='/orders' render={() => {
        return <OrderList>
          <WaitIndicator />
        </OrderList>
      }} />
    </div>
  )
}

export default App
