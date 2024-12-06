import { useState } from 'react'
import React from 'react'
import '../App.css'
import NavBar from '../components/NavBar'
import HomeButton from '../components/HomeButton'
import ProfileButton from '../components/ProfileButton'
import Calender from '../components/Calender'
import { useNavigate } from 'react-router-dom';
import { useCalendarContext } from '../contexts/CalendarContext'
import dayjs from 'dayjs'

function Home() {
  const{days, dayPrograms} = useCalendarContext();

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

  return (
      <div className='w-full h-full flex flex-col justify-center items-center bg-[#EAE7DC]'>
        <NavBar FirstButton={HomeButton} SecondButton={ProfileButton}></NavBar>
        <Calender></Calender>
        <div className='flex flex-col m-4 w-[90%] gap-4 flex-grow'>
          <div className='flex flex-row gap-2 flex-grow'>
            <div className='flex flex-col w-[40%] gap-4 flex-grow'>
              <button className='bg-[#EAE7DC] text-[#E85A4F] text-lg flex items-center justify-center p-3 border-4 border-[#D8C3A5] rounded-full font-bold'
                onClick={navigateCatalogue} 
              >Exercises</button>
              <button className='bg-[#EAE7DC] text-[#E85A4F] text-lg flex items-center justify-center p-3 border-4 border-[#D8C3A5] rounded-full font-bold'
                onClick={navigatePrograms} 
              >Programs</button>
              <button className='bg-[#EAE7DC] text-[#E85A4F] text-lg flex items-center justify-center p-3 border-4 border-[#D8C3A5] rounded-full font-bold'
                onClick={navigateLogs} 
              >Logs</button>
            </div>
            <div className='w-[80%] bg-[#EAE7DC] rounded-lg flex-grow text-l font-bold border-4 border-[#D8C3A5] text-white'>
              <p className='pt-1 font-semibold text-lg text-[#E85A4F]'>Goals</p>
            </div>
          </div>
          <button className='button text-xl'
            onClick={startSession}          
          >Start Session</button>
        </div>
        
      </div>
  )
}

export default Home
