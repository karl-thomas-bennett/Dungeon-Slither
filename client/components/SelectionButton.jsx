import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setSelection } from '../actions/level-data'

const SelectionButton = (props) => {
  const selection = useSelector(store => store.levelData.selection)
  const dispatch  = useDispatch()

  const selectionHandler = (selection) => { dispatch(setSelection(selection)) }

  return (
    <button className='selection-button' disabled={selection === props.value} onClick={() => selectionHandler(props.value)}>{props.name}
      <div className='selection-legend'></div>
    </button>
  )
}

export default SelectionButton
