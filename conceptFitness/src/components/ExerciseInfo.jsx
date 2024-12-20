import React from 'react'
import '../App.css'
import VideoBox from "../assets/VideoBox.png"
import ExerciseImage from "../assets/ExerciseImage.png"

function ExerciseInfo({onClick, description}) {

  return (
    <div className='bg-[#E8E7DC] w-full h-[100%] rounded-lg overflow-y-auto scrollbar-hidden' onClick={onClick}>
        <p className='text-black font-semibold text-xl bg-[#EAE7DC]'>Description:</p>
        <p className='text-black pl-2 pr-3 text-lg bg-[#EAE7DC]'>{description}</p>
        <img src={VideoBox} alt="" className='p-5' />
        <img src={ExerciseImage} alt="" className='p-5' />
    </div>
  )
}

export default ExerciseInfo
