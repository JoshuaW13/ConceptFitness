import React, { useEffect, useState } from 'react';
import '../App.css';
import Menu from "@mui/icons-material/Menu";
import Popup_FullScreen from './Popup_FullScreen';
import CalenderPopup from "../components/CalenderPopup";
import { useProgramContext } from "../contexts/ProgramsContext";
import { useCalendarContext } from '../contexts/CalendarContext';

function CalenderBox({Day, Date}) {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [programName, setProgramName] = useState("")
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const { programs } = useProgramContext()
    const { days } = useCalendarContext()

    const getProgramName = () => {
        console.log(programs.find((p) => p.id == (days.find((d) => d.id == Day)).program).name)
        setProgramName(programs.find((p) => p.id == (days.find((d) => d.id == Day)).program).name)
    }
    
    useEffect(() => {
        getProgramName()
    }, [isPopupVisible])

    return (
        <div className='flex flex-col h-full w-full'>
            <div className='relative h-[20%] w-full border-black border-2'>
                <p className='flex text-xl font-semibold h-full items-center justify-center -mt-0.5'>{dayNames[Day]}</p>
                <p className='absolute text-xl -top-1 right-1 text-black'>{Date}</p>
            </div>
            <div className='relative h-full w-full border-black border-2'>
                <p>{programName}</p>
                <div>
                    <button className='absolute h-8 w-8 bottom-1 right-1 bg-gray-300 rounded-md'
                    onClick={(event) => {setIsPopupVisible(!isPopupVisible)
                        console.log(Day)
                        days.find((d) => d.id == Day).selected = true
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
