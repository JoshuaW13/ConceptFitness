import React, { useState } from 'react';
import '../App.css';
import ListIcon from '../assets/ListIcon.png'

function SlidingDrawer({Content, contentProps}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* Right Drawer */}
      <div
        className={`h-full w-[90%] bg-gray-500 rounded-md top-0 right-0 absolute transform ${
          isDrawerOpen ? 'translate-x-0 visible' : 'translate-x-[100%]'
        } transition-transform duration-500 ease-in-out flex flex-col items-center`}
      >
        {/* Drawer Toggle Button */}
        <button
          onClick={toggleDrawer}
          className="absolute w-7 h-14 left-[-2.5rem] bg-gray-500 hover:bg-gray-400 text-white p-0 rounded-l-lg rounded-r-none"
          style={{ top: '50%', transform: 'translateY(-50%) translateX(50%)' }} // Center vertically and move slightly outside
          >
          <img src={ListIcon} alt="" className="p-1" />
        </button>
        {React.createElement(Content, contentProps)}
      </div>
      
    </>
  );
}

export default SlidingDrawer;
