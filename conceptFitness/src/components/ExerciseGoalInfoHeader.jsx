import React, { useState } from 'react';
import '../App.css'
import Popup from './Popup'
import Menu from "@mui/icons-material/Menu";
import ExerciseDataPopup from "../components/ExerciseDataPopup"
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useGoalContext } from '../contexts/GoalsContext';
import { useExerciseCatalogueContext } from '../contexts/ExerciseCatalogueContext';

function ExerciseGoalInfoHeader({exerciseId, closePopupClick, exerciseName, exerciseEquipment, targetMuscle}) {
  const { setSelectedExercise } = useGoalContext()
  const { exercises } = useExerciseCatalogueContext()

  const clickHandler = () => {
    console.log("Debug")
    setSelectedExercise(exercises.find((e) => e.id == exerciseId).name)
    closePopupClick
  }

  return (
    <div className='w-full'>
      <div className='flex p-1 w-full rounded-t-lg font-semibold'>
        <div className="flex flex-col rounded-lg w-full relative">
            <p className='flex text-lg rounded-t-lg justify-center'>{exerciseName}</p>
            <p className='flex pt-1 justify-center font-normal'>Equipment: {exerciseEquipment}</p>
            <EventAvailableIcon className='absolute right-0 rounded-md bg-gray-400 z-[99]' fontSize='medium' 
              onClick={() => {clickHandler()}}
            />
        </div>
      </div>
      <p className='text-black rounded-b-lg font-normal'>Target Muscle Groups: {targetMuscle}</p>
    </div>
  )
}

export default ExerciseGoalInfoHeader
