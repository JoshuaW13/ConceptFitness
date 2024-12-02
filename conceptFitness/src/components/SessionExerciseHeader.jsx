import React, { useState } from 'react';
import '../App.css'
import StartIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';


function SessionExerciseHeader({exerciseName, onClick}) {
  return (
    <div className='flex justify-center items-center bg-gray-200 rounded-lg font-semibold text-lg'>
            <p className='flex text-base justify-center'>{exerciseName}</p>
            <button className='flex w-6 h-6 bg-gray-300' onClick={onClick}>
              <StartIcon/>
            </button>
    </div>
  )
}

export default SessionExerciseHeader
