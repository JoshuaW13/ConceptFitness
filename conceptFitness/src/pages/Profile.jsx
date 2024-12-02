import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import HomeButton from '../components/HomeButton'
import settingsLogo from '/settings.svg'
import MetricsWindow from '../components/MetricsWindow'
import GoalsWindow from '../components/GoalsWindow'
import StatisticsWindow from '../components/StatisticsWindow'
import editIcon from '../assets/EditIcon.png'
import ProfileInfo from '../components/ProfileInfo'
import ProfileInputs from '../components/ProfileInputs'
import SettingsPopup from '../components/SettingsPopup'
import CancelPopup from '../components/CancelPopup'

function Profile() {

  const [showMetrics, setShowMetrics] = useState(false)
  const [showGoals, setShowGoals] = useState(false)
  const [showStatistics, setShowStatistics] = useState(false)
  const [showProfileInfo, setShowProfileInfo] = useState(true)
  const [showProfileInput, setShowProfileInput] = useState(false)
  const [activeTab, setActiveTab] = useState('')
  const [showSettings, setShowSettings] = useState(false)
  const [unitSystem, setUnitSystem] = useState('metric')
  const [showCancelPopup, setShowCancelPopup] = useState(false)


  const handleMetrics = (tab) =>{
    setShowMetrics(true)
    setShowGoals(false)
    setShowStatistics(false)
    setActiveTab(tab)
  }

  const handleGoals = (tab) =>{
    setShowGoals(true)
    setShowMetrics(false)
    setShowStatistics(false)
    setActiveTab(tab)
  }

  const handleStatistics = (tab) =>{
    setShowStatistics(true)
    setShowGoals(false)
    setShowMetrics(false)
    setActiveTab(tab)
  }

  const handleEdit = () => {
    setShowProfileInfo(false)
    setShowProfileInput(true)    
  }

  const [profileData, setProfileData] = useState({
    bio: 'Write a Bio...',
  })

  const handleSave = (data) => {
    setProfileData(data)
    setShowProfileInput(false)
    setShowProfileInfo(true)
  }
  
  const handleSettings = () => {
    setShowSettings(true)
  }

  const handleSettingsClose = () => {
    setShowSettings(false)
  }

  const handleUnitChange = (newUnit) => {
    setUnitSystem(newUnit)
  }

  const handleCancel = () => {
    setShowCancelPopup(true)
  }

  const handleConfirmCancel = () => {
    setShowCancelPopup(false)
    setShowProfileInput(false)
    setShowProfileInfo(true)
  }

  const handleKeepEditing = () => {
    setShowCancelPopup(false)
    setShowProfileInput(true)
    setShowProfileInfo(false)
  }

  useEffect(() => {
    const savedData = sessionStorage.getItem('profileData');
    if (savedData) {
        setProfileData(JSON.parse(savedData));
    }
  }, []);

  function SettingsButton() {
    return (
      <div className='w-1/4 h-10 flex items-center justify-center'>
          <button className="h-10 font-bold hover:bg-gray-200 focus:outline-none border-black flex items-center justify-center"
            style={{ backgroundColor: '#EAE7DC' }}
            onClick={handleSettings}
          >
              <img src={settingsLogo} alt="" className="p-6" />
          </button>
      
          {showSettings && <SettingsPopup onClose={handleSettingsClose} onUnitChange={handleUnitChange}/>}
      </div>
    )
  }

  return (
    // very outer div on profile page has background class from App.css and makes the background relative
    <div className='background relative background'>
        <NavBar FirstButton={HomeButton} SecondButton={SettingsButton} />
        <div className='flex flex-col items-center m-4 w-[90%] gap-4 flex-grow'>
          <div className="w-[100%] h-[50%] bg-gray-50 rounded-lg shadow-lg flex border-gray border-2 p-4 relative">
            {/* <div> */}
              <button onClick={handleEdit} className='absolute top-2 right-2 bg-gray-300 z-[99]'>
                  <img src={editIcon} alt="" className='w-6 h-6 p-1'></img>
              </button>
            {/* </div> */}
            {showProfileInput && <ProfileInputs
              onSave={handleSave}
              onCancel={handleCancel}
              initialData={profileData}
            />}
            {showCancelPopup && <CancelPopup
              onConfirmCancel={handleConfirmCancel}
              onKeepEditing={handleKeepEditing}        
            />}
            {showProfileInfo && <ProfileInfo data={profileData} />}
          </div>
          <div className='flex flex-wrap justify-center gap-3 w-full m-2'>
              <button className={`button ${activeTab === "Metrics" ? "bg-[#E85A4F]" : ""}`}
              onClick={() => handleMetrics('Metrics')}>Metrics</button>
              <button className={`button ${activeTab === "Goals" ? "bg-[#E85A4F]" : ""}`}
              onClick={() => handleGoals('Goals')}>Goals</button>
              <button className={`button ${activeTab === "Statistics" ? "bg-[#E85A4F]" : ""}`}
              onClick={() => handleStatistics('Statistics')}>Statistics</button>
          </div>
          {showMetrics && <MetricsWindow unitSystem={unitSystem}/>}
          {showGoals && <GoalsWindow unitSystem={unitSystem} />}
          {showStatistics && <StatisticsWindow />}
        </div>

    </div>
  )
}

export default Profile


// very outer div on profile page
// w-full h-full flex flex-col items-center overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 rounded-lg

// metrics, goals, and statistics buttons
// <button className='bg-gray-300 text-sm flex items-center justify-center hover:bg-gray-400 focus:outline-none w-full sm:w-auto p-3'