import React, { useState } from 'react';
import '../App.css'
import Popup from './Popup'
import Menu from "@mui/icons-material/Menu";
import ExerciseDataPopup from "../components/ExerciseDataPopup"


function ExerciseInfoHeader({onClick}) {
const [isPopupVisible, setIsPopupVisible] = useState(false);
  return (
    <div className='p-2 bg-gray-500 w-full rounded-t-lg font-semibold flex justify-between relative items-start'>
      <div className='flex items-center flex-col justify-betweenvp-2 rounded-lg'onClick={onClick}>
          <p className='text-lg rounded-t-lg'>Exercise: Random Exercise</p>
          <p className='text-base'>Equipment: Random Machine</p>
      </div>
      <button 
        className="text-black bg-gray-300 hover:bg-gray-400 px-1 py-1 w-9 text-center rounded transition duration-200 focus:outline-none" 
        >
        +
      </button>
      <button 
        className="flex items-center text-black bg-gray-300 hover:bg-gray-400 px-1 py-1 rounded transition duration-200 focus:outline-none" 
        onClick={() => setIsPopupVisible(!isPopupVisible)}
        >
        <Menu />
      </button>
      {isPopupVisible && (
        <Popup onClick={() => setIsPopupVisible(false)} Content={ExerciseDataPopup}></Popup>
      )}
    </div>
  )
}

export default ExerciseInfoHeader
