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
          <button className="bg-gray-300 text-black pl-2 pr-2" onClick={catalogue}>Edit</button>
          <button className="bg-gray-300 text-black pl-2 pr-2">Delete</button>
    </div>
  )
}

export default ExerciseLogPopup


