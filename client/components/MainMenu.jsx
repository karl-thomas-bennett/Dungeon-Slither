import React from 'react'
import { Link } from 'react-router-dom'

const MainMenu = () => {

  return (
    <>
      <div className='menu-logo'>
        <img className='logo-img' src='images/Logo.png' alt='Dungeon Slither'></img>
      </div>
      <div className='menu-buttons'>
        <Link to='/game'  ><button className='menu-button'>
          <div className='button-inner'>
            <p className='button-text'>GAME</p>
          </div>
        </button></Link>
        <Link to='/editor'  ><button className='menu-button'>
          <div className='button-inner'>
            <p className='button-text'>EDITOR</p>
          </div>
        </button></Link>
        <Link to='/store'  ><button className='menu-button'>
          <div className='button-inner'>
            <p className='button-text'>STORE</p>
          </div>
        </button></Link>
      </div>
    </>

  )
}

export default MainMenu
