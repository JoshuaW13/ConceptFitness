import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';


function ExerciseLogPage() {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/exerciseLogs")
  }

  return (
    <button className="text-black text-sm font-bold w-1/4 bg-gray-300 h-10 flex items-center justify-center hover:bg-gray-200 focus:outline-none"
      onClick={handleClick}
    >
        <p>Exercises</p>
    </button>
  )
}

export default ExerciseLogPage
