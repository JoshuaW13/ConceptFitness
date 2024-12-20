import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import HomeButton from '../components/HomeButton'
import SettingsIcon from '@mui/icons-material/Settings'
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
    bio: '',
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

  // ChatGPT was used to assist in creating the username and bio saving functionality
  useEffect(() => {
    const savedData = sessionStorage.getItem('profileData');
    if (savedData) {
        setProfileData(JSON.parse(savedData));
    }
  }, []);

  function SettingsButton() {
    return (
      <div className='w-1/4 h-10 flex items-center justify-center'>
        <button
          className="text-black px-4 py-2 rounded focus:outline-none relative button hover:border-[#E85A4F]"
          style={{ backgroundColor: '#EAE7DC' }}
          onClick={handleSettings}
        >
          <SettingsIcon
            style={{
              color: 'black',
            }}
          />
        </button>

        {showSettings && <SettingsPopup onClose={handleSettingsClose} onUnitChange={handleUnitChange}/>}

      </div>
    );
  }
  

  return (
    // very outer div on profile page has background class from App.css and makes the background relative
    <div className='h-full background relative overflow-y-auto overflow-x-hidden'>
        <NavBar FirstButton={HomeButton} SecondButton={SettingsButton} />
        <div className='flex flex-col items-center m-4 w-[90%] gap-4 flex-grow'>
          <div className="w-[100%] h-[50%] bg-gray-50 rounded-lg shadow-lg flex border-gray border-2 p-4 relative">
              <button onClick={handleEdit} className='absolute top-2 right-2 bg-gray-300'>
                  <img src={editIcon} alt="" className='w-6 h-6 p-1'></img>
              </button>
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
              <button className={`text-black flex items-center justify-center p-2 border-4 border-[#D8C3A5] hover:border-[#E85A4F] rounded-2xl font-bold flex-grow ${activeTab === "Metrics" ? "bg-[#E85A4F] text-white" : ""}`}
              onClick={() => handleMetrics('Metrics')}>Metrics</button>
              <button className={`text-black flex items-center justify-center p-2 border-4 border-[#D8C3A5] hover:border-[#E85A4F] rounded-2xl font-bold flex-grow ${activeTab === "Goals" ? "bg-[#E85A4F] text-white" : ""}`}
              onClick={() => handleGoals('Goals')}>Goals</button>
              <button className={`text-black flex items-center justify-center p-2 border-4 border-[#D8C3A5] hover:border-[#E85A4F] rounded-2xl font-bold flex-grow ${activeTab === "Statistics" ? "bg-[#E85A4F] text-white" : ""}`}
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