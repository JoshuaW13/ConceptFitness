import React, { useState } from 'react';
import '../App.css'
import Popup from './Popup'
import Menu from "@mui/icons-material/Menu";
import ExerciseDataPopup from "../components/ExerciseDataPopup"


function ExerciseInfoHeader({onClick}) {
const [isPopupVisible, setIsPopupVisible] = useState(false);
  return (
    <div className='w-full'>
      <div className='flex p-1 bg-gray-200 w-full rounded-t-lg font-semibold'>
        <div className="flex flex-col rounded-lg w-[92%]" onClick={onClick}>
            <p className='flex text-lg rounded-t-lg justify-center'>Exercise Name</p>
            <p className='flex pt-1 justify-center'>Equipment: Machine Name</p>
        </div>
        <div className='flex flex-col justify-between'>
          <button 
            className="flex text-black bg-gray-300 hover:bg-gray-400 w-6 h-6 px-1.5 text-center rounded transition duration-200 focus:outline-none" 
            >
            +
          </button>
          <button 
            className="flex items-center text-black bg-gray-300 hover:bg-gray-400 w-6 h-6 rounded transition duration-200 focus:outline-none" 
            onClick={() => setIsPopupVisible(!isPopupVisible)}
            >
            <Menu />
          </button>
          {isPopupVisible && (
            <Popup onClick={() => setIsPopupVisible(false)} Content={ExerciseDataPopup}></Popup>
          )}
        </div>
      </div>
      <p className='text-black rounded-b-lg'>Target Muscle: Muscle Name</p>
    </div>
  )
}

export default ExerciseInfoHeader
