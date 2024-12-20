import React from 'react'
import '../App.css'
import VideoBox from "../assets/VideoBox.png"
import ExerciseImage from "../assets/ExerciseImage.png"

function ExerciseInfoShortish({onClick, description}) {

  return (
    <div className='bg-[#EAE7DC] w-full h-[100%] rounded-lg overflow-y-auto scrollbar-hidden' onClick={onClick}>
        <p className='text-black font-semibold text-lg'>Description:</p>
        <p className='text-black pl-2 pr-3 text-base'>{description}</p>
    </div>
  )
}

export default ExerciseInfoShortish
