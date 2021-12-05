import React, { useState, useEffect } from 'react'

// import BoardPrototype from './BoardPrototype'
// import BoardDesign from './BoardDesign'
// import LevelEditor from './LevelEditor'
import Board from './Board'
import ImageLoader from './ImageLoader'

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