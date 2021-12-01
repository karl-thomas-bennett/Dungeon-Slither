import React from 'react'

function Tile (props) {
  // if (props.snakePos.join(', ') === props.id) {
  //   console.log("Hey " + props.snakePos)
  // }
  // console.log(props.snakePos.join(', ') === props.id)

  return (
    <div className="tile" id={props.id}>
      <svg viewBox="0 0 110 110">
        <use href="assets.svg#tile"></use>
      </svg>
    </div>
  )
}

export default Tile
