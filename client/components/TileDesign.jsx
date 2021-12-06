import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setTerrainType, addItemToTile, removeItemFromTile } from '../actions/level-maker'
import { addDoorIn, addDoorOut, setGuard, setKey, setSword } from '../actions/level-data'

const TileDesign = (props) => {
  const levelDataState  = useSelector(store => store.levelData)
  const levelMakerState = useSelector(store => store.levelMaker)
  const dispatch        = useDispatch()

  const [terrainColor, setTerrainColor] = useState ('')
  const [itemColor, setItemColor] = useState('')
  const coord = props.id
  const upper = String(Math.sqrt(levelMakerState.length) - 1)

  const removeCheck  = ['remove', 'wall', 'door-in', 'door-out']
  const cornerCheck = ['0,0', '0,1', '0,2', '1,0', '2,0', `0,${upper}`, `0,${upper - 1}`, `0,${upper - 2}`, `1,${upper}`, `2,${upper}`, `${upper},0`, `${upper},1`, `${upper},2`, `${upper - 1},0`, `${upper - 2},0`, `${upper},${upper}`, `${upper},${upper - 1}`, `${upper},${upper - 2}`, `${upper - 1},${upper}`, `${upper - 2},${upper}`]

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
    const val = levelDataState.selection
    const bounds = coord.split(',')
    if (bounds.includes('0') || bounds.includes(upper)) {
      if (val === 'door-in') {
        if (levelDataState.doorIn === 0) {
          checkDoorIn(val)
        }
        if (levelDataState.doorIn === 1) {
          if (cornerCheck.includes(coord)) {
            if (checkNeigbors('door-in')) {
              checkDoorIn(val)
            } else {
              alert('Please place the second door piece next to the first')
            }
          } else {
            alert('You cannot place doors too close to the corner')
          }
        }
        if (levelDataState.doorIn === 2) {
          alert('You have already placed an entrance')
        }
      }
      if (val === 'door-out') {
        if (levelDataState.doorOut === 0) {
          checkDoorOut(val)
        }
        if (levelDataState.doorOut === 1) {
          if (cornerCheck.includes(coord)) {
            if (checkNeigbors('door-out')) {
              checkDoorOut(val)
            } else {
              alert('Please place the second door piece next to the first')
            }
          } else {
            alert('You cannot place doors too close to the corner')
          }
        }
        if (levelDataState.doorOut === 2) {
          alert('You have already placed an exit')
        }
      }
      if (val ===  'wall') { dispatch(setTerrainType(coord, val)) }
      if (val === 'floor') { alert('You cannot place floor tiles along the map edge') }
    } else {
      if (val === 'floor' || val === 'wall') { dispatch(setTerrainType(coord, val)) }
      if (val === 'wall') { dispatch(removeItemFromTile(coord)) }
      if (terrainColor === 'grey') {
        if (val === 'guard') {
          if (levelDataState.guard === false) {
            dispatch(setGuard(true))
            dispatch(addItemToTile(coord, val))
          } else {
            alert('You have already placed a guard')
          }
        }
        if (val === 'key') {
          if (levelDataState.key === false) {
            dispatch(setKey(true))
            dispatch(addItemToTile(coord, val))
          } else {
            alert('You have already placed a key')
          }
        }
        if (val === 'sword') {
          if (levelDataState.sword === false) {
            dispatch(setSword(true))
            dispatch(addItemToTile(coord, val))
          } else {
            alert('You have already placed a sword')
          }
        }
        if (val === 'food') {
          dispatch(addItemToTile(coord, val))
        }
      }
    }
    if (removeCheck.includes(val))  { dispatch(removeItemFromTile(coord))  }
  }

  const checkDoorIn = (val) => {
    if (cornerCheck.includes(coord)) {
      alert('You cannot place doors too close to the corner')
    } else {
      dispatch(setTerrainType(coord, val))
      dispatch(addDoorIn())
    }
  }

  const checkDoorOut = (val) => {
    if (cornerCheck.includes(coord)) {
      alert('You cannot place doors too close to the corner')
    } else {
      dispatch(setTerrainType(coord, val))
      dispatch(addDoorOut())
    }
  }

  const checkNeigbors = (input) => {
    const upper = String(Math.sqrt(levelMakerState.length) - 1)
    const coordX = Number(coord.split(',')[1])
    const coordY = Number(coord.split(',')[0])
    const left  = `${coordY},${coordX - 1}`
    const right = `${coordY},${coordX + 1}`
    const up    = `${coordY - 1},${coordX}`
    const down  = `${coordY + 1},${coordX}`

    if (coordX === 0 || coordX === upper) {
      if (levelMakerState.find(tile => tile.coord === up).content.includes(input) ||
          levelMakerState.find(tile => tile.coord === down).content.includes(input) )
      { return true } else { return false }
    }
    if (coordY === 0 || coordY === upper) {
      if (levelMakerState.find(tile => tile.coord === left).content.includes(input) ||
          levelMakerState.find(tile => tile.coord === right).content.includes(input) )
      { return true } else { return false }
    }
  }

  return (
    <div className='tile' id={props.id} style={{ backgroundColor: terrainColor }} onClick={clickHandler}>
      <div className='item' style={{ backgroundColor: itemColor }}></div>
    </div>
  )
}

export default TileDesign
