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
        <div className="w-[50%] h-[20%] bg-gray-50 rounded-lg shadow-lg flex items-center justify-center mt-6 border-gray border-2">
          <img src={ProfilePicture} className="w-[90%] h-[40%] flex "></img>
          <p className='text-black m-4 w-[90%]'>Name</p>
        </div>

        <div className='flex flex-row gap-4 m-4'>
          <button className='bg-gray-300 text-sm flex items-center justify-center flex-grow hover:bg-gray-200 focus:outline-none'
          onClick={handleClick}>Metrics</button>
          <button className='bg-gray-300 text-sm flex items-center justify-center flex-grow hover:bg-gray-200 focus:outline-none'
          >Goals</button>
          <button className='bg-gray-300 text-sm flex items-center justify-center flex-grow hover:bg-gray-200 focus:outline-none'
          >Statistics</button>
        </div>
        {showMetrics && <MetricsWindow />}

    </div>
  )
}

export default Profile