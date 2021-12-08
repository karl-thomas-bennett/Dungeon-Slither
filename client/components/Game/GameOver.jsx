import React from 'react'

function GameOver({ gameState }) {
  const state = gameState.split(' - ')[0]
  const message = state === 'lost' ? gameState.split(' - ')[1] : 'You Win!'
  return (
    <div className='grey-out'>
      <div className='game-over'>
        <h2 className='game-over-title'>Game Over!</h2>
        <p className='game-over-message'>{message}</p>
      </div>
    </div>
  )
}

export default GameOver