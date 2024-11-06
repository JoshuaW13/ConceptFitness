import React, { useState } from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import HomeButton from '../components/HomeButton';
import ExerciseInfo from '../components/ExerciseInfo';
import ProgramLog from '../components/ProgramLog';
import DropDown from '../components/DropDown';

function Programs() {
  const ProgramLogs = [];
  const exerciseLists = [];

  for (let i = 0; i < 5; i++) {
    exerciseLists.push(() => <ExerciseInfo key={i} />); 
  }

  for (let i = 0; i < 5; i++) {
      ProgramLogs.push(
          <DropDown
              key={i}
              InitialComponent={ProgramLog}
              HiddenComponents={exerciseLists} 
          />
      );
  }

  return (
      <div className='w-full h-full flex flex-col items-center gap-2'>
          <NavBar FirstButton={HomeButton} />
          <div className='bg-black w-[75%] rounded-lg'>
              <input type="text" placeholder='Search...' className='text-black bg-gray-300 w-full' />
          </div>
          <div className='h-[75%] w-[75%] bg-gray-200 flex flex-col gap-2 overflow-y-auto m-3 scrollbar-hidden'>
              {ProgramLogs}
          </div>
      </div>
  );
}

export default Programs
