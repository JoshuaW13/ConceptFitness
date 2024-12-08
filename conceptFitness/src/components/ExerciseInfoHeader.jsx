import React, { useState } from 'react';
import '../App.css'
import Popup from './Popup'
import Menu from "@mui/icons-material/Menu";
import ExerciseDataPopup from "../components/ExerciseDataPopup"


function ExerciseInfoHeader({exerciseId, onClick, exerciseName, exerciseEquipment, targetMuscle, handleClick}) {

const [isPopupVisible, setIsPopupVisible] = useState(false);
const [isExpanded, setIsExpanded] = useState(false);

const handleTextClick = () => {
  setIsExpanded((prevState) => !prevState);
  onClick();
}

  return (
    <div className='w-full'>
      <div className='flex p-1 w-full rounded-t-lg font-semibold'>
        <div className="flex flex-col rounded-lg w-[92%]" onClick={onClick}>
            <p className='flex text-xl rounded-t-lg justify-center'>{exerciseName}</p>
            <p className='flex pt-1 justify-center text-lg'>Equipment: {exerciseEquipment}</p>
        </div>
        <div className='flex flex-col justify-between relative'>
          <button
            onClick={handleClick}
            className="flex text-black bg-green-500 hover:bg-gray-400 w-6 h-6 px-1.5 text-center rounded transition duration-200 focus:outline-none" 
            >
            +
          </button>
          {isPopupVisible && (
            <Popup onClick={(e) => {setIsPopupVisible(!isPopupVisible); e.stopPropagation()}} Content={()=> <ExerciseDataPopup currentExerciseId={exerciseId}/>}></Popup>
          )}
        </div>
      </div>
      <p className='text-black rounded-b-lg text-lg'>Target Muscle Groups: {targetMuscle}</p>
    </div>
  )
}

export default ExerciseInfoHeader
