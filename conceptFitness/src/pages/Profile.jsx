import React from 'react'
import '../App.css'
import NavBar from '../components/navBar'
import HomeButton from '../components/HomeButton'
import SettingsButton from '../components/SettingsButton'

function Profile() {

  return (
    <div className='w-full h-full flex flex-col items-center'>
        <NavBar FirstButton={HomeButton} SecondButton={SettingsButton}></NavBar>
    </div>
  )
}

export default Profile