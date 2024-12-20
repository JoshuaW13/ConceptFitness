import React, { useEffect, useState } from 'react';
import '../App.css'
import Popup_FullScreen from './Popup_FullScreen';
import { useGoalContext } from '../contexts/GoalsContext';
import { useExerciseCatalogueContext } from '../contexts/ExerciseCatalogueContext';
import CalenderExercisePopup from './CalenderExercisePopup';
import dayjs from 'dayjs'

function AddGoalPopup({date, message, onConfirm, setIsExercisePopupVisible}) {
  const { goalTypes, addGoal, selectedExercise, setSelectedExercise } = useGoalContext()
  const { exercises } = useExerciseCatalogueContext()

  const [selectedGoal, setSelectedGoal] = useState("Select a Goal")
  const [valueLabel, setValueLabel] = useState("")
  const [unitLabel, setUnitLabel] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [dateValue, setDateValue] = useState(date)

  const handleGoalChange = (event) => {
    setSelectedGoal(event.target.value)
    setValueLabel(goalTypes.find((g) => g.goal == event.target.value).text)
    setUnitLabel(goalTypes.find((g) => g.goal == event.target.value).unit)
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDateChange = (event) => {
    setDateValue(event.target.value);
  };

  const addClickHandler = (event) => {
    event.stopPropagation() 
    if(selectedGoal.includes("Weight Loss") || selectedGoal.includes("Weight Gain")) {
      addGoal(goalTypes.find((g) => g.goal == selectedGoal).id, 0, inputValue, dayjs(dateValue).format('MMM D, YYYY')) 
    }
    else {
      addGoal(goalTypes.find((g) => g.goal == selectedGoal).id, exercises.find((e) => e.name == selectedExercise).id, inputValue, dayjs(dateValue).format('MMM D, YYYY')) 
    }
    onConfirm()
  }

  useEffect(() => {
    // console.log(dateValue)
  }, [dateValue])

  useEffect(() => {
    if (selectedGoal.includes("Weight Loss") || selectedGoal.includes("Weight Gain")) {
      // console.log(selectedExercise)
    }
  }, [selectedGoal, selectedExercise])
  
  return (
    <div className="flex flex-col gap-2 h-full w-full">
      <p className='font-bold text-2xl'>{message}</p>
      <select id="goal-select" defaultValue="" onChange={handleGoalChange} className='h-10 rounded-md bg-[#EAE7DC] border-[3px] border-[#D8C3A5] font-bold text-[#E85A4F]' autoComplete='off'>
        <option value="" disabled>
          Select a Goal
        </option>
        {goalTypes.map((goalType) => (
          <option key={goalType.id} value={goalType.goal}>
            {goalType.goal}
          </option>
        ))}
      </select>
      {!(selectedGoal == "Select a Goal" || selectedGoal == "" || selectedGoal.includes("Weight Loss") || selectedGoal.includes("Weight Gain")) && (
        <button onClick={() => {setIsExercisePopupVisible(true)}} className='h-10 rounded-md bg-[#EAE7DC] border-[3px] border-[#D8C3A5] font-bold text-[#E85A4F]'>{selectedExercise}</button>
      )}
      { valueLabel != "" && unitLabel != "" && (
        <div className='flex flex-col gap-2'>
          <div className='flex w-full'>
            <p className='text-lg mx-3 justify-center'>{valueLabel}</p>
            <input
              id="value-input"
              type='number'
              value={inputValue}
              onChange={handleInputChange}
              placeholder={"  Enter value"}
              className='h-10 rounded-md bg-[#EAE7DC] border-[3px] border-[#D8C3A5] font-bold text-[#E85A4F] mx-5'
            ></input>
            <p className='text-lg mx-3 justify-center items-center align-middle text-center'>{unitLabel}</p>
          </div>
          <input value={dayjs(date).format('YYYY-MM-DD')} onChange={handleDateChange} type='date' className='h-10 rounded-md bg-[#EAE7DC] border-[3px] border-[#D8C3A5] font-bold text-[#E85A4F]'></input>
        </div>
      )}
      { inputValue != "" && (
        <button onClick={addClickHandler} className="button h-10 rounded-md text-xl pl-2 pr-2">Add New Goal!</button>
      )}
    </div>
  )
}

export default AddGoalPopup