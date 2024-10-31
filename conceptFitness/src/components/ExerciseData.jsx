import React from 'react'
import '../App.css'
import ExerciseGraph from "../assets/exerciseGraph.jpg"


function ExerciseDataHeader({onClick}) {

  return (
    <div className='bg-gray-200 w-full rounded-lg font-semibold' onClick={onClick}>
        <p>Current Reps: 0</p>
        <p>Current Sets: 0</p>
        <p>Max Weight: 0</p>
        <img src={ExerciseGraph} alt="" />
        <form className=''>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date"  className='bg-gray-200'/>
        </form>
    </div>
  )
}

export default ExerciseDataHeader
