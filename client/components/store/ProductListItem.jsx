import React from 'react'

function ProductListItem (props) {
  const product = props.product

  function addToCart () {
    props.addToCart(product)
  }

  return (

    <div className='product'>
      <div className='product-image'>
        <img src={product.img} alt="" />
      </div>
      <div className='product-details'>
        <p className='p name'>Name: {product.name}</p>
        <p className='p description'>Description: {product.description}</p>
        <p className='p price'>Price: ${product.price}</p>
        <p className='p quantity'>Stock: {product.stock}</p>
      <p className='p'>
        <button
          className='button cart-link'
          onClick={addToCart}>Add to cart</button>
      </p>
      </div>

    </div>
  )
}

export default ProductListItem
