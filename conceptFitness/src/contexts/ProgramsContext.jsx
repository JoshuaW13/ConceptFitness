import React, { createContext, useState, useContext } from 'react';

const ProgramContext = createContext();

// Create a provider component
export const ProgramProvider = ({ children }) => {
  const [programs, setPrograms]=useState([{
    id: 1,
    name: "Monday Arms",
    tags: ["arms", "upper body", "fun"],
    exercises:[1,2,5,6,10],
  },
  {
    id: 2,
    name: "Tuesday Kicks",
    tags: ["legs", "glutes"],
    exercises:[4,9,14,15],
  }
  ]);

  const addProgram = (program) => {
    setPrograms((prevPrograms) => [...prevPrograms, program]);
  };

  const removeProgram = (id) => {
    setPrograms((prevPrograms) => prevPrograms.filter(ex => ex.id !== id));
  };

  const removeExerciseFromProgram = (programId, exerciseId) => {
    setPrograms((prevPrograms) => {
      return prevPrograms.map((program) => {
        if (program.id === programId) {
          // Remove the exercise from the program's exercises array
          const updatedExercises = program.exercises.filter((exercise) => exercise !== exerciseId);
          return { ...program, exercises: updatedExercises };
        }
        return program;
      });
    });
  };

  return (
    <ProgramContext.Provider value={{ programs, addProgram, removeProgram, removeExerciseFromProgram }}>
      {children}
    </ProgramContext.Provider>
  );
};

// Custom hook to access the context easily
export const useProgramContext = () => {
  return useContext(ProgramContext);
};
