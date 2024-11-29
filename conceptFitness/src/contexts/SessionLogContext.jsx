import React, { createContext, useState, useContext } from 'react';

const SessionLogContext = createContext();

// Create a provider component
export const SessionLogProvider = ({ children }) => {
  const [sessionLogs, setSessionLogs]=useState([{
    id: 1,
    programId: 1,
    date: Date('2024-11-29'),
    durationMinutes: 90,
    exerciseRecords:[
        {
            id:1,
            sets:[
                {
                    reps: 2,
                    weight: 3
                },
                {
                    reps: 2,
                    weight: 1
                },
                {
                    reps: 3,
                    weight: 25
                },
            ]
        },
        {
            id:2,
            sets:[
                {
                    reps: 3,
                    weight: 1
                },
                {
                    reps: 8,
                    weight: 1
                },
                {
                    reps: 200,
                    weight: 47
                },
            ]
        }
    ]
  },
  ]);

  const addSessionLog = (sessionLog) => {
    setSessionLogs((prevSessionLogs) => {
      const sessionLogExists = prevSessionLogs.some((p) => p.id === sessionLog.id);
      
      if (sessionLogExists) {
        return prevSessionLogs.map((p) =>
          p.id === sessionLog.id ? { ...p, ...sessionLog } : p
        );
      } else {
        return [...prevSessionLogs, sessionLog];
      }
    });
  };
  

  const removeSessionLog = (id) => {
    setSessionLogs((prevSessionLogs) => prevSessionLogs.filter(ex => ex.id !== id));
  };

  return (
    <SessionLogContext.Provider value={{ sessionLogs, addSessionLog, removeSessionLog }}>
      {children}
    </SessionLogContext.Provider>
  );
};

// Custom hook to access the context easily
export const useSessionLogContext = () => {
  return useContext(SessionLogContext);
};
