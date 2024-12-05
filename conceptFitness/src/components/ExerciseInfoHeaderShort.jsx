import React, { useState } from 'react';
import '../App.css'
import Popup from './Popup'
import ExerciseDataPopup from './ExerciseDataPopup';

function ExerciseInfoHeaderShort({id, onClick, exerciseName, exerciseEquipment, onRemove, setSearchText, setSearchState }) {
  console.log("THE ID IS "+id)

const [isPopupVisible, setIsPopupVisible] = useState(false);
  return (
    <div className='flex p-1 bg-[#D8C3A5] text-black w-full rounded-t-lg font-semibold'>
      <div className='flex flex-col rounded-lg w-[92%]'onClick={onClick}>
          <p className='text-lg rounded-t-lg'>{exerciseName}</p>
          <p className='text-base'>Equipment: {exerciseEquipment}</p>
      </div>
      <div className='flex flex-col justify-between'>
        <button 
          className="text-black bg-[#E85A4F] hover:bg-gray-400 w-6 h-6 px-1.5 text-center rounded transition duration-200 focus:outline-none"
          onClick={onRemove}
          >
          -
        </button>
        <button 
            onClick={(e)=>{e.stopPropagation();setIsPopupVisible(true)}}
            className="flex text-black bg-gray-300 hover:bg-gray-400 w-6 h-6 px-1.5 text-center rounded transition duration-200 focus:outline-none" 
            >
            +
          </button>
          {isPopupVisible && (
            <Popup onClick={(e) => {setIsPopupVisible(!isPopupVisible); e.stopPropagation()}} Content={()=> <ExerciseDataPopup currentExerciseId={id}/>}></Popup>
          )}
      </div>
    </div>
  )
}

export default ExerciseInfoHeaderShort
