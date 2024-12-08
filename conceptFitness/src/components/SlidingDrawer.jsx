import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import ListIcon from '../assets/ListIcon.png'
import { drawerClasses } from '@mui/material';

function SlidingDrawer({Content, contentProps, numExercises, setTarget}) {
  const drawerButton = useRef(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect (() => {
    const button = drawerButton.current.getBoundingClientRect();
    setTarget( {
      x: button.x,
      y: button.y + 11,
    })
  }, [])

    //ChatGPT used to get translation function
  return (
    <>
      <div
        className={`h-full w-[90%] bg-[#8E8D8A] rounded-md top-0 right-0 absolute transform ${
          isDrawerOpen ? 'translate-x-0 visible' : 'translate-x-[100%]'
        } transition-transform duration-500 ease-in-out flex flex-col items-center`}
      >
        <button
          ref={drawerButton}
          onClick={toggleDrawer}
          className="absolute w-7 h-14 left-[-2.5rem] bg-[#8E8D8A] hover:bg-[#E98074] text-white p-0 rounded-l-lg rounded-r-none"
          style={{ top: '50%', transform: 'translateY(-50%) translateX(50%)' }} // Center vertically and move slightly outside
          >
          <img src={ListIcon} alt="" className="p-1" />
          <div className='absolute flex justify-center items-center align-middle w-6 h-6 -top-2 -left-1 bg-[#E85A4F] text-black border border-black rounded-sm p-1'>
            <p className='absolute text-center'>{numExercises}</p>
          </div>
        </button>
        {React.createElement(Content, contentProps)}
      </div>
    </>
  );
}

export default SlidingDrawer;
