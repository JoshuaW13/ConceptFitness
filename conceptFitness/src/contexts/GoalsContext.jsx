import React, { createContext, useState, useContext } from 'react';
import { useNotifContext } from "../contexts/NotifContext.jsx";
import { useProgramContext } from './ProgramsContext.jsx';

const GoalContext = createContext();

// Create a provider component
export const GoalProvider = ({ children }) => {
  const { showNotif } = useNotifContext()
  const { addPrograms } = useProgramContext()

  const [selectedExercise, setSelectedExercise] = useState("")

  const [assignedGoals, setAssignedGoals] = useState([
  ]);

  const [goalTypes, setGoalTypes] = useState([{
      goal: "Weight Gain",
      text: "Target Weight",
      unit: "lbs",
      id: 1,
    },
    {
      goal: "Weight Loss",
      text: "Target Weight",
      unit: "lbs",
      id: 2,
    },
    {
      goal: "Max Reps",
      text: "Target Reps",
      unit: "reps",
      id: 3,
    },
    {
      goal: "Max Weight (set)",
      text: "Target Weight",
      unit: "lbs",
      id: 4,
    },
    {
      goal: "Max Weight (single)",
      text: "Target Weight",
      unit: "lbs",
      id: 5,
    }
  ]);

  const addGoal = (goalType, exercise, value, date) => {
    const newGoal = {goalType: goalType, exercise: exercise, value: value, date: date}
    console.log(newGoal)

    const goalExists = assignedGoals.some((g) => (g.goalType === newGoal.goalType && g.date === newGoal.date && g.exercise == newGoal.exercise))

    console.log(goalExists)
    if (goalExists) {
      showNotif("Goal Exists")
    } else {
      if(assignedGoals.length != 0) {
        newGoal.id = assignedGoals[assignedGoals.length - 1].id + 1
      }
      else {
        newGoal.id = 1
      }
      setAssignedGoals((prevGoals) => [...prevGoals, newGoal])
      showNotif("Goal Added")
    }
  }  


  const removeGoal = (id) => {
    setAssignedGoals((prevGoals) => prevGoals.filter((g) => g.id !== id));
  };

  return (
    <GoalContext.Provider value={{ assignedGoals, goalTypes, addGoal, removeGoal, selectedExercise, setSelectedExercise }}>
      {children}
    </GoalContext.Provider>
  );
};

// Custom hook to access the context easily
export const useGoalContext = () => {
  return useContext(GoalContext);
};
