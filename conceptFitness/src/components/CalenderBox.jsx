import React, { useState } from 'react';
import '../App.css';
import Menu from "@mui/icons-material/Menu";
import Popup_FullScreen from './Popup_FullScreen';
import CalenderPopup from "../components/CalenderPopup";

function CalenderBox({Day, Date, Program}) {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const ProgramName = Program === "" ? Program : "Workout: No Workout Set"
    
    return (
        <div className='flex flex-col h-full w-full'>
            <div className='relative h-[20%] w-full border-black border-2'>
                <p className='flex text-xl font-semibold h-full items-center justify-center -mt-0.5'>{Day}</p>
                <p className='absolute text-xl -top-1 right-1 text-black'>{Date}</p>
            </div>
            <div className='relative h-full w-full border-black border-2'>
                <p>{ProgramName}</p>
                <div>
                    <button className='absolute h-8 w-8 bottom-1 right-1 bg-gray-300 rounded-md'
                    onClick={(event) => {setIsPopupVisible(!isPopupVisible)
                        event.stopPropagation();  // Prevent the event from bubbling up to the parent
                    }}
                    >
                    <Menu className=''/>
                    </button>
                </div>
            </div>
            {isPopupVisible && (
                <Popup_FullScreen
                    onClick={(event) => {
                    event.stopPropagation();  // Prevent the event from bubbling up to the parent
                    setIsPopupVisible(false);  // Close the popup
                    }} 
                    Content={CalenderPopup} 
                    Title={'Add Program'}
                />
            )}
        </div>
    );
}

export default CalenderBox;