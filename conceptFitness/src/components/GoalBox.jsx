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
    if((assignedGoals.find((g) => g.id == id)).exercise != 0) {
      setExerciseName(exercises.find(((exercise) => exercise.id == (assignedGoals.find((g) => g.id == id)).exercise)).name)
    }
    else {
      setExerciseName("")
    }
    setGoalValue((assignedGoals.find((g) => g.id == id)).value + " " + (goalTypes.find((goal) => goal.id == (assignedGoals.find((g) => g.id == id).goalType))).unit)
  }

  useEffect(() => {
    getGoalInfo(id);
  }, []);

  return (
    <div className = 'border-2 m-2 rounded-md border-[#D8C3A5]'>
      <p> {exerciseName} </p>
      <p> {goalType} </p>
      <p> {goalValue} </p>
    </div>
  )
}

export default GoalBox
