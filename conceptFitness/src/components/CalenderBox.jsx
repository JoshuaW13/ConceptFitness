import React, { useEffect, useState } from 'react';
import '../App.css';
import Menu from "@mui/icons-material/Menu";
import Popup_FullScreen from './Popup_FullScreen';
import CalenderPopupMini from "../components/CalenderPopupMini";
import CalenderProgramPopup from "./CalenderProgramPopup"
import CalenderExercisePopup from './CalenderExercisePopup.jsx';
import GoalBox from "../components/GoalBox"
import { useProgramContext } from "../contexts/ProgramsContext";
import { useCalendarContext } from '../contexts/CalendarContext';
import { useGoalContext } from '../contexts/GoalsContext';
import Popup_Bot from './Popup_Bot';
import Popup from './Popup';
import AddGoalPopup from './AddGoalPopup';
import { useNotifContext } from "../contexts/NotifContext.jsx";

function CalenderBox({Day, Date}) {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isBigPopupVisible, setIsBigPopupVisible] = useState(false);
    const [isGoalPopupVisible, setIsGoalPopupVisible] = useState(false);
    const [isExercisePopupVisible, setIsExercisePopupVisible] = useState(false)
    const [programName, setProgramName] = useState("")
    const [goalData, setGoalData] = useState([])
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const { programs } = useProgramContext()
    const { days, dayPrograms } = useCalendarContext()
    const { assignedGoals, goalTypes } = useGoalContext()
    const { showNotif } = useNotifContext();

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
        const dayCheck = assignedGoals.find((g) => g.date == Date)
        if(dayCheck == undefined){
            console.log("No Goal Found: ", Date)
            setGoalData("")
            return
        }
        const dayGoals = []
        for(let i = 0; i < assignedGoals.length; i++) {
            if(assignedGoals[i].date == Date) {
                dayGoals.push(<GoalBox 
                    key = {i} 
                    id = {assignedGoals[i].id}
                    ></GoalBox>)
                console.log(assignedGoals[i])
            }
        }
        setGoalData(dayGoals)
    }
    
    useEffect(() => {
        getProgramName()
        getGoal()
    }, [Date, programs, assignedGoals, isBigPopupVisible])

    return (
        <div className='flex flex-col flex-shrink-0 h-full w-[50%] z-3'>
            <div className='relative h-[30%] w-full font-bold border-2 border-[#D8C3A5]'>
                <p className='flex text-xl font-semibold h-full items-center justify-center -mt-0.5'>{dayNames[Day]}</p>
                <p className='absolute text-xl -top-1 right-1 text-black'>{Date.substring(4, Date.indexOf(","))}</p>
            </div>
            <div className='relative h-full w-full border-2 border-[#D8C3A5] overflow-y-auto'>
                <div className='overflow-y-auto scrollbar-none h-full w-full'>
                    <p className={`font-semibold text-xl ${programName == "" ? "hidden" : "visible"}`}>Program:</p>
                    <p className='font-normal text-xl'>{programName}</p>
                    <p className={`font-semibold text-xl w-full ${goalData == "" ? "hidden" : "visible"}`}>Goal:</p>
                    <div className='flex flex-col font-normal text-xl w-full overflow-y-auto h-full'>{goalData}</div>
                    <div className=''>
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
                </div>
                {isPopupVisible && (
                <Popup_Bot
                  onClick={(event) => {
                    setIsPopupVisible(false)
                  }}        
                  progAssignClick = {(event) => {
                    setIsBigPopupVisible(true)
                  }}        
                  goalAssignClick = {(event) => {
                    setIsGoalPopupVisible(true)
                  }}
                  selectedDate={Date}
                  programName={programName}
                  Content={CalenderPopupMini}   
                />
                )}
            </div>
            {isBigPopupVisible && (
            <Popup_FullScreen
                onClick={(event) => {
                    setIsBigPopupVisible(false);
                    setIsPopupVisible(false);
                    days.find((d) => d.id == Day).selected = false
                }} 
                Content={CalenderProgramPopup}
                selectedDate={Date}
                Title={'Add Program'}
            />
            )}
            {isExercisePopupVisible && (
                <Popup_FullScreen
                    onClick={(event) => {
                        setIsExercisePopupVisible(false);  
                        days.find((d) => d.id == Day).selected = false
                    }} 
                    Content={CalenderExercisePopup}
                    selectedDate={Date}
                    Title={'Select Exercise'}
                />
            )}
            {isGoalPopupVisible && (
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="p-2 rounded-lg shadow-lg relative w-[100%]">
                <Popup
                  onClick={(e) => {setIsGoalPopupVisible(false); setIsPopupVisible(false); e.stopPropagation();}} 
                  Content={AddGoalPopup}
                  contentProps={{
                    message: "Add Goal",
                    setIsExercisePopupVisible: (state) => {setIsExercisePopupVisible(state)},
                    onConfirm: ()=>{setIsGoalPopupVisible(false); setIsPopupVisible(false);},
                    date:Date,
                  }}
                  isCentered={true}  // Ensures it's centered
                />
              </div>
            </div>)}
        </div>
    );
}

export default CalenderBox;
