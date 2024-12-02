import React from 'react';
import '../App.css';
import { useNotifContext } from "../contexts/NotifContext";

function Popup_Notif() {
  const { notifMsg, isNotifVisible } = useNotifContext();

  return (
    <div className={`absolute w-[80%] h-fit py-5 px-3 z-99 border-2 border-black bottom-[8%] flex items-center rounded-xl justify-center bg-white
      transition-all duration-500 ease-in-out ${
      isNotifVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
      <p className="flex flex-col text-xl font-bold text-black z-99">
        {notifMsg}
      </p>
    </div>
  );
}

export default Popup_Notif;
