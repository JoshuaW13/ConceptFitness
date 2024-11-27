import React, { useState } from 'react';
import '../App.css';
import DropDownArrow from "@mui/icons-material/ArrowDropDown";

function CalenderBox({Day, Date, Program}) {
    return (
        <div className='relative flex h-full w-[350%]'>
            <div className='relative h-full w-full border-black border-2'>
            <p className='text-l font-semibold'>{Day}</p>
            <p className='absolute -top-1 right-0.5 text-black '>{Date}</p>
            </div>
            <div className='relative h-full w-full border-black border-2'>
                <p>{Program}</p>
                <div>
                    <button className='absolute h-6 w-6 bottom-0.5 right-0.5 bg-gray-300'
                    onClick={(event) => {setIsPopupVisible(!isPopupVisible)
                        event.stopPropagation();  // Prevent the event from bubbling up to the parent
                    }}
                    >
                    <Menu />
                    </button>
                </div>
            </div>
        </div>
    );
}

CalenderBox.defaultProps = {
    Program: "No Program Set",
}

export default DropDown;
