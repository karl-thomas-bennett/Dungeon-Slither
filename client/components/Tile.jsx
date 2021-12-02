import React, { useState, useEffect } from 'react'

const Tile = (props) => {
  const [style, setStyle] = useState ('')
  const [item, setItem] = useState('')

  useEffect(() => {
    props.content.includes('floor') ? setStyle('grey') :
    props.content.includes('wall') ? setStyle('black') :
    props.content.includes('door-in') ? setStyle('green') : setStyle('red')

    props.content.includes('food') ? setItem('green') :
    props.content.includes('sword') ? setItem('blue') :
    props.content.includes('key') ? setItem('purple') :
    props.content.includes('guard') ? setItem('red') : setItem('transparent')
  }, [])

  return (
    <div className='tile' id={props.id} style={{ backgroundColor: style }}>
      <div className='item' style={{ backgroundColor: item }}></div>
    </div>

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
