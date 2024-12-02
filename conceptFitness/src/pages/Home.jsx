import { useState } from 'react'
import React from 'react'
import '../App.css'
import NavBar from '../components/NavBar'
import HomeButton from '../components/HomeButton'
import ProfileButton from '../components/ProfileButton'
import Calender from '../components/Calender'
import { useNavigate } from 'react-router-dom';
import { useCalendarContext } from '../contexts/CalendarContext'

function Home() {
  const{days} = useCalendarContext();

  const navigate = useNavigate();

  const startSession = () =>{
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daySchedule = days.find((d) => d.id == dayOfWeek)
    if(daySchedule.program===undefined){
      navigate("/programs");
    }else{
      navigate("/session",{ state: { programToStart: daySchedule.program } })
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

  return (
      <div className='w-full h-full flex flex-col items-center z-1 text-black'>
        <NavBar FirstButton={HomeButton} SecondButton={ProfileButton}></NavBar>
        <Calender className="flex-grow"></Calender>
        <div className='flex flex-col m-4 w-[90%] gap-4 flex-grow'>
          <div className='flex flex-row gap-2 flex-grow'>
            <div className='flex flex-col w-[40%] gap-4 flex-grow'>
              <button className='bg-gray-300 text-xl flex items-center justify-center flex-grow hover:bg-gray-200 focus:outline-none'
                onClick={navigateCatalogue} 
              >Exercises</button>
              <button className='bg-gray-300 text-xl flex items-center justify-center flex-grow hover:bg-gray-200 focus:outline-none'
                onClick={navigatePrograms} 
              >Programs</button>
              <button className='bg-gray-300 text-xl flex items-center justify-center flex-grow hover:bg-gray-200 focus:outline-none'
                onClick={navigateLogs} 
              >Logs</button>
            </div>
            <div className='w-[80%] bg-gray-300 rounded-lg flex-grow text-l font-semibold'>
              <p className='pt-1'>Goals</p>
            </div>
          </div>
          <button className='bg-gray-300 text-2xl flex-grow-[0.3] hover:bg-gray-200 focus:outline-none'
            onClick={startSession}          
          >Start Session</button>
        </div>
        
      </div>
  )
}

export default Home
