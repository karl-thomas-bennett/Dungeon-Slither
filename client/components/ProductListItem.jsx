import React from 'react'

function ProductListItem (props) {
  const product = props.product

  function addToCart () {
    props.addToCart(product)
  }

  return (
    <div className='product'>
      <p className='name'>{product.name}</p>
      <p className='description'>{product.description}</p>
      <p className= "price">{product.price}</p>
      <p className= "stock">{product.stock}</p>

      <p>
        <button
          className='cart-link'
          onClick={addToCart}>Add to cart</button>
      </p>
    </div>
  )
}

export default ProductListItem
