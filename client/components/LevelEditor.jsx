import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import { resetLevelEditor } from '../actions/level-maker'

import BoardDesign from './BoardDesign'
import SelectionButton from './SelectionButton'

const LevelEditor = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [nameData, setNameData] = useState('')

  const changeHandle  = (e) => { setNameData(e.target.value) } 
  const resetHandler  = ()  => { dispatch(resetLevelEditor()) }
  const submitHandler = ()  => { if (nameData.length > 0) { dispatch(resetLevelEditor()) } }
  const menuHandle    = ()  => { dispatch(resetLevelEditor()); navigate('/') }
  const rulesHandle   = ()  => { navigate('/editor/rules') }

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
        <button className='header-button' onClick={menuHandle}>Menu</button>
        <button className='header-button' onClick={rulesHandle}>Rules</button>
        <div className='header-input-div'>
          <label htmlFor='name'/>
          <input className='header-input'
            type='text'
            name='name'
            id='name'
            required
            maxLength='30'
            placeholder='Enter a name for your level'
            value={nameData}
            onChange={changeHandle}
          />
        </div>
        <button className='header-button' onClick={resetHandler}>Reset</button>
        <button className='header-button' onClick={submitHandler}>Submit</button>
      </div>
      <div className='border1'></div>
      <div className='border2'></div>
    </>
  )
}

export default LevelEditor
