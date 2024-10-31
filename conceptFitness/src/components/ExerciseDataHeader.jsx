import React, { useState } from 'react';
import '../App.css'
import Popup from './Popup'
import Menu from "@mui/icons-material/Menu";
import ExerciseDataPopup from "../components/ExerciseDataPopup"


function ExerciseDataHeader({onClick}) {
const [isPopupVisible, setIsPopupVisible] = useState(false);
  return (
    <div className='p-2 bg-gray-200 w-full rounded-t-lg font-semibold flex justify-between relative items-start'>
        <div className='flex items-center flex-col justify-betweenvp-2 rounded-lg mb-4 'onClick={onClick}>
            <p className='text-lg rounded-t-lg'>Exercise: Insert Name Here</p>
            <p className='text-base'>Tags: #</p>
            <p className='text-base'>Equipment: random machine</p>
            
      </div>
      <button 
            className="flex items-center text-black bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded transition duration-200 focus:outline-none" 
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

export default ExerciseDataHeader
