import React from 'react'
import '../App.css'
import VideoBox from "../assets/VideoBox.png"
import ExerciseImage from "../assets/ExerciseImage.png"

function ExerciseInfo({onClick}) {

  return (
    <div className='bg-gray-200 w-full h-[100%] rounded-lg font-semibold overflow-y-auto scrollbar-hidden' onClick={onClick}>
        <p className='text-black'>Description:</p>
        <p className='text-black pl-3 pr-3'>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
        <img src={VideoBox} alt="" className='p-5' />
        <img src={ExerciseImage} alt="" className='p-5' />
    </div>
  )
}

export default ExerciseInfo
