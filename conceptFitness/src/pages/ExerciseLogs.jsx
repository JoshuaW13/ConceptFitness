import React, { useState } from 'react';
import '../App.css';
import SessionLogButton from "../components/SessionLogButton";  
import ExerciseLogButton from "../components/ExerciseLogButton";  
import DropDown from '../components/DropDown';
import ExerciseDataHeader from '../components/ExerciseDataHeader';
import ExerciseData from '../components/ExerciseData';
import LogNavbar from '../components/LogNavBar';

function ExerciseLogs() {
  const exerciseLogs = [];
  for (let i = 0; i < 5; i++) {
    exerciseLogs.push(
      <DropDown
        key={`dropdown-${i}`}
        InitialComponent={ExerciseDataHeader}
        HiddenComponents={ExerciseData}
      />
    );
  }

  return (
    <div className='w-full h-full flex flex-col items-center gap-2'>
      {/* Pass component functions, not JSX */}
      <LogNavbar/>
      <div className='bg-black w-[75%] rounded-lg'>
        <input 
          type="text" 
          placeholder='Search...' 
          className='text-black bg-gray-300 w-full' 
        />
      </div>
      <div className='h-[75%] w-[75%] bg-gray-300 flex flex-col gap-2 overflow-y-auto m-3 scrollbar-hidden'>
        {exerciseLogs}
      </div>
    </div>
  );
}

export default ExerciseLogs;
