import React, { useState } from 'react';
import '../App.css';

function SlidingDrawer({Content}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* Right Drawer */}
      <div
        className={`h-full w-[90%] bg-blue-500 top-0 right-0 absolute transform ${
          isDrawerOpen ? 'translate-x-0 visible' : 'translate-x-[100%]'
        } transition-transform duration-500 ease-in-out flex flex-col items-center`}
      >
        {/* Drawer Toggle Button */}
        <button
          onClick={toggleDrawer}
          className="absolute w-7 h-14 left-[-2.5rem] bg-blue-500 text-white p-0 rounded"
          style={{ top: '50%', transform: 'translateY(-50%) translateX(50%)' }} // Center vertically and move slightly outside
        >
          {isDrawerOpen ? 'c' : 'o'}
        </button>
        <Content></Content>
      </div>
      
    </>
  );
}

export default SlidingDrawer;
