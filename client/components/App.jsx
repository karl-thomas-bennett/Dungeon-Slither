import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MainMenu from './Game/MainMenu'
import BoardPrototype from './Game/BoardPrototype'
import LevelEditor from './Game/LevelEditor'
import Fog from './Game/Fog'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainMenu />} />
        <Route path='/game' element={<BoardPrototype />} />
        <Route path='/editor' element={<LevelEditor />} />
      </Routes>
      <Fog />
  </>
  )
}

export default App