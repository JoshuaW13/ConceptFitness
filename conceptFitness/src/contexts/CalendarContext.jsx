import React, { createContext, useState, useContext } from 'react';

const CalendarContext = createContext();

// Create a provider component
export const CalendarProvider = ({ children }) => {
  const [days, setDays]=useState([
  {
    id: 0,
    day: "Sunday",
    program: 1,
    selected: false,
  }, 
  {
    id: 1,
    day: "Monday",
    program: 1,
    selected: false,
  },
  {
    id: 2,
    day: "Tuesday",
    program: 1,
    selected: false,
  },
  {
    id: 3,
    day: "Wednesday",
    program: 1,
    selected: false,
  },
  {
    id: 4,
    day: "Thursday",
    program: 1,
    selected: false,
  },
  {
    id: 5,
    day: "Friday",
    program: 1,
    selected: false,
  },
  {
    id: 6,
    day: "Saturday",
    program: 1,
    selected: false,
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
