import { useState, useEffect } from 'react'
import React from 'react'
import '../App.css'
import NavBar from '../components/NavBar'
import HomeButton from '../components/HomeButton'
import ProfileButton from '../components/ProfileButton'
import Calender from '../components/Calender'
import GoalBox from '../components/GoalBox'
import { useNavigate } from 'react-router-dom';
import { useCalendarContext } from '../contexts/CalendarContext'
import { useGoalContext } from '../contexts/GoalsContext'
import dayjs from 'dayjs'

function Home() {
  const{days, dayPrograms} = useCalendarContext();
  const{ assignedGoals } = useGoalContext()

  const navigate = useNavigate();

  const startSession = () =>{
    const todayDate = dayjs();
    const formattedDate = dayjs(todayDate).format('MMM D, YYYY')
    const dayProgram = dayPrograms.find((dayProgram) => dayProgram.date == formattedDate)
    if(dayProgram===undefined){
      navigate("/programs");
    }else{
      navigate("/session",{ state: { programToStart: dayProgram.program } })
    }
  }
  const navigateCatalogue = () =>{
    navigate("/catalogue")
  }
  const navigatePrograms = () =>{
    navigate("/programs")
  }
  const navigateLogs = () =>{
    navigate("/sessionLogs")
  }

  const [goalData, setGoalData] = useState([])

  const getGoal = () => {
    const dayGoals = []
    for(let i = 0; i < assignedGoals.length; i++) {
      dayGoals.push(<GoalBox 
        key = {i} 
        id = {assignedGoals[i].id}
        bool = {true}
        ></GoalBox>)
    }
    setGoalData(dayGoals)
  }

  useEffect(() => {
    getGoal()
    console.log("Updating")
  }, [assignedGoals])

  return (
    <div className='w-full h-full flex flex-col items-center bg-[#EAE7DC]'>
      <NavBar SecondButton={ProfileButton}></NavBar>
      <div className='flex h-[35%] w-full items-center align-middle justify-center pb-5 px-5'>
        <Calender></Calender>
      </div>
      <div className='flex flex-col m-2 w-[90%] gap-4 pb-5 flex-grow overflow-none'>
        <div className='flex flex-row gap-2 w-full h-[80%]'>
          <div className='flex flex-col w-[40%] gap-4 h-full'>
            <button className='bg-[#EAE7DC] text-black text-xl flex items-center justify-center p-3 border-4 border-[#D8C3A5] hover:border-[#E85A4F] rounded-2xl font-bold flex-grow'
              onClick={navigateCatalogue} 
            >Exercises</button>
            <button className='bg-[#EAE7DC] text-black text-xl flex items-center justify-center p-3 border-4 border-[#D8C3A5] hover:border-[#E85A4F] rounded-2xl font-bold flex-grow'
              onClick={navigatePrograms} 
            >Programs</button>
            <button className='bg-[#EAE7DC] text-black text-xl flex items-center justify-center p-3 border-4 border-[#D8C3A5] hover:border-[#E85A4F] rounded-2xl font-bold flex-grow'
              onClick={navigateLogs} 
            >Logs</button>
          </div>
          <div className='w-[65%] ml-2 h-full bg-[#eeede8] rounded-2xl text-l font-bold border-4 border-[#D8C3A5] text-white overflow-y-auto'>
            <p className='pt-1 font-semibold text-lg text-black'>Goals</p>
            <div className='flex flex-col font-normal text-xl w-full overflow-y-auto'>{goalData}</div>
          </div>
        </div>
        <button className='flex-grow text-xl rounded-2xl bg-[#EAE7DC] text-black border-4 border-[#D8C3A5] hover:border-[#E85A4F] font-bold h-[15%]'
          onClick={startSession}          
        >Start Session</button>
      </div>
    </div>
  )
}

export default Home
