import React, { useState, useEffect } from 'react';
import '../App.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { useGoalContext } from '../contexts/GoalsContext';
import { useExerciseCatalogueContext } from '../contexts/ExerciseCatalogueContext';

function GoalInfoHeader({goalId, goalType, goalExercise, goalValue, goalDate, closePopupClick}) {
  const { goalTypes, removeGoal } = useGoalContext()
  const { exercises } = useExerciseCatalogueContext()
  const [goalTypeText, setGoalTypeText] = useState("")
  const [goalExerciseText, setGoalExerciseText] = useState("")

  const clickHandler = () => {
    removeGoal(goalId)
    closePopupClick
  }

  const getText = () => {
    setGoalTypeText(goalTypes.find((g) => g.id == goalType).goalDate)
    setGoalExerciseText(exercises.find((e) => e.id = goalExercise).name)
  }

  useEffect(() => {
    getText()
  }, [])

  return (
    <div className='w-full'>
      <div className='flex p-1 w-full rounded-t-lg font-semibold'>
        <div className="flex flex-col rounded-lg w-full relative" onClick={closePopupClick}>
            <p className='flex text-lg rounded-t-lg justify-center'>{goalTypeText}</p>
            <p className='flex text-lg rounded-t-lg justify-center'>{goalExerciseText}</p>
            <p className='flex pt-1 justify-center font-normal'>{goalValue}</p>
            <DeleteIcon className='absolute right-0 rounded-md bg-gray-400' fontSize='medium' 
              onClick={() => {clickHandler()}}
            />
        </div>
      </div>
      <p className='text-black rounded-b-lg font-normal'>{goalDate}</p>
    </div>
  )
}

export default GoalInfoHeader
