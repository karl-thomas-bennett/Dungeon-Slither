import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MainMenu from './Game/MainMenu'
import LevelMenu from './Game/LevelMenu'
import LevelEditor from './Game/LevelEditor'
import ImageLoader from './Game/ImageLoader'
import Board from './Game/Board'
import Fog from './Game/Fog'

import Header from './store/Header'
import ErrorMessage from './store/ErrorMessage'
import Cart from './store/Cart'
import ProductList from './store/ProductList'
import OrderList from './store/OrderList'
import WaitIndicator from './store/WaitIndicator'

function App() {
  return (
    <>
      <ImageLoader />
      <Routes>
        <Route path='/' element={<MainMenu />} />
        <Route path='/game' element={<Board />} />
        <Route path='/levels' element={<LevelMenu />} />
        <Route path='/editor' element={<LevelEditor />} />
      </Routes>
      {/* <Fog /> */}
      
      {/* <Route path='/' component={Header} />
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
      }} /> */}
    </>
  )
}

export default App
