import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setTerrainType, addItemToTile, removeItemFromTile, resetLevelEditor } from '../actions/level-maker'

const TileDesign = (props) => {
  const gameState       = useSelector(store => store.game)
  const levelMakerState = useSelector(store => store.levelMaker)
  const dispatch        = useDispatch()

  const [terrainColor, setTerrainColor] = useState ('')
  const [itemColor, setItemColor] = useState('')
  const coord = props.id

  const terrainCheck = ['floor', 'wall', 'door-in', 'door-out']
  const itemCheck    = ['food', 'key', 'sword', 'guard']
  const removeCheck  = ['remove', 'wall', 'door-in', 'door-out']

  const checks = () => {
    let content = levelMakerState.find(tile => tile.coord === coord).content
    // Terrain checks
    if (content.includes('floor'))    { setTerrainColor('grey')  }
    if (content.includes('wall'))     { setTerrainColor('black') }
    if (content.includes('door-in'))  { setTerrainColor('green') }
    if (content.includes('door-out')) { setTerrainColor('red')   }
    // Item checks
    if (content.includes('food'))  { setItemColor('green')  }
    if (content.includes('key'))   { setItemColor('blue')   }
    if (content.includes('sword')) { setItemColor('purple') }
    if (content.includes('guard')) { setItemColor('red')    }
    if (content.includes('empty')) { setItemColor('')       }
  }

  useEffect(() => {
    checks()
  }, [levelMakerState.find(tile => tile.coord === coord).content])

  const clickHandler = () => {
    const val = gameState.selection
    if (terrainCheck.includes(val)) { dispatch(setTerrainType(coord, val)) }
    if (itemCheck.includes(val))    { dispatch(addItemToTile(coord, val))  }
    if (removeCheck.includes(val))  { dispatch(removeItemFromTile(coord))  }
  }

  return (
    <div className='tile' id={props.id} style={{ backgroundColor: terrainColor }} onClick={clickHandler}>
      <div className='item' style={{ backgroundColor: itemColor }}></div>
    </div>
  )
}

export default TileDesign
