import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setTileContent } from '../actions/game'
import Item from './Item'
import SnakeSegment from './SnakeSegment'

const Tile = (props) => {
  const dispatch = useDispatch()
  const [style, setStyle] = useState('')
  const [item, setItem] = useState('')

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

  const itemPos = getItemPos(props.snake[0], props.direction)
  const pos = props.id.split(',').map(v => Number(v))
  useEffect(() => {
    if (props.content.includes('guard')) {
      if (itemPos[0] === pos[0] && itemPos[1] === pos[1] && props.item === 'sword') {
        dispatch(setTileContent(props.id, props.content.map(item => item === 'guard' ? 'empty' : item)))
      }
    }
  }, [props.snake])

  return (
    <div className='tile' id={props.id} style={{ backgroundColor: style }}>
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
