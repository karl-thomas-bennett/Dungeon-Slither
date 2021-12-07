import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MainMenu from './Game/MainMenu'
import LevelMenu from './Game/LevelMenu'
import LevelEditor from './Game/LevelEditor'
import Fog from './Game/Fog'
import Board from './Game/Board'
import ImageLoader from './Game/ImageLoader'

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
      <Fog />
    </>
  )
}

export default App