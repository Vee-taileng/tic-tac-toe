import React from 'react'
import "./ResetButton.css"

const ResetButton = ({resetBoard}) => {
  return (
    <button className='reset-board' onClick={resetBoard}>Reset Game</button>
  )
}

export default ResetButton
