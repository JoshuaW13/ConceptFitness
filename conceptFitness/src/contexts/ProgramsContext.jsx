import React, { createContext, useState, useContext } from 'react';

const ProgramContext = createContext();

// Create a provider component
export const ProgramProvider = ({ children }) => {
  const [programs, setPrograms]=useState([{
    id: 1,
    name: "Monday Arms",
    tags: ["arms", "upper body", "fun"],
    exercises:[1,2,5,6,10],
  }]);

  const addProgram = (program) => {
    setPrograms((prevPrograms) => [...prevPrograms, program]);
  };

  const removeProgram = (id) => {
    setPrograms((prevPrograms) => prevPrograms.filter(ex => ex.id !== id));
  };

  return (
    <ProgramContext.Provider value={{ programs, addProgram, removeProgram }}>
      {children}
    </ProgramContext.Provider>
  );
};

// Custom hook to access the context easily
export const useProgramContext = () => {
  return useContext(ProgramContext);
};
