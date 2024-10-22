import { useState } from 'react'
import React from 'react'
import '../App.css'
import NavBar from '../components/navBar'
import HomeButton from '../components/HomeButton'
import ProfileButton from '../components/ProfileButton'
import Calender from '../components/Calender'

function Home() {

  return (
      <div className='w-full h-full flex flex-col items-center'>
        <NavBar FirstButton={HomeButton} SecondButton={ProfileButton}></NavBar>
        <Calender></Calender>
        <div className='flex flex-col m-4 w-[90%] gap-4'>
          <div className='flex flex-row gap-2'>
            <div className='flex flex-col w-[30%] gap-4'>
              <button className='bg-gray-300 text-sm flex items-center justify-center'>Catalogue</button>
              <button className='bg-gray-300 text-sm flex items-center justify-center'>Programs</button>
              <button className='bg-gray-300 text-sm flex items-center justify-center'>Logs</button>
            </div>
            <div className='w-[80%] bg-gray-300 rounded-lg'>
              Goals
            </div>
          </div>
          <button className='bg-gray-300'>Start Session</button>
        </div>
        
      </div>
  )
}

export default Home
