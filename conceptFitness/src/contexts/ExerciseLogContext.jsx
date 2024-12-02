import React, { createContext, useState, useContext } from 'react';

const ExerciseLogContext = createContext();

// Create a provider component
export const ExerciseLogProvider = ({ children }) => {
  const [exerciseLogs, setExerciseLogs]=useState([
    {
        id:1,
        exerciseId: 1,
        reps: 10,
        sets: 3,
        weight: 25,
    },
    {
        id:2,
        exerciseId: 2,
        reps: 50,
        sets: 4,
        weight: 0,
    }

  ]);

  const addExerciseLog = (exerciseLog) => {
    setExerciseLogs((prevExerciseLogs) => {
      const exerciseLogExists = prevExerciseLogs.some((p) => p.id === exerciseLog.id);
      
      if (exerciseLogExists) {
        return prevExerciseLogs.map((p) =>
          p.id === exerciseLog.id ? { ...p, ...exerciseLog } : p
        );
      } else {
        return [...prevExerciseLogs, exerciseLog];
      }
    });
  };
  

  const removeExerciseLog = (id) => {
    setExerciseLogs((prevExerciseLogs) => prevExerciseLogs.filter(ex => ex.id !== id));
  };

  const updateExerciseLog = (updatedLog) => {
    setExerciseLogs((prevExerciseLogs) => {
      const existingLog = prevExerciseLogs.find((exerciseLog) => exerciseLog.id === updatedLog.id);
  
      // If the log does not exist, add the updatedLog to the array
      if (!existingLog) {
        return [...prevExerciseLogs, updatedLog];
      }
  
      // If the log exists, update it with the new values
      return prevExerciseLogs.map((exerciseLog) =>
        exerciseLog.id === updatedLog.id
          ? { ...exerciseLog, ...updatedLog }
          : exerciseLog
      );
    });
  };
  
  

  return (
    <ExerciseLogContext.Provider value={{ exerciseLogs, addExerciseLog, removeExerciseLog, updateExerciseLog }}>
      {children}
    </ExerciseLogContext.Provider>
  );
};

// Custom hook to access the context easily
export const useExerciseLogContext = () => {
  return useContext(ExerciseLogContext);
};
