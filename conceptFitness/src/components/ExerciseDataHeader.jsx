import React, { useState } from 'react';
import '../App.css';
import Popup from './Popup';
import Menu from "@mui/icons-material/Menu";
import ExerciseDataPopup from "../components/ExerciseDataPopup";

function ExerciseDataHeader({ onClick }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <div className="p-4 flex bg-gray-200 w-full justify-between items-center relative">
      <div className="flex items-start flex-col justify-between gap-1" onClick={onClick}>
        <p className="text-lg text-gray-800 font-semibold">Exercise: Insert Name Here</p>
        <p className="text-sm text-gray-600">Tags: #</p>
        <p className="text-sm text-gray-600">Equipment: random machine</p>
      </div>

      <button
        className="flex items-center text-gray-700 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        onClick={(event) => {setIsPopupVisible(!isPopupVisible)
          event.stopPropagation();  // Prevent the event from bubbling up to the parent
        }}
      >
        <Menu />
      </button>

      {isPopupVisible && (
        <Popup 
          onClick={(event) => {
            event.stopPropagation();  // Prevent the event from bubbling up to the parent
            setIsPopupVisible(false);  // Close the popup
          }} 
          Content={ExerciseDataPopup} 
        />
      )}
    </div>
  );
}

export default ExerciseDataHeader;
