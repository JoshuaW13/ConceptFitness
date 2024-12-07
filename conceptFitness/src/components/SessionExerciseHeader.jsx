import React, { useState } from 'react';
import '../App.css'
import StartIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';


function SessionExerciseHeader({exerciseName, onClick}) {
  return (
    <div className='flex justify-center items-center rounded-lg font-semibold text-lg p-2'>
      <button className='flex w-6 h-6 mr-3' onClick={onClick}>
        <StartIcon/>
      </button>
      <p className='flex text-base justify-center'>{exerciseName}</p>
            
    </div>
  )
}

export default SessionExerciseHeader
