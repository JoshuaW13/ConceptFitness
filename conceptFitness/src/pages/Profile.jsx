import React from 'react'
import '../App.css'
import { useState } from 'react'
import NavBar from '../components/navBar'
import HomeButton from '../components/HomeButton'
import SettingsButton from '../components/SettingsButton'
import ProfilePicture from '../assets/profilePicture.svg'
import MetricsWindow from '../components/MetricsWindow'
import GoalsWindow from '../components/GoalsWindow'
import StatisticsWindow from '../components/StatisticsWindow'

function Profile() {

  const [showMetrics, setShowMetrics] = useState(false)
  const [showGoals, setShowGoals] = useState(false)
  const [showStatistics, setShowStatistics] = useState(false)

  const handleMetrics = () =>{
    setShowMetrics(true)
    setShowGoals(false)
    setShowStatistics(false)
  }

  const handleGoals = () =>{
    setShowGoals(true)
    setShowMetrics(false)
    setShowStatistics(false)
  }

  const handleStatistics = () =>{
    setShowStatistics(true)
    setShowGoals(false)
    setShowMetrics(false)
  }


  return (
    <div className='w-full h-full flex flex-col items-center overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 rounded-lg'>
        <NavBar FirstButton={HomeButton} SecondButton={SettingsButton}></NavBar>
        <div className='flex flex-col items-center m-4 w-[90%] gap-4 flex-grow'>
          <div className="w-[100%] h-[30%] bg-gray-50 rounded-lg shadow-lg flex border-gray border-2 p-4">
            <div className='flex flex-col items-center justify-center w-1/3'>
              <div className="w-[60%] h-[60%] mb-3">
                <img src={ProfilePicture}></img>
              </div>
              <p className='text-black text-sm'>Olivia Carter</p>
            </div>
            <div className='flex flex-col justify-center w-2/3 pl-2'>
              <p className='text-black text-sm'>I'm an aspiring entrepreneur wanting to use exercise to build discipline!</p>
            </div>
          </div>
          
          <div className='flex flex-wrap justify-center gap-3 w-full m-2'>
              <button className='bg-gray-300 text-sm flex items-center justify-center hover:bg-gray-400 focus:outline-none w-full sm:w-auto p-3'
              onClick={handleMetrics}>Metrics</button>
              <button className='bg-gray-300 text-sm flex items-center justify-center hover:bg-gray-400 focus:outline-none w-full sm:w-auto p-3'
              onClick={handleGoals}>Goals</button>
              <button className='bg-gray-300 text-sm flex items-center justify-center hover:bg-gray-400 focus:outline-none w-full sm:w-auto p-3'
              onClick={handleStatistics}>Statistics</button>
          </div>
          {showMetrics && <MetricsWindow />}
          {showGoals && <GoalsWindow />}
          {showStatistics && <StatisticsWindow />}
        </div>

    </div>
  )
}

export default Profile