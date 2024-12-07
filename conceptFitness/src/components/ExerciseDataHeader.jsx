import React, { useState } from 'react';
import '../App.css';
import Popup from './Popup';
import Menu from "@mui/icons-material/Menu";
import ExerciseDataPopup from "../components/ExerciseDataPopup";
import Tag from './Tag';

function ExerciseDataHeader({ onClick, exercise }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <div className="p-4 flex w-full justify-between items-center relative">
      <div className="flex items-start flex-col justify-between gap-1" onClick={onClick}>
        <p className="text-lg text-gray-800 font-semibold">{exercise.name}</p>
        <p className="text-lg text-gray-600">Equipment: {exercise.equipment}</p>
      </div>

      <button
        className="flex text-black bg-green-400 hover:bg-green-600 w-6 h-6 px-1.5 text-center rounded transition duration-200 focus:outline-none"
        onClick={(event) => {setIsPopupVisible(!isPopupVisible)
          event.stopPropagation();  // Prevent the event from bubbling up to the parent
        }}
      >
        +
      </button>

      {isPopupVisible && (
        <Popup 
          onClick={(event) => {
            event.stopPropagation();  // Prevent the event from bubbling up to the parent
            setIsPopupVisible(false);  // Close the popup
          }} 
          Content={()=> <ExerciseDataPopup currentExerciseId={exercise.id}/>} 
        />
      )}
    </div>
  );
}

export default ExerciseDataHeader;
