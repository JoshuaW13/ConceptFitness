import React, { useEffect, useState } from 'react';
import '../App.css'
import { useGoalContext } from '../contexts/GoalsContext';

function AddGoalPopup({message, onConfirm}) {
  const { assignedGoals, goalTypes } = useGoalContext()

  const [selectedGoal, setSelectedGoal] = useState("");

  const handleChange = (event) => {
    setSelectedGoal(event.target.value);
  };
  
  return (
    <div className="flex flex-col">
      <p>{message}</p>
      <select id="goal-select" value={selectedGoal} onChange={handleChange}>
        <option value="" disabled>
          -- Select a Goal --
        </option>
        {goalTypes.map((goalType) => (
          <option key={goalType.id} value={goalType.goal}>
            {goalType.goal}
          </option>
        ))}
      </select>
      <button onClick={(e)=>{e.stopPropagation();onConfirm();}} className="bg-gray-300 text-black pl-2 pr-2">Yes</button>
    </div>
  )
}

export default AddGoalPopup