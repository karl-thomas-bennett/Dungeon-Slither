import React from 'react'
import { useDispatch } from 'react-redux'

import { setSelection } from '../actions/level-maker'

import BoardDesign from './BoardDesign'

const LevelEditor = () => {
  const dispatch = useDispatch()

  const clickHandler = (selection) => {
    dispatch(setSelection(selection))
  }

  return (
    <>
      <div className='editor-board'>
        <BoardDesign />
      </div>
      <div className='editor-selection'>
        <button onClick={() => clickHandler('floor')}>Floor</button>
        <button onClick={() => clickHandler('wall')}>Wall</button>
        <button onClick={() => clickHandler('door-in')}>Door-In</button>
        <button onClick={() => clickHandler('door-out')}>Door-Out</button>
        <button onClick={() => clickHandler('food')}>Food</button>
        <button onClick={() => clickHandler('key')}>Key</button>
        <button onClick={() => clickHandler('sword')}>Sword</button>
        <button onClick={() => clickHandler('guard')}>Guard</button>
        <button onClick={() => clickHandler('remove')}>Remove</button>
      </div>
      <div className='editor-header'>
        
      </div>
    </>
  )
}

export default LevelEditor
