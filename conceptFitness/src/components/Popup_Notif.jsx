import React from 'react';
import '../App.css';

function Popup_Notif({Content}) {
  return (
    <div className="fixed h-[10%] w-[80%] bottom-20 bg-black/10 z-10 flex transition-opacity duration-1000 ease-in-out bg-gray-400">
      <p className='flex text-2xl font-bold h-full w-full items-center align-middle justify-center text-black'>
        <Content/>
      </p>
    </div>
  );
}

export default Popup_Notif;
