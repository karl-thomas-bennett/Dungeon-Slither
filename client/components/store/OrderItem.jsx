import React from 'react'

function OrderItem (props) {
  const { name, quantity, price } = props.product
  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
    </tr>
  )
}

export default OrderItem
