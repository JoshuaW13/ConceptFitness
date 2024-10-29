import React from 'react'
import '../App.css'


function ExerciseLog({onClick}) {

  return (
    <div className='bg-gray-300 w-full' onClick={onClick}>
        <p>Program Name: Insert Name Here</p>
        <p>Date: Random Date</p>
        <p>Duration: 0 seconds</p>
    </div>
  )
}

export default ExerciseLog
