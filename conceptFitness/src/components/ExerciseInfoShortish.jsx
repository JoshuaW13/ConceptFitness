import React from 'react'
import '../App.css'
import VideoBox from "../assets/VideoBox.png"
import ExerciseImage from "../assets/ExerciseImage.png"

function ExerciseInfoShortish({onClick, description}) {

  return (
    <div className='bg-[#EAE7DC] w-full h-[100%] rounded-lg font-semibold overflow-y-auto scrollbar-hidden' onClick={onClick}>
        <p className='text-black'>Description:</p>
        <p className='text-black pl-2 pr-3 text-sm'>{description}</p>
    </div>
  )
}

export default ExerciseInfoShortish
