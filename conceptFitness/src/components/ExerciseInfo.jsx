import React from 'react'
import '../App.css'
import VideoBox from "../assets/VideoBox.png"


function ExerciseInfo({onClick}) {

  return (
    <div className='bg-gray-200 w-full rounded-lg font-semibold' onClick={onClick}>
        <p className='text-black'>Muscle: Maximus Gluteus</p>
        <p className='text-black'>Description:</p>
        <p className='text-black pl-10 pr-10'>--------------------------------------------------------------------------------------------------------</p>
        <img src={VideoBox} alt="" className='pl-10 pr-10 pb-5 pt-5' />
    </div>
  )
}

export default ExerciseInfo
