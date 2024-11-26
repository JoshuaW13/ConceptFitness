import React from 'react'
import '../App.css'
import settingsLogo from '/settings.svg'
import SettingsPopup from '../components/SettingsPopup'
import { useState } from 'react'

// import { useNavigate } from 'react-router-dom';


function SettingsButton() {
  // const navigate = useNavigate();
  // const handleClick = ()=>{
  //   navigate("/settings")
  // }

  const [showSettings, setShowSettings] = useState(false)

  const handleSettings = () => {
    setShowSettings(true)
  }

  const handleSettingsClose = () => {
    setShowSettings(false)
  }

  return (
    <div className='w-1/4 h-10 flex items-center justify-center'>
        <button className="h-10 font-bold hover:bg-gray-200 focus:outline-none flex items-center justify-center"
          style={{ backgroundColor: '#EAE7DC' }}
          onClick={handleSettings}
        >
            <img src={settingsLogo} alt="" className="p-6" />
        </button>
    
        {showSettings && <SettingsPopup onClose={handleSettingsClose}/>}
    </div>
  )
}

export default SettingsButton
