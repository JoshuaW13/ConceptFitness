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
            <div className='flex flex-col w-[40%] gap-4 h-full'>
              <button className='bg-[#EAE7DC] text-[#E85A4F] text-xl flex items-center justify-center p-3 border-4 border-[#D8C3A5] hover:border-[#E85A4F] rounded-2xl font-bold flex-grow'
                onClick={navigateCatalogue} 
              >Exercises</button>
              <button className='bg-[#EAE7DC] text-[#E85A4F] text-xl flex items-center justify-center p-3 border-4 border-[#D8C3A5] hover:border-[#E85A4F] rounded-2xl font-bold flex-grow'
                onClick={navigatePrograms} 
              >Programs</button>
              <button className='bg-[#EAE7DC] text-[#E85A4F] text-xl flex items-center justify-center p-3 border-4 border-[#D8C3A5] hover:border-[#E85A4F] rounded-2xl font-bold flex-grow'
                onClick={navigateLogs} 
              >Logs</button>
            </div>
            <div className='w-[50%] ml-2 bg-[#eeede8] rounded-2xl flex-grow text-l font-bold border-4 border-[#D8C3A5] text-white'>
              <p className='pt-1 font-semibold text-lg text-[#E85A4F]'>Goals</p>
            </div>
          </div>
          <button className='button text-xl h-[15%] rounded-2xl bg-[#EAE7DC] text-[#E85A4F] border-4 border-[#D8C3A5] hover:border-[#E85A4F] font-bold'
            onClick={startSession}          
          >Start Session</button>
        </div>
      </div>
  )
}

export default Home
