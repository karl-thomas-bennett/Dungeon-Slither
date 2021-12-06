import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setSelection } from '../actions/level-maker'

const SelectionButton = (props) => {
  const selection = useSelector(store => store.game.selection)
  const dispatch  = useDispatch()

  const selectionHandler = (selection) => { dispatch(setSelection(selection)) }

  return (
    <button className='selection-button' disabled={selection === props.value} onClick={() => selectionHandler(props.value)}>{props.name}</button>
  )
}

export default SelectionButton
