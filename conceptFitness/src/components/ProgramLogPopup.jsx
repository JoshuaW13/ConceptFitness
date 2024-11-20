import React from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';


function ExerciseLogPopup() {
  const navigate = useNavigate();

  const catalogue = () =>{
    navigate("/catalogue")
  }
  return (
    <div className="flex flex-col">
          <button onClick={catalogue}>Edit</button>
          <button>Delete</button>
    </div>
  )
}

export default ExerciseLogPopup


