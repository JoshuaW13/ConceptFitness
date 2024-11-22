// ExerciseCatalogueContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context with an empty array for exercises
const ExerciseCatalogueContext = createContext();

// Create a provider component
export const ExerciseCatalogueProvider = ({ children }) => {
  // Use React's useState hook to manage the list of exercises
  const [exercises, setExercises] = useState([
    { id: 1, name: "pull up", equipment: "pull up bar", targetMuscle: "back, arms" },
    { id: 2, name: "pushup", equipment: "NA", targetMuscle: "chest, triceps" },
    { id: 3, name: "muscle up" , equipment: "pull up bar", targetMuscle: "back, chest, tricep"},
    { id: 4, name: "squat" , equipment: "squat rack", targetMuscle: "hamstring, glutes"},
    { id: 5, name: "bench press" , equipment: "bench and barbell", targetMuscle: "chest, arms"},
    { id: 6, name: "dips" , equipment: "dip bar", targetMuscle: "chest, triceps"},
    { id: 7, name: "cable row" , equipment: "cable row machine", targetMuscle: "back"},
    { id: 8, name: "Bulgarian split squat" , equipment: "bench", targetMuscle: "hamstring, glutes"},
    { id: 9, name: "Nordic Hamstring curl" , equipment: "foot anchor", targetMuscle: "hamstrings"},
    { id: 10, name: "Military press" , equipment: "dumbbells", targetMuscle: "shoulders, arms"},
    { id: 11, name: "Bicep curls" , equipment: "dumbbells", targetMuscle: "bicep"},
    { id: 12, name: "Hammer curls" , equipment: "dumbbells", targetMuscle: "bicep, wrists"},
  ]);

  // Function to add an exercise
  const addExercise = (exercise) => {
    setExercises((prevExercises) => [...prevExercises, exercise]);
  };

  // Function to remove an exercise
  const removeExercise = (id) => {
    setExercises((prevExercises) => prevExercises.filter(ex => ex.id !== id));
  };

  return (
    <ExerciseCatalogueContext.Provider value={{ exercises, addExercise, removeExercise }}>
      {children}
    </ExerciseCatalogueContext.Provider>
  );
};

// Custom hook to access the context easily
export const useExerciseCatalogueContext = () => {
  return useContext(ExerciseCatalogueContext);
};
