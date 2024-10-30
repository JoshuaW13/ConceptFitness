import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';


function ExerciseLogPopup() {
  const navigate = useNavigate();

  const exerciseLogs = () =>{
    navigate("/exerciseLogs")
  }
  return (
    <div className="">
          <button onClick={exerciseLogs}>Statistics</button>
          <button>Favorite</button>
          <button>Add to...</button>
    </div>
  )
}

export default ExerciseLogPopup


