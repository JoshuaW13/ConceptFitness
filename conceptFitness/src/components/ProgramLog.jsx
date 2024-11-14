import React from 'react'
import '../App.css'


function ProgramLog({onClick}) {

  return (
    <div className='bg-gray-400 w-full rounded-t-lg font-semibold' onClick={onClick}>
        <p className='text-lg bg-gray-500 rounded-t-lg'>Program Name: Insert Name Here</p>
        <p className='text-base'>Tag: Random Tag(s)</p>
        <p className='text-base'># of Exercises: -</p>
    </div>
  )
}

export default ProgramLog
