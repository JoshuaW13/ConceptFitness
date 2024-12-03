import React from 'react'
import '../App.css'
import VideoBox from "../assets/VideoBox.png"
import ExerciseImage from "../assets/ExerciseImage.png"

function ExerciseInfoShort({onClick, targetMuscle}) {

  return (
    <div className='bg-[#D8C3A5] w-full h-8 rounded-b-lg overflow-y-auto scrollbar-hidden' onClick={onClick}>
        <p className='text-black'>Target Muscle: {targetMuscle}</p>
    </div>
  )
}

export default ExerciseInfoShort
