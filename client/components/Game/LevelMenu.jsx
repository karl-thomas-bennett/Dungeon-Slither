import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router'

import { getLevelsAllAPI } from '../../apis/levels'
import { setDirection, setGameState } from '../../actions/game'
import { setTilesState } from '../../actions/tiles'
import { prepForJS } from '../../../server/utils'

const LevelMenu = (props) => {
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const [levels, setLevels] = useState([])

  useEffect(() => {
    getLevelsAllAPI().then(data => setLevels(data))
  }, [])

  const playLevel = (level) => {
    dispatch(setGameState('playing'))
    dispatch(setDirection(level.direction))
    dispatch(setTilesState(prepForJS(level.tiles)))
    props.history.push('/game')
  }

  const refreshHandle = () => {
    getLevelsAllAPI().then(data => setLevels(data))
  }

  const menuHandle = () => {
    props.history.push('/')
  }

  return (
    <>
      <div className='level-header'>
      <button className='level-button-left' onClick={menuHandle}>Menu</button>
      <div className='level-title'>Pick a level to play</div>
      <button className='level-button-right' onClick={refreshHandle}>Refresh</button>
      </div>
      <div className='border-level'></div>
      <div className='level-body'>
        <ul>
          {levels.map(level => (
            <button className='level' key={level.id} onClick={() => playLevel(level)}>{level.name}</button>
          ))}
        </ul>
      </div>
    </>
  )
}

export default LevelMenu
