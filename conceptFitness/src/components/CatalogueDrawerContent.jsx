import React, { useState } from 'react';
import '../App.css';
import EditIcon from '../assets/EditIcon.png'
import DropDown from '../components/DropDown';
import ExerciseInfoHeader from '../components/ExerciseInfoHeader';
import ExerciseInfo from '../components/ExerciseInfo';

function CatalogueDrawerContent() {
  const exerciseLists = [];
  for (let i = 0; i < 5; i++) {
    exerciseLists.push(
      <DropDown
        key={`dropdown-${i}`}
        InitialComponent={ExerciseInfoHeader}
        HiddenComponents={ExerciseInfo}
      />
    );
  }
  return (
    <div className="p-3">
      <div className="flex flex-row justify-between m-2">
        <button type="text" className="w-[80%] h-8 text-black bg-gray-300 pl-2 text-left text-lg">
          Program Name
        </button>
        <button className='w-[11%] bg-gray-300'>
          <img src={EditIcon} alt="" className="p-1" />
        </button>
      </div>
      <div className="flex flex-row justify-between m-2">
        <p>Tags:</p>
        <input type="text" className="w-[85%] text-black bg-gray-300 pl-2" placeholder="Arm, Upper Body, Triceps, etc..." />
      </div>
      <div className='h-[100%] w-[93%] bg-gray-300 flex flex-col gap-2 overflow-y-auto m-3 scrollbar-hidden'>
        {exerciseLists}
      </div>
    </div>
  );
}

export default CatalogueDrawerContent;
