import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav () {
   return(
      <>
         <div className='store-nav'>
            <nav >
               <NavLink to='/store' >
                  <li>Shop</li> 
                  </NavLink>
               <NavLink to='/store/cart' >
                  <li>Cart</li> 
                  </NavLink>
               <NavLink to='/store/orders' >
                  <li>My Orders</li> 
                  </NavLink>
               <NavLink to='/' >
                  <li>Main Menu</li> 
                  </NavLink>
            </nav>
         </div>
      </>
   )
}

export default Nav