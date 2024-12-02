import React, { createContext, useState, useContext } from 'react';

const NotifContext = createContext();

// Create a provider component
export const NotifProvider = ({ children }) => {
  const [isNotifVisible, setIsNotifVisible] = useState(false)
  const [notifMsg, setNotifMsg] = useState("")

  return (
    <NotifContext.Provider value={{notifMsg, isNotifVisible, setNotifMsg, setIsNotifVisible}}>
      {children}
    </NotifContext.Provider>
  );
};

// Custom hook to access the context easily
export const useNotifContext = () => {
  return useContext(NotifContext);
};
