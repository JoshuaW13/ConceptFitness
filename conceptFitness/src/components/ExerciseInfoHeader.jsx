import React, { useState } from 'react';
import '../App.css'
import Popup from './Popup'
import Menu from "@mui/icons-material/Menu";
import ExerciseDataPopup from "../components/ExerciseDataPopup"


function ExerciseInfoHeader({onClick, exerciseName, exerciseEquipment, targetMuscle, handleClick}) {
const [isPopupVisible, setIsPopupVisible] = useState(false);
  return (
    <div className='w-full'>
      <div className='flex p-1 w-full rounded-t-lg font-semibold'>
        <div className="flex flex-col rounded-lg w-[92%]" onClick={onClick}>
            <p className='flex text-lg rounded-t-lg justify-center'>{exerciseName}</p>
            <p className='flex pt-1 justify-center'>Equipment: {exerciseEquipment}</p>
        </div>
        <div className='flex flex-col justify-between relative'>
          <button 
            onClick={handleClick}
            className="flex text-black bg-green-500 hover:bg-gray-400 w-6 h-6 px-1.5 text-center rounded transition duration-200 focus:outline-none" 
            >
            +
          </button>
          <button 
            className="flex items-center text-black bg-gray-300 hover:bg-gray-400 w-6 h-6 rounded transition duration-200 focus:outline-none" 
            onClick={(e) => {setIsPopupVisible(!isPopupVisible); e.stopPropagation()}}
            >
            <Menu />
          </button>
          {isPopupVisible && (
            <Popup onClick={(e) => {setIsPopupVisible(!isPopupVisible); e.stopPropagation()}} Content={ExerciseDataPopup}></Popup>
          )}
        </div>
      </div>
      <p className='text-black rounded-b-lg'>Target Muscle Groups: {targetMuscle}</p>
    </div>
  )
}

export default ExerciseInfoHeader
