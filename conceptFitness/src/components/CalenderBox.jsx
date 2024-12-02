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
    const { days, dayPrograms } = useCalendarContext()

    const getProgramName = () => {
        const daySchedule = dayPrograms.find((d) => d.date == Date)
        if(daySchedule == undefined){
            console.log("No Program Found: ", Date)
            setProgramName("")
            return
        }
        console.log(programs.find((p) => p.id == (dayPrograms.find((d) => d.date == Date)).program).name, ": ", Date)
        setProgramName(programs.find((p) => p.id == (dayPrograms.find((d) => d.date == Date)).program).name)
    }
    
    useEffect(() => {
        getProgramName()
    })

    return (
        <div className='flex flex-col flex-shrink-0 h-full w-[50%] z-3'>
            <div className='relative h-[20%] w-full border-black border-2'>
                <p className='flex text-xl font-semibold h-full items-center justify-center -mt-0.5'>{dayNames[Day]}</p>
                <p className='absolute text-xl -top-1 right-1 text-black'>{Date.substring(4, Date.indexOf(","))}</p>
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
                    setIsPopupVisible(false);  // Close the popup
                    days.find((d) => d.id == Day).selected = false
                }} 
                Content={CalenderPopup}
                selectedDate={Date}
                Title={'Add Program'}
            />
            )}
        </div>
    );
}

export default CalenderBox;
