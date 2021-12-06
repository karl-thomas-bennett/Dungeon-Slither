import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setSelection } from '../actions/level-data'

const SelectionButton = (props) => {
  const selection = useSelector(store => store.levelData.selection)
  const dispatch  = useDispatch()
  const [legend, setLegend] = useState('')

  const selectionHandler = (selection) => { dispatch(setSelection(selection)) }

  useEffect(() => {
    if (props.value === 'floor')    { setLegend('grey')   }
    if (props.value === 'wall')     { setLegend('black')  }
    if (props.value === 'door-in')  { setLegend('green')  }
    if (props.value === 'door-out') { setLegend('orange') }
    if (props.value === 'food')     { setLegend('yellow') }
    if (props.value === 'key')      { setLegend('blue')   }
    if (props.value === 'sword')    { setLegend('purple') }
    if (props.value === 'guard')    { setLegend('red')    }
    if (props.value === 'empty')    { setLegend('')       }
  }, [])

  return (
    <button className='selection-button' disabled={selection === props.value} onClick={() => selectionHandler(props.value)}>{props.name}
      <div className='selection-legend' style={{backgroundColor: legend}}></div>
    </button>
  )
}

export default SelectionButton
