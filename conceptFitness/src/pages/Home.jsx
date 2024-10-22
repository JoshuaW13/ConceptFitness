import { useState } from 'react'
import React from 'react'
import '../App.css'
import NavBar from '../components/navBar'
import HomeButton from '../components/HomeButton'
import ProfileButton from '../components/ProfileButton'

function Home() {

  return (
      <div className='w-full h-full'>
        <NavBar FirstButton={HomeButton} SecondButton={ProfileButton}></NavBar>
      </div>
  )
}

export default Home
