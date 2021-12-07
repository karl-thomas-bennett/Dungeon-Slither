import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import { getLevelsAllAPI } from '../../apis/levels'
import { setDirection } from '../../actions/game'
import { setTilesState } from '../../actions/tiles'
import { prepForJS } from '../../../server/utils'

const LevelMenu = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [levels, setLevels] = useState([])

  useEffect(() => {
    getLevelsAllAPI().then(data => setLevels(data))
  }, [])

  const playLevel = (level) => {
    dispatch(setDirection(level.direction))
    dispatch(setTilesState(prepForJS(level.tiles)))
    navigate('/game')
  }

  return (
    <ul>
      {levels.map(level => (
        <button className='level' key={level.id} onClick={() => playLevel(level)}>{level.name}</button>
      ))}
    </ul>

  )
}

export default LevelMenu
