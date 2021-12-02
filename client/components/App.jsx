import React, { useState, useEffect } from 'react'

import BoardPrototype from './BoardPrototype'
import BoardDesign from './BoardDesign'
import LevelEditor from './LevelEditor'

function App () {
  return (
    <>
      {/* <BoardPrototype className='board' /> */}
      {/* <BoardDesign className='board' /> */}
      <LevelEditor />
    </>
  )
}

export default App