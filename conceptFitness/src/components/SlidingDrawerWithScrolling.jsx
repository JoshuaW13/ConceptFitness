import React, { useState } from 'react';
import '../App.css';
import ListIcon from '../assets/ListIcon.png';

function SlidingDrawerWithScrolling({ Content, isDrawerOpen, setIsDrawerOpen }) {

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/*ChatGPT used to generate the sliding drawer*/}
      <div
        className={`h-full w-[90%] bg-[#8E8D8A] top-0 right-0 absolute transform ${
          isDrawerOpen ? 'translate-x-0 visible' : 'translate-x-[100%]'
        } transition-transform duration-500 ease-in-out flex flex-col items-center`}
      >
        <button
          onClick={toggleDrawer}
          className="absolute w-7 h-14 left-[-2.5rem] bg-[#8E8D8A] hover:bg-[#E98074] text-white p-0 rounded"
          style={{
            top: '50%',
            transform: 'translateY(-50%) translateX(50%)',
          }}
        >
          <img src={ListIcon} alt="" className="p-1" />
        </button>

        <div className="drawer-content w-full h-full overflow-y-auto p-4">
          <Content />
        </div>
      </div>
    </>
  );
}

export default SlidingDrawerWithScrolling;
