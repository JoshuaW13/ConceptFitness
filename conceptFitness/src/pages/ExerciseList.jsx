import React, { useState } from 'react';
import '../App.css';
import DropDown from '../components/DropDown';
import ExerciseInfoHeader from '../components/ExerciseInfoHeader';
import ExerciseInfo from '../components/ExerciseInfo';
import NavBar from '../components/NavBar';
import HomeButton from '../components/HomeButton'
import ProfileButton from '../components/ProfileButton'
import SlidingDrawer from '../components/SlidingDrawer';
import CatalogueDrawerContent from '../components/CatalogueDrawerContent';

function ExerciseLists() {
  const exerciseLists = [];
  for (let i = 0; i < 10; i++) {
    exerciseLists.push(
      <DropDown
        key={`dropdown-${i}`}
        InitialComponent={ExerciseInfoHeader}
        HiddenComponents={ExerciseInfo}
      />
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center relative gap-2">
      {/* Pass component functions, not JSX */}
      <NavBar FirstButton={HomeButton} SecondButton={ProfileButton}></NavBar>
      <div className='w-[75%] rounded-lg pl-2'>
        <input 
          type="text" 
          placeholder='Search...' 
          className='text-black bg-gray-300 w-full' 
        />
      </div>
      <div className='h-[75%] w-[75%] bg-gray-300 flex flex-col gap-2 p-2 overflow-y-auto m-3 scrollbar-hidden'>
        {exerciseLists}
      </div>
      <SlidingDrawer Content={CatalogueDrawerContent}></SlidingDrawer>
    </div>
  );
}

export default ExerciseLists;
