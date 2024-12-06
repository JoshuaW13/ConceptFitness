import React, { useEffect, useState } from 'react';
import '../App.css'
import { useGoalContext } from '../contexts/GoalsContext';
import { useExerciseCatalogueContext } from '../contexts/ExerciseCatalogueContext';

function AddGoalPopup({message, onConfirm}) {
  const { goalTypes } = useGoalContext()
  const { exercises } = useExerciseCatalogueContext()

  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedExercise, setSelectedExercise] = useState("");
  const [valueLabel, setValueLabel] = useState("");
  const [unitLabel, setUnitLabel] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleGoalChange = (event) => {
    setSelectedGoal(event.target.value);
    setValueLabel(goalTypes.find((g) => g.goal == selectedGoal).text + ": ")
    setUnitLabel(goalTypes.find((g) => g.goal == selectedGoal).unit)
  };

  const handleExerciseChange = (event) => {
    setSelectedExercise(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  
  return (
    <div className="flex flex-col">
      <p>{message}</p>
      <select id="goal-select" value={selectedGoal} onChange={handleGoalChange}>
        <option value="" disabled>
          -- Select a Goal --
        </option>
        {goalTypes.map((goalType) => (
          <option key={goalType.id} value={goalType.goal}>
            {goalType.goal}
          </option>
        ))}
      </select>
      <select id="exercise-select" value={selectedExercise} onChange={handleExerciseChange} size={5}>
        <option value="" disabled>
          -- Select a Exercise --
        </option>
        {exercises.map((e) => (
          <option key={e.id} value={e.name}>
            {e.name}
          </option>
        ))}
      </select>
      <div className='flex w-full'>
        {valueLabel}
        <input
          id="value-input"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={selectedGoal ? `e.g., 100` : ""}
        ></input>
        {unitLabel}
      </div>
      <button onClick={(e)=>{e.stopPropagation();onConfirm();}} className="bg-gray-300 text-black pl-2 pr-2">Yes</button>
    </div>
  )
}

export default AddGoalPopup