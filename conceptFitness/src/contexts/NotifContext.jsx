import React, { createContext, useState, useContext } from 'react';

const NotifContext = createContext();

// Create a provider component
export const NotifProvider = ({ children }) => {
  const [isNotifVisible, setIsNotifVisible] = useState(false)
  const [notifMsg, setNotifMsg] = useState("")

  const showNotif = (msg) => {
    setNotifMsg(msg)
    setIsNotifVisible(true);
    setTimeout(() => {
      setIsNotifVisible(false);
    }, 2000);    
  }

  return (
    <NotifContext.Provider value={{notifMsg, isNotifVisible, setNotifMsg, setIsNotifVisible, showNotif}}>
      {children}
    </NotifContext.Provider>
  );
};

// Custom hook to access the context easily
export const useNotifContext = () => {
  return useContext(NotifContext);
};
