import React, { useState, useEffect } from 'react';
import '../App.css'
import { useGoalContext } from '../contexts/GoalsContext';
import { useExerciseCatalogueContext } from '../contexts/ExerciseCatalogueContext';

function GoalBox({id}) {
  const { exercises } = useExerciseCatalogueContext()
  const { assignedGoals, goalTypes } = useGoalContext()

  const [goalType, setGoalType] = useState("")
  const [exerciseName, setExerciseName] = useState("")
  const [goalValue, setGoalValue] = useState("")  

  const getGoalInfo = (id) => {
    setGoalType(goalTypes.find((goal) => goal.id == (assignedGoals.find((g) => g.id == id).goalType)).goal)
    setExerciseName(() => {(assignedGoals.find((g) => g.id == id)).exercise == 0 ?  "" : (exercises.find(((exercise) => exercise.id == (assignedGoals.find((g) => g.id == id)).exercise))).name})
    setGoalValue((assignedGoals.find((g) => g.id == id)).value + "" + (goalTypes.find((goal) => goal.id == (assignedGoals.find((g) => g.id == id).goalType))).unit)
  }

  useEffect(() => {
    getGoalInfo(id);
  });

  return (
    <div className = ''>
      <p> {goalType} </p>
      <p> {exerciseName} </p>
      <p> {goalValue} </p>
    </div>
  )
}

export default GoalBox
