import React from 'react'
import '../App.css'
import { useState } from 'react'
import NavBar from '../components/navBar'
import HomeButton from '../components/HomeButton'
import SettingsButton from '../components/SettingsButton'
import ProfilePicture from '../assets/profilePicture.svg'
import MetricsWindow from '../components/MetricsWindow'

function Profile() {

  const [showMetrics, setShowMetrics] = useState(false)

  const handleClick = () =>{
    setShowMetrics(true)
  }

  return (
    <div className='w-full h-full flex flex-col items-center'>
        <NavBar FirstButton={HomeButton} SecondButton={SettingsButton}></NavBar>
        <div className='flex flex-col m-4 w-[90%] gap-4 flex-grow items-center'>
          <div className="w-[50%] h-[30%] bg-gray-50 rounded-lg shadow-lg flex items-center justify-center border-gray border-2">
            <div className="w-[30%] h-[60%] flex justify-content">
              <img src={ProfilePicture}></img>
            </div>
            <div className='ml-4'>
              <p className='text-black'>Name</p>
            </div>
          </div>
          
          <div className='flex flex-wrap justify-center gap-3 w-full m-4'>
              <button className='bg-gray-300 text-sm flex items-center justify-center hover:bg-gray-200 focus:outline-none w-full sm:w-auto'
              onClick={handleClick}>Metrics</button>
              <button className='bg-gray-300 text-sm flex items-center justify-center hover:bg-gray-200 focus:outline-none w-full sm:w-auto'
              >Goals</button>
              <button className='bg-gray-300 text-sm flex items-center justify-center hover:bg-gray-200 focus:outline-none w-full sm:w-auto'
              >Statistics</button>
          </div>
          {showMetrics && <MetricsWindow />}
        </div>

    </div>
  )
}

export default Profile