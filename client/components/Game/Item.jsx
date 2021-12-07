import React from 'react'

const Item = ({ item, direction }) => {
  return (
    // <img src={'/items/' + direction + '-' + item + '.png'} />
    <div>{item}</div>
  )
}

export default Item
