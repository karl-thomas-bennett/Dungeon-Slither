import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setSelection } from '../actions/level-data'

const SelectionButton = (props) => {
  const selection = useSelector(store => store.levelData.selection)
  const dispatch  = useDispatch()

  const valArr = ['floor', 'wall', 'door-in', 'door-out', 'food', 'key', 'sword', 'guard', 'empty']
  const colorArr = ['grey', 'black', 'green', 'orange', 'yellow', 'blue', 'purple', 'red', 'transparent']

  const selectionHandler = (val) => { dispatch(setSelection(val)) }

  return (
    <button className='selection-button' disabled={selection === props.value} onClick={() => selectionHandler(props.value)}>{props.name}
      <div className='selection-legend' style={{backgroundColor: colorArr[valArr.indexOf(props.value)]}}></div>
    </button>
  )
}

export default SelectionButton
