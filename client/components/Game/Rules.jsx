import React from 'react'

function Rules(props) {
  const menuHandle = () => {
    props.history.push('/')
  }

  const editorHandle = () => {
    props.history.push('/editor')
  }

  return (
    <>
      <div className='rules-header'>
        <button className='rules-button-left' onClick={editorHandle}>Back</button>
        <div className='rules-title'>Rules</div>
        <button className='rules-button-right' onClick={menuHandle}>Menu</button>
      </div>
      <div className='border-rules'></div>
      <div className='rules-body'>
        <ul className='rules'>
          <li className='rule'>Wall tiles can be placed anywhere.</li>
          <li className='rule'>Floor tiles cannot be placed on the map edge.</li>
          <li className='rule'>Doors must be placed on the map edge but not too close to the map corners.</li>
          <li className='rule'>A door needs to be 2 tiles wide and placed side by side.</li>
          <li className='rule'>There can only be one exit and one entrance on a map.</li>
          <li className='rule'>There can only be one key and sword on the map.</li>
          <li className='rule'>We recommend placing a guard in a choke point between the start and the end.</li>
          <li className='rule'>We also recommend not blocking the players path to the sword with a guard.</li>
        </ul>
      </div>
    </>
  )
}

export default Rules
