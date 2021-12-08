import React from 'react'

import Title from './Title'

const MainMenu = (props) => {
  const menuHandle = (link) => {
    props.history.push(link)
  }

  return (
    <>
      <Title />
      <div className='menu-buttons'>
        <button className='menu-button' onClick={() => menuHandle('/levels')}>Play!</button>
        <button className='menu-button' onClick={() => menuHandle('/editor')}>Level Editor</button>
        <button className='menu-button' onClick={() => menuHandle('/store')}>Store</button>
      </div>
    </>

  )
}

export default MainMenu
