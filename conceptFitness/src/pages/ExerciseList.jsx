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
import SearchBar from '../components/SearchBar';

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
      <SearchBar/>
      <div className='h-[80%] w-[85%] flex flex-col bg-gray-200 gap-2 p-2 rounded-lg overflow-y-auto m-2 scrollbar-hidden'>
        {exerciseLists}
      </div>
      <SlidingDrawer Content={CatalogueDrawerContent}></SlidingDrawer>
    </div>
  );
}

export default ExerciseLists;
