import React, { useState } from 'react';
import '../App.css';
import Menu from "@mui/icons-material/Menu";
import Popup from './Popup';
import ExerciseLogPopup from './ExerciseLogPopup';
import { useExerciseCatalogueContext } from '../contexts/ExerciseCatalogueContext';
import ExerciseDataPopup from "../components/ExerciseDataPopup";

function ExerciseLog({exerciseRecord}) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const {exercises}=useExerciseCatalogueContext();

  return (
    <div className="bg-gray-100 w-full rounded-lg shadow-md mb-4 relative">
      <div className="flex items-center justify-between bg-gray-200 p-3 rounded-lg">
        <p className="text-gray-700 text-lg font-semibold">
          {exercises.find((exercise) => exercise.id == exerciseRecord.id).name}
        </p>
        <button
          className="flex text-black bg-gray-300 hover:bg-gray-400 w-6 h-6 px-1.5 text-center rounded transition duration-200 focus:outline-none"
          onClick={(event) => {setIsPopupVisible(!isPopupVisible)
            event.stopPropagation();  // Prevent the event from bubbling up to the parent
          }}
        >
          +
        </button>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <Popup
        onClick={(event) => {
          event.stopPropagation();  // Prevent the event from bubbling up to the parent
          setIsPopupVisible(false);  // Close the popup
        }} 
        Content={()=> <ExerciseDataPopup currentExerciseId={exerciseRecord.id}/>} 
         />
      )}

      <div className="flex flex-col space-y-2">
        {exerciseRecord.sets.map((set, index)=>(
        <p key={index}className="text-gray-700 text-lg"><span className='font-semibold'>Set {index+1}:</span>  Weight:{set.weight} lbs, Reps:{set.reps}</p>
        ))}
      </div>
    </div>
  );
}

export default ExerciseLog;
