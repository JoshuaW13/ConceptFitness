// ExerciseCatalogueContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context with an empty array for exercises
const ExerciseCatalogueContext = createContext();

// Create a provider component
export const ExerciseCatalogueProvider = ({ children }) => {
  // Use React's useState hook to manage the list of exercises
  const [exercises, setExercises] = useState([
    { id: 1, name: "Pull Up", equipment: "Pull Up Bar", targetMuscle: "Back, Arms" },
    { id: 2, name: "Pushup", equipment: "NA", targetMuscle: "Chest, Triceps" },
    { id: 3, name: "Muscle Up" , equipment: "Pull Up Bar", targetMuscle: "Back, Chest, Tricep"},
    { id: 4, name: "Squat" , equipment: "Squat Rack", targetMuscle: "Hamstring, Glutes"},
    { id: 5, name: "Bench Press" , equipment: "Bench and Barbell", targetMuscle: "Chest, Arms"},
    { id: 6, name: "Dips" , equipment: "Dip Bar", targetMuscle: "Chest, Triceps"},
    { id: 7, name: "Cable Row" , equipment: "Cable Row Machine", targetMuscle: "Back"},
    { id: 8, name: "Bulgarian Split Squat" , equipment: "Bench", targetMuscle: "Mamstring, Glutes"},
    { id: 9, name: "Nordic Hamstring Curl" , equipment: "Foot Anchor", targetMuscle: "Hamstrings"},
    { id: 10, name: "Military press" , equipment: "Dumbbells", targetMuscle: "Shoulders, Arms"},
    { id: 11, name: "Bicep Curls" , equipment: "Dumbbells", targetMuscle: "Bicep"},
    { id: 12, name: "Hammer Curls" , equipment: "Dumbbells", targetMuscle: "Bicep, Wrists"},
    { id: 13, name: "Deadlift", equipment: "Barbell", targetMuscle: "Back, Hamstrings, Glutes" },
    { id: 14, name: "Front Squat", equipment: "Barbell", targetMuscle: "Quads, Glutes" },
    { id: 15, name: "Overhead Squat", equipment: "Barbell", targetMuscle: "Core, Shoulders, Quads" },
    { id: 16, name: "Lunges", equipment: "Dumbbells", targetMuscle: "Quads, Glutes" },
    { id: 17, name: "Lat Pulldown", equipment: "Pulldown Machine", targetMuscle: "Back, Biceps" },
    { id: 18, name: "Chest Fly", equipment: "Cable Machine", targetMuscle: "Chest" },
    { id: 19, name: "Leg Press", equipment: "Leg Press Machine", targetMuscle: "Quads, Glutes" },
    { id: 20, name: "Calf Raises", equipment: "NA", targetMuscle: "Calves" },
    { id: 21, name: "Plank", equipment: "NA", targetMuscle: "Core" },
    { id: 22, name: "Side Plank", equipment: "NA", targetMuscle: "Core, Obliques" },
    { id: 23, name: "Russian Twists", equipment: "Medicine Ball", targetMuscle: "Core, Obliques" },
    { id: 24, name: "Barbell Row", equipment: "Barbell", targetMuscle: "Back, Biceps" },
    { id: 25, name: "Kettlebell Swing", equipment: "Kettlebell", targetMuscle: "Hamstrings, Glutes, Core" },
    { id: 26, name: "Arnold Press", equipment: "Dumbbells", targetMuscle: "Shoulders, Arms" },
    { id: 27, name: "Face Pulls", equipment: "Cable Machine", targetMuscle: "Rear Delts, Traps" },
    { id: 28, name: "Tricep Pushdown", equipment: "Cable Machine", targetMuscle: "Triceps" },
    { id: 29, name: "Incline Bench Press", equipment: "Bench and Barbell", targetMuscle: "Upper Chest, Arms" },
    { id: 30, name: "Romanian Deadlift", equipment: "Barbell", targetMuscle: "Hamstrings, Glutes" },
    { id: 31, name: "Single-Arm Dumbbell Row", equipment: "Dumbbell", targetMuscle: "Back, Biceps" },
    { id: 32, name: "Seated Shoulder Press", equipment: "Dumbbells", targetMuscle: "Shoulders, Arms" },
    { id: 33, name: "Reverse Fly", equipment: "Dumbbells", targetMuscle: "Rear Delts" },
    { id: 34, name: "Mountain Climbers", equipment: "NA", targetMuscle: "Core, Legs" },
    { id: 35, name: "Burpees", equipment: "NA", targetMuscle: "Full Body" },
    { id: 36, name: "Hanging Leg Raises", equipment: "Pull Up Bar", targetMuscle: "Core, Hip Flexors" },
    { id: 37, name: "Farmer's Walk", equipment: "Dumbbells", targetMuscle: "Grip, Shoulders, Core" },
    { id: 38, name: "Good Mornings", equipment: "Barbell", targetMuscle: "Hamstrings, Lower Back" },
    { id: 39, name: "Sumo Deadlift", equipment: "Barbell", targetMuscle: "Hamstrings, Glutes" },
    { id: 40, name: "Zercher Squat", equipment: "Barbell", targetMuscle: "Quads, Core" },
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
