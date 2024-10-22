import { useState } from 'react'
import React from 'react'
import '../App.css'
import viteLogo from '/vite.svg'
import Profile from "@mui/icons-material/AccountCircle"
function ProfileButton() {

  return (
    <button className="text-black bg-gray-300 hover:bg-gray-200 px-4 py-2 rounded ml-4:">
        <Profile></Profile>
    </button>
  )
}

export default ProfileButton