import React from 'react'

const GameOver = ({ gameState, reset, history }) => {
  const state = gameState.split(' - ')[0]
  const message = state === 'lost' ? gameState.split(' - ')[1] : 'You Win!'
  return (
    <>
      <div className='grey-out'>
        <div className='game-over'>
          <h2 className='game-over-title'>Game Over!</h2>
          <p className='game-over-message'>{message}</p>
          <div className='game-over-buttons'>
            <button className='game-over-button' onClick={reset}>Play Again?</button>
            <button className='game-over-button' onClick={() => { history.push('/levels') }}>Level Select</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default GameOver