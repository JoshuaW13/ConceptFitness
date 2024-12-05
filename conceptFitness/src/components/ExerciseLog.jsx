import React, { useState } from 'react';
import '../App.css';
import Menu from "@mui/icons-material/Menu";
import Popup from './Popup';
import ExerciseLogPopup from './ExerciseLogPopup';
import { useExerciseCatalogueContext } from '../contexts/ExerciseCatalogueContext';

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
          className="flex items-center justify-center text-gray-700 bg-gray-300 px-4 py-2 rounded-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 w-[33%]"
          onClick={() => setIsPopupVisible(!isPopupVisible)}
        >
          <Menu />
        </button>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <Popup onClick={() => setIsPopupVisible(false)} Content={ExerciseLogPopup} />
      )}

      <div className="flex flex-col space-y-2">
        {exerciseRecord.sets.map((set, index)=>(
        <p key={index}className="text-gray-700 text-lg"><span className='font-semibold'>Set {index+1}:</span>  Weight:{set.weight}kg Reps:{set.reps}</p>
        ))}
      </div>
    </div>
  );
}

export default ExerciseLog;
