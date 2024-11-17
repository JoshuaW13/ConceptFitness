import React, { useState } from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import HomeButton from '../components/HomeButton'
import ProfileButton from '../components/ProfileButton'
import ExerciseInfoShortish from '../components/ExerciseInfoShortish';
import ExerciseInfoHeader from '../components/ExerciseInfoHeader'
import ProgramLog from '../components/ProgramLog';
import DropDown from '../components/DropDown';

function Programs() {
  const ProgramLogs = [];
  const exerciseLists = [];

  for (let i = 0; i < 5; i++) {
    exerciseLists.push(
      ()=>
      <DropDown
        key={`dropdown-${i}`}
        InitialComponent={ExerciseInfoHeader}
        HiddenComponents={ExerciseInfoShortish}
      />
    );
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
        <NavBar FirstButton={HomeButton} SecondButton={ProfileButton}></NavBar>
          <div className='bg-black w-[75%] rounded-lg'>
            <input 
            type="text" 
            placeholder='Search...' 
            className='text-black bg-gray-300 w-full text-center rounded-md' 
            />
          </div>
          <div className='h-[80%] w-[85%] flex flex-col bg-gray-200 gap-2 p-2 rounded-lg overflow-y-auto m-2 scrollbar-hidden'>
              {ProgramLogs}
          </div>
      </div>
  );
}

export default Programs
