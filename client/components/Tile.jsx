import React, { useState, useEffect } from 'react'

const Tile = (props) => {
  const [style, setStyle] = useState ('')

  useEffect(() => {
    props.content.includes('floor') ? setStyle('grey') :
    props.content.includes('wall') ? setStyle('black') :
    props.content.includes('door-in') ? setStyle('green') : setStyle('red')
  }, [])

  return (
    <div className='tile' id={props.id} style={{ backgroundColor: style }}>
      {/* <svg viewBox='0 0 110 110'>
        <use href='assets.svg#tile'></use>
      </svg> */}
    </div>
  )
}

export default Tile
