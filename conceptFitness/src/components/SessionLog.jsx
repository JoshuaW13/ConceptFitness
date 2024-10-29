import React from 'react'
import '../App.css'


function ExerciseLog({onClick}) {

  return (
    <div className='bg-gray-400 w-full rounded-t-lg font-semibold' onClick={onClick}>
        <p className='text-lg bg-gray-500 rounded-t-lg'>Program Name: Insert Name Here</p>
        <p className='text-base'>Date: Random Date</p>
        <p className='text-base'>Duration: 0 seconds</p>
    </div>
  )
}

export default ExerciseLog
