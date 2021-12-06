import React, { useState, useEffect } from 'react'

// import BoardPrototype from './BoardPrototype'
// import BoardDesign from './BoardDesign'
// import LevelEditor from './LevelEditor'
import Board from './Game/Board'
import ImageLoader from './Game/ImageLoader'

function App() {
  return (
    <>
      {/* <BoardPrototype className='board' /> */}
      {/* <BoardDesign className='board' /> */}
      {/* <LevelEditor /> */}
      <ImageLoader />
      <Board />
    </>
  )
}

export default App