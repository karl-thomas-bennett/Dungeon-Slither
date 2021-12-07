import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGameState, setTileContent } from '../../actions/game'
import Item from './Item'
import SnakeSegment from './SnakeSegment'

const Tile = (props) => {
  const dispatch = useDispatch()
  const tiles = useSelector(store => store.tiles)
  const [style, setStyle] = useState('')
  const [item, setItem] = useState('')
  const [tileImg, setTileImg] = useState('')
  const coord = props.id
  const terrain = props.content[0]

  const snakeMap = props.snake.map(segment => {
    return segment[0] + ',' + segment[1]
  })

  useEffect(() => {
    props.content.includes('floor') ? setStyle('grey') :
      props.content.includes('wall') ? setStyle('black') :
        props.content.includes('door-in') ? setStyle('green') : setStyle('red')

    props.content.includes('food') ? setItem('green') :
      props.content.includes('sword') ? setItem('blue') :
        props.content.includes('key') ? setItem('purple') :
          props.content.includes('guard') ? setItem('red') : setItem('transparent')
  }, [props.content])

  const itemPos = props.snake.length > 0 ? getItemPos(props.snake[0], props.direction) : [-1, -1]
  const pos = props.id.split(',').map(v => Number(v))
  useEffect(() => {
    if (props.content.includes('guard') && props.snake.length > 0) {
      if (itemPos[0] === pos[0] && itemPos[1] === pos[1] && props.item === 'sword') {
        dispatch(setTileContent(props.id, props.content.map(item => item === 'guard' ? 'empty' : item)))
      }
      if (props.snake[0][0] === pos[0] && props.snake[0][1] === pos[1]) {
        dispatch(setGameState('lost - killed by guard'))
      }
    }
    if (props.content.includes('door-out')) {
      if (itemPos[0] === pos[0] && itemPos[1] === pos[1] && props.item === 'key') {
        dispatch(setGameState('won'))
      }
    }
  }, [props.snake])

  useEffect(() => {
    calcImage()
  }, [])

  const calcImage = () => {
    if (terrain === 'floor') {
      const floorArr = ['floor-a', 'floor-b']
      setTileImg(floorArr[Math.floor(Math.random() * floorArr.length)])
    } else {
      const coordX = Number(coord.split(',')[1])
      const coordY = Number(coord.split(',')[0])

      let coordArr = [
        { y: coordY - 1, x: coordX     },
        { y: coordY,     x: coordX + 1 },
        { y: coordY + 1, x: coordX     },
        { y: coordY,     x: coordX - 1 },
        { y: coordY + 1, x: coordX - 1 },
        { y: coordY + 1, x: coordX + 1 }
      ]
      let neigborArr = []

      coordArr.map(coord => neigborArr.push(checkNeigbor(coord.x, coord.y)))
      const tileName = `${neigborArr[0]}${neigborArr[1]}${neigborArr[2]}${neigborArr[3]}-${neigborArr[4]}${neigborArr[5]}`
      checkForImage(tileName)
    }
  }

  const checkNeigbor = (x, y) => {
    if (tiles.find(tile => tile.coord === `${y},${x}`)) {
      const tile = tiles.find(tile => tile.coord === `${y},${x}`).content[0]
      if (tile === 'wall' || tile === 'door-in' || tile === 'door-out') {
        return 'w'
      } else {
        return 'f'
      }
    } else {
      return 'f'
    }
  }

  const checkForImage = (input) => {
    const fileNames = ['ffff', 'fffw', 'ffwf', 'ffww-ff', 'fwff', 'fwfw', 'fwwf-ff', 'fwww-ff', 'fwww-fw', 'fwww-wf', 'wfff', 'wffw', 'wfwf-fw', 'wfwf-wf', 'wfwf-ww', 'wfww', 'wwff', 'wwfw', 'wwwf', 'wwww-ff', 'wwww-fw', 'wwww-wf', 'wwww-ww', 'ffww-wf', 'fwwf-fw', 'wfwf-ff', 'wfww-ff', 'wfww-ww', 'wwwf-ff', 'wwwf-ww', 'fwww', 'fwwf-ww', 'ffww-ww']
    if (fileNames.includes(input)) {
      setTileImg(input)
    } else {
      if (!fileNames.includes(input.substring(0, 4))) {
        console.log('Does not exist')
      }
      setTileImg(input.substring(0, 4))
    }
  }

  return (
    <div className='tile' id={props.id} style={{ backgroundColor: style }}>
      <img src={`/tiles/${tileImg}.png`} className='tile-image'></img>
      <div className='item' style={{ backgroundColor: item }}></div>
      {
        itemPos[0] === pos[0] && itemPos[1] === pos[1] &&
        props.item !== 'none' && <Item item={props.item} direction={props.direction} />
      }
      {
        snakeMap.includes(props.id) &&
        (
          <SnakeSegment snake={props.snake} pos={pos} />
        )
      }
    </div>
  )
}

function getItemPos(snakeHead, direction) {
  switch (direction) {
    case 'left':
      return [snakeHead[0], snakeHead[1] - 1]
    case 'right':
      return [snakeHead[0], snakeHead[1] + 1]
    case 'up':
      return [snakeHead[0] - 1, snakeHead[1]]
    case 'down':
      return [snakeHead[0] + 1, snakeHead[1]]
  }
}
// import React from 'react'

// function Tile(props) {
//   // if (props.snakePos.join(', ') === props.id) {
//   //   console.log("Hey " + props.snakePos)
//   // }
//   // console.log(props.snakePos.join(', ') === props.id)
//   const snakeMap = props.snake.map(segment => {
//     return segment[0] + ', ' + segment[1]
//   })
//   return (
//     <div className="tile" id={props.id}>
//       <svg viewBox="0 0 110 110">
//         <use href="assets.svg#tile"></use>
//       </svg>
//       {
//         snakeMap.includes(props.id) &&
//         (
//           <svg viewBox="0 0 110 110">
//             <use href="assets.svg#head"></use>
//           </svg>
//         )
//       }
//     </div>
//   )
// }

export default Tile
