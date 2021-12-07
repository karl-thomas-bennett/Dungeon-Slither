import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MainMenu from './Game/MainMenu'
import LevelMenu from './Game/LevelMenu'
import LevelEditor from './Game/LevelEditor'
import ImageLoader from './Game/ImageLoader'
import Board from './Game/Board'
// import Fog from './Game/Fog'

import Store from './store/Store'

function App() {
  return (
    <>
      <ImageLoader />
      <Switch>
        <Route exact path='/' component={MainMenu} />
        <Route exact path='/game' component={Board} />
        <Route exact path='/levels' component={LevelMenu} />
        <Route exact path='/editor' component={LevelEditor} />
        <Route path='/store' component={Store} />
      </Switch>
      {/* <Fog /> */}
    </>
  )
}

export default App
