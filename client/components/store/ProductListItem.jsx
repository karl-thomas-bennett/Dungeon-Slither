import React from 'react'

function ProductListItem (props) {
  const product = props.product

  function addToCart () {
    props.addToCart(product)
  }

  return (
    <div className='product'>
      <p className='name'>Name: {product.name}</p>
      <p className='description'>Description: {product.description}</p>
      <p className='price'>Price: ${product.price}</p>
      <p className='quantity'>Stock: {product.stock}</p>
      <p>
        <button
          className='cart-link'
          onClick={addToCart}>Add to cart</button>
      </p>
    </div>
  )
}

export default ProductListItem
