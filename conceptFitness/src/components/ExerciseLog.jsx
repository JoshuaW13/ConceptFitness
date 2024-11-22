import React, { useState } from 'react';
import '../App.css';
import Menu from "@mui/icons-material/Menu";
import Popup from './Popup';
import ExerciseLogPopup from './ExerciseLogPopup';

function ExerciseLog() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <div className="bg-gray-100 w-full rounded-lg shadow-md mb-4 relative">
      <div className="flex items-center justify-between bg-gray-200 p-3 rounded-lg">
        <p className="text-gray-700 text-sm font-medium">Exercise Name</p>
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
        <p className="text-gray-700 text-sm">Set 1</p>
        <p className="text-gray-700 text-sm">Set 2</p>
        <p className="text-gray-700 text-sm">Set 3</p>
      </div>
    </div>
  );
}

export default ExerciseLog;
