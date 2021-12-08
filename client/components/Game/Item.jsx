import React from 'react'

const Item = ({ item, direction }) => {
  return (
    <img className={'item ' + direction} src={'/images/state-' + item + '-' + direction + '.png'} />
  )
}

export default Item
