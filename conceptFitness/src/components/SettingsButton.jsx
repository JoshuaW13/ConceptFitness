import React from 'react'
import '../App.css'
import settingsLogo from '/settings.svg'
import { useNavigate } from 'react-router-dom';


function SettingsButton() {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/settings")
  }

  return (
    <button className="text-black text-lg font-bold w-1/4 bg-gray-300 h-10 flex items-center justify-center hover:bg-gray-200 focus:outline-none"
      onClick={handleClick}
    >
        <img src={settingsLogo} alt="" className="h-full w-auto" />
    </button>
  )
}

export default SettingsButton
