import React from 'react'
import '../App.css'
import VideoBox from "../assets/VideoBox.png"
import ExerciseImage from "../assets/ExerciseImage.png"

function ExerciseInfoShortish({onClick}) {

  return (
    <div className='bg-gray-200 w-full h-[100%] rounded-lg font-semibold overflow-y-auto scrollbar-hidden' onClick={onClick}>
        <p className='text-black'>Description:</p>
        <p className='text-black pl-3 pr-3'>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
    </div>
  )
}

export default ExerciseInfoShortish
