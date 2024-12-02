import React, { createContext, useState, useContext } from 'react';

const CalendarContext = createContext();

// Create a provider component
export const CalendarProvider = ({ children }) => {
  const [days, setDays]=useState([
  {
    id: 0,
    day: "Sunday",
    selected: false,
  }, 
  {
    id: 1,
    day: "Monday",
    selected: false,
  },
  {
    id: 2,
    day: "Tuesday",
    selected: false,
  },
  {
    id: 3,
    day: "Wednesday",
    selected: false,
  },
  {
    id: 4,
    day: "Thursday",
    selected: false,
  },
  {
    id: 5,
    day: "Friday",
    selected: false,
  },
  {
    id: 6,
    day: "Saturday",
    selected: false,
  },
  ]);

  const [dayPrograms, setDayPrograms] = useState([
  ])

  const addProgramToDay = (date, programId) => {
    setDayPrograms((dayPrograms) => {
      const index = dayPrograms.findIndex((dayProgram) => dayProgram.date === date);
  
      if (index !== -1) {
        // Update existing entry
        return dayPrograms.map((dayProgram, i) =>
          i === index ? { ...dayProgram, program: programId } : dayProgram
        );
      } else {
        // Add new entry
        return [...dayPrograms, { date, program: programId }];
      }
    });
  };

  const removeProgramFromDay = (date) => {
    setDayPrograms((prevDayPrograms) => 
      prevDayPrograms.filter((dayProgram) => dayProgram.date !== date)
    );
  };

  return (
    <CalendarContext.Provider value={{days, dayPrograms, addProgramToDay, removeProgramFromDay}}>
      {children}
    </CalendarContext.Provider>
  );
};

// Custom hook to access the context easily
export const useCalendarContext = () => {
  return useContext(CalendarContext);
};
