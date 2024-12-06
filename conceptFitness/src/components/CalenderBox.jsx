import React, { useEffect, useState } from 'react';
import '../App.css';
import Menu from "@mui/icons-material/Menu";
import Popup_FullScreen from './Popup_FullScreen';
import CalenderPopupMini from "../components/CalenderPopupMini";
import CalenderPopup from "../components/CalenderPopup"
import { useProgramContext } from "../contexts/ProgramsContext";
import { useCalendarContext } from '../contexts/CalendarContext';
import { useGoalContext } from '../contexts/GoalsContext';
import Popup_Bot from './Popup_Bot';

function CalenderBox({Day, Date}) {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isBigPopupVisible, setIsBigPopupVisible] = useState(false);
    const [programName, setProgramName] = useState("")
    const [goalData, setGoalData] = useState([])
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const { programs } = useProgramContext()
    const { days, dayPrograms } = useCalendarContext()
    const { assignedGoals, goalTypes } = useGoalContext()

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

    const getGoal = () => {
        const dayGoal = assignedGoals.find((g) => g.date == Date)
        if(dayGoal == undefined){
            console.log("No Goal Found: ", Date)
            setGoalData("")
            return
        }
        const dayGoals = []
        for(let i = 0; i < assignedGoals.length; i++) {
            console.log(assignedGoals.find((g) => g.date == Date), ": ", Date)
            dayGoals.push(assignedGoals.find((g) => g.date == Date))
        }
        setGoalData(dayGoals)
    }
    
    useEffect(() => {
        getProgramName()
        getGoal()
    })

    return (
        <div className='flex flex-col flex-shrink-0 h-full w-[50%] z-3'>
            <div className='relative h-[30%] w-full font-bold border-2 border-[#D8C3A5]'>
                <p className='flex text-xl font-semibold h-full items-center justify-center -mt-0.5'>{dayNames[Day]}</p>
                <p className='absolute text-xl -top-1 right-1 text-[#E85A4F]'>{Date.substring(4, Date.indexOf(","))}</p>
            </div>
            <div className='relative h-full w-full border-2 border-[#D8C3A5]'>
                <p className={`font-semibold text-xl ${programName == "" ? "hidden" : "visible"}`}>Program:</p>
                <p className='font-normal text-xl'>{programName}</p>
                <p className={`font-semibold text-xl ${goalData == "" ? "hidden" : "visible"}`}>Goal:</p>
                <p className='font-normal text-xl'>{goalData.value}</p>
                <div>
                    <button className='absolute h-8 w-8 bottom-1 right-1 bg-[#D8C3A5] rounded-md'
                    onClick={(event) => {setIsPopupVisible(!isPopupVisible)
                        console.log(Day)
                        days.find((d) => d.id == Day).selected = true
                        event.stopPropagation();  // Prevent the event from bubbling up to the parent
                    }}
                    >
                        <Menu className=''/>
                    </button>
                </div>
                {isPopupVisible && (
                <Popup_Bot
                    onClick={(event) => {
                        setIsPopupVisible(false);  // Close the popup
                    }}        
                    progAssignClick = {(event) => {
                        setIsBigPopupVisible(true);  // Close the popup
                        console.log("Test")
                    }}        
                    selectedDate={Date}
                    Content={CalenderPopupMini}   
                />
                )}
            </div>
            {isBigPopupVisible && (
            <Popup_FullScreen
                onClick={(event) => {
                    setIsBigPopupVisible(false);  // Close the popup
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
