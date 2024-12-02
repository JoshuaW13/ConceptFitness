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
      <div className='background w-full h-full flex '>
        <NavBar FirstButton={HomeButton} SecondButton={ProfileButton}></NavBar>
        <Calender></Calender>
        <div className='flex flex-col m-4 w-[90%] gap-4 flex-grow'>
          <div className='flex flex-row gap-2 flex-grow'>
            <div className='flex flex-col w-[40%] gap-4 flex-grow'>
              <button className='button text-xl'
                onClick={navigateCatalogue} 
              >Exercises</button>
              <button className='button text-xl'
                onClick={navigatePrograms} 
              >Programs</button>
              <button className='button text-xl'
                onClick={navigateLogs} 
              >Logs</button>
            </div>
            <div className='w-[80%] bg-[#D8C3A5] rounded-lg flex-grow text-l font-bold border border-black text-white'>
              <p className='pt-1'>Goals</p>
            </div>
          </div>
          <button className='button text-xl bg-[#8E8D8A]'
            onClick={startSession}          
          >Start Session</button>
        </div>
        
      </div>
  )
}

export default Home
