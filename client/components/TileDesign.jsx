import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setTerrainType, addItemToTile, removeItemFromTile, resetLevelEditor } from '../actions/level-maker'

const TileDesign = (props) => {
  const gameState = useSelector(store => store.game)
  const levelMakerState = useSelector(store => store.levelMaker)
  const dispatch = useDispatch()

  const [terrainColor, setTerrainColor] = useState ('')
  const [itemColor, setItemColor] = useState('')
  const coord = props.id
  const itemCheck = ['food', 'key', 'sword', 'guard']

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
  }, [])

  useEffect(() => {
    checks()
  }, [levelMakerState.find(tile => tile.coord === coord).content])

  const clickHandler = () => {
    // Terrain dispatches
    if (gameState.selection === 'floor')    { dispatch(setTerrainType(coord, 'floor'))    }
    if (gameState.selection === 'wall')     { dispatch(setTerrainType(coord, 'wall'))     }
    if (gameState.selection === 'door-in')  { dispatch(setTerrainType(coord, 'door-in'))  }
    if (gameState.selection === 'door-out') { dispatch(setTerrainType(coord, 'door-out')) }
    // Terrain-item dispatches
    if (gameState.selection === 'wall')     { dispatch(removeItemFromTile(coord))         }
    if (gameState.selection === 'door-in')  { dispatch(removeItemFromTile(coord))         }
    if (gameState.selection === 'door-out') { dispatch(removeItemFromTile(coord))         }
    // Item dispatches
    if (gameState.selection === 'food')     { dispatch(addItemToTile(coord, 'food'))      }
    if (gameState.selection === 'key')      { dispatch(addItemToTile(coord, 'key'))       }
    if (gameState.selection === 'sword')    { dispatch(addItemToTile(coord, 'sword'))     }
    if (gameState.selection === 'guard')    { dispatch(addItemToTile(coord, 'guard'))     }
    if (gameState.selection === 'remove')   { dispatch(removeItemFromTile(coord))         }
  }

  return (
    <div className='tile' id={props.id} style={{ backgroundColor: terrainColor }} onClick={clickHandler}>
      <div className='item' style={{ backgroundColor: itemColor }}></div>
    </div>
  )
}

export default TileDesign
