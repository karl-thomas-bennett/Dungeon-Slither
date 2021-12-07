import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <>
      <nav className='nav'>
        <Link to='/store'>Shop</Link>
        <Link to='/store/cart'>Cart</Link>
        <Link to='/store/orders'>My Orders</Link>
      </nav>
      <h1>
        <span className='fa fa-leaf' aria-hidden='true' />
        {' '}Dungeon Cralwer Merch{' '}
        <span className='fa fa-leaf' aria-hidden='true' />
      </h1>
    </>
  )
}

export default Header
