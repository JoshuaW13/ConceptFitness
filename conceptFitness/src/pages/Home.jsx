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
      </div>
  )
}

export default Home
