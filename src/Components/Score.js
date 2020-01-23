import React from 'react'

export default function Score(props) {
  return (
    <div>
      <div className="game-info">
        <p>Mine Count: {props.mineCount}</p>
        <p>Game Status: {props.gameStatus}</p>
      </div>
    </div>
  )
}
