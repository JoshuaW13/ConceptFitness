import React, { createContext, useState, useContext } from 'react';
import { useNotifContext } from "../contexts/NotifContext.jsx";

const GoalContext = createContext();

// Create a provider component
export const GoalProvider = ({ children }) => {
  const { showNotif } = useNotifContext();

  const [assignedGoals, setAssignedGoals] = useState([{
      id: 1,
      goalType: 1,
      exercise: 0,
      value: 10,
      date: "Dec 10, 2024"
    },
    {
      id: 2,
      goalType: 1,
      exercise: 1,
      value: 10,
      date: "Dec 10, 2024"
    },
    {
      id: 3,
      goalType: 1,
      exercise: 1,
      value: 10,
      date: "Dec 10, 2024"
    },
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
    setPrograms((prevGoals) => {
      const goalExists = prevGoals.some((g) => (g.goalType === newGoal.goalType && g.date === newGoal.date));
      
      if (goalExists) {
        showNotif("Goal Updated")
        return prevGoals.map((g) =>
          (g.goalType === newGoal.goalType && g.date === newGoal.date) ? { ...g, ...newGoal } : g
        );
      } else {
        showNotif("Goal Added")
        return [...prevGoals, newGoal];
      }
    });
  };
  

  const removeGoal = (id) => {
    setAssignedGoals((prevGoals) => prevGoals.filter((g) => g.id !== id));
  };

  return (
    <GoalContext.Provider value={{ assignedGoals, goalTypes, addGoal, removeGoal }}>
      {children}
    </GoalContext.Provider>
  );
};

// Custom hook to access the context easily
export const useGoalContext = () => {
  return useContext(GoalContext);
};
