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
    <button className="text-black text-lg font-bold w-1/4 h-10 flex items-center justify-center hover:bg-gray-200 focus:outline-none"
      style={{ backgroundColor: '#EAE7DC' }}
      onClick={handleClick}
    >
        <img src={settingsLogo} alt="" className="p-6" />
    </button>
  )
}

export default SettingsButton
