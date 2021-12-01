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
      <div className='item' style={{backgroundColor: item}}></div>
    </div>
  )
}

export default Tile
