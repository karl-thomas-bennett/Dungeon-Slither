import React from 'react'
import { useDispatch } from 'react-redux'

import { resetLevelEditor } from '../actions/level-maker'

import BoardDesign from './BoardDesign'
import SelectionButton from './SelectionButton'

const LevelEditor = () => {
  const dispatch = useDispatch()

  const resetHandler     = (selection) => { dispatch(resetLevelEditor())      }
  const submitHandler    = (selection) => { dispatch(resetLevelEditor())      }

  return (
    <>
      <div className='editor-board'>
        <BoardDesign />
      </div>
      <div className='editor-selection'>
        <SelectionButton name='Floor'    value='floor'    />
        <SelectionButton name='Wall'     value='wall'     />
        <SelectionButton name='Door-In'  value='door-in'  />
        <SelectionButton name='Door-Out' value='door-out' />
        <SelectionButton name='Food'     value='food'     />
        <SelectionButton name='Key'      value='key'      />
        <SelectionButton name='Sword'    value='sword'    />
        <SelectionButton name='Guard'    value='guard'    />
        <SelectionButton name='Remove'   value='remove'   />
      </div>
      <div className='editor-header'>
        <button onClick={() => resetHandler()}> Reset Map</button>
        <button onClick={() => submitHandler()}>Submit   </button>
      </div>
    </>
  )
}

export default LevelEditor
