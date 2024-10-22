import { useState } from 'react'
import React from 'react'
import '../App.css'
import viteLogo from '/vite.svg'
import ProfileButton from './ProfileButton'
import HomeButton from './HomeButton'

function NavBar({FirstButton, SecondButton}) {

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100  w-full rounded-tr rounded-tl max-h-[12%]">
        <FirstButton /> 
        <SecondButton /> 
  </nav>
  )
}

export default NavBar
