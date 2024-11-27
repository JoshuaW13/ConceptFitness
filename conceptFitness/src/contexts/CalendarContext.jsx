import React, { createContext, useState, useContext } from 'react';

const CalendarContext = createContext();

// Create a provider component
export const CalendarProvider = ({ children }) => {
  const [days, setDays]=useState([
  {
    id: 1,
    day: "Sunday",
    program: 0
  }, 
  {
    id: 2,
    day: "Monday",
    program: 1
  },
  {
    id: 3,
    day: "Tuesday",
    program: 0
  },
  {
    id: 4,
    day: "Wednesday",
    program: 0
  },
  {
    id: 5,
    day: "Thursday",
    program: 0
  },
  {
    id: 6,
    day: "Friday",
    program: 0
  },
  {
    id: 7,
    day: "Saturday",
    program: 0
  },
  ]);

  const addProgramToDay = (dayId, programId) => {
    setDays((prevDay) => {
      return prevDay.map((day) => {
        if (day.id === dayId) {
          const updatedProgram = day.program = programId;
          return { ...day, program: updatedProgram };
        }
        return day;
      });
    });
  };

  const removeProgramFromDay = (dayId) => {
    setDays((prevDay) => {
      return prevDay.map((day) => {
        if (day.id === dayId) {
          const updatedProgram = day.program = 0;
          return { ...day, program: updatedProgram };
        }
        return day;
      });
    });
  };

  return (
    <CalendarContext.Provider value={{days, addProgramToDay, removeProgramFromDay}}>
      {children}
    </CalendarContext.Provider>
  );
};

// Custom hook to access the context easily
export const useCalendarContext = () => {
  return useContext(CalendarContext);
};
