import React, { useState } from 'react';
import '../App.css';
import Menu from "@mui/icons-material/Menu";
import Popup from './Popup';
import ExerciseLogPopup from './ExerciseLogPopup';

function ExerciseLog() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <div className='bg-gray-200 w-full rounded-lg shadow-md relative'>
      <div className='flex items-center justify-between bg-gray-100 p-2 rounded-lg mb-4'>
        <p className='text-gray-700 text-base font-semibold'>Exercise Name</p>
        <button 
          className="flex items-center text-black bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded transition duration-200 focus:outline-none" 
          onClick={() => setIsPopupVisible(!isPopupVisible)}
        >
          <Menu />
        </button>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <Popup onClick={() => setIsPopupVisible(false)} Content={ExerciseLogPopup}></Popup>
      )}

      <div className='flex flex-col space-y-2'>
        <p className='text-gray-700'>Set 1</p>
        <p className='text-gray-700'>Set 2</p>
        <p className='text-gray-700'>Set 3</p>
      </div>
    </div>
  );
}

export default ExerciseLog;
