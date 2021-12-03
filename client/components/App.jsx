import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MainMenu from './MainMenu'
import BoardPrototype from './BoardPrototype'
import LevelEditor from './LevelEditor'
import Fog from './Fog'

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