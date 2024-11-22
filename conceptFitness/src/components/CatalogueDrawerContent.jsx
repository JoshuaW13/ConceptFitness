import React, { useState } from 'react';
import '../App.css';
import EditIcon from '../assets/EditIcon.png'
import BookIcon from '../assets/BookIcon.png'
import DropDown from '../components/DropDown';
import ExerciseInfoHeaderShort from '../components/ExerciseInfoHeaderShort';
import ExerciseInfoShort from '../components/ExerciseInfoShort';
import { useNavigate } from 'react-router-dom';

function CatalogueDrawerContent({plannedExercises}) {
  const navigate = useNavigate();

  const navigatePrograms = () =>{
    navigate("/programs")
  }
  
  return (
    <div className="p-3 h-[85%]">
      <div className="flex flex-row justify-between m-2">
        <button type="text" className="w-[80%] h-8 text-black bg-gray-300 hover:bg-gray-400 pl-2 text-left text-lg bg-[url('./assets/EditIcon.png')]">
          Program Name
        </button>
        <button className='w-[11%] bg-gray-300' onClick={navigatePrograms} >
          <img src={BookIcon} alt="" className="p-1" />
        </button>
      </div>
      <div className="flex flex-row justify-between m-2">
        <p>Tags:</p>
        <input type="text" className="w-[85%] text-black bg-gray-300 pl-2 rounded-md" placeholder="Arm, Upper Body, Triceps, etc..." />
      </div>
      <div className='h-[100%] w-[93%] bg-gray-200 flex flex-col rounded-lg gap-2 overflow-y-auto m-3 scrollbar-hidden'>
        {plannedExercises.map((exercise)=>(
          <div className='p-0.5' key={exercise.id}>
            <ExerciseInfoHeaderShort 
            exerciseName={exercise.name}
            exerciseEquipment={exercise.equipment}            
            ></ExerciseInfoHeaderShort>
            <ExerciseInfoShort
            targetMuscle={exercise.targetMuscle}
            ></ExerciseInfoShort>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogueDrawerContent;
