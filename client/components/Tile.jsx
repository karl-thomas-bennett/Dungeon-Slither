import React from 'react'

function Tile(props) {
  // if (props.snakePos.join(', ') === props.id) {
  //   console.log("Hey " + props.snakePos)
  // }
  // console.log(props.snakePos.join(', ') === props.id)
  const snakeMap = props.snake.map(segment => {
    return segment[0] + ', ' + segment[1]
  })
  return (
    <div className="tile" id={props.id}>
      <svg viewBox="0 0 110 110">
        <use href="assets.svg#tile"></use>
      </svg>
      {
        snakeMap.includes(props.id) &&
        (
          <svg viewBox="0 0 110 110">
            <use href="assets.svg#head"></use>
          </svg>
        )
      }

    </div>
  )
}

export default Tile
