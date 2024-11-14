import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';


function SessionLogPage() {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/sessionLogs")
  }

  return (
    <button className="text-black text-sm font-bold w-1/4 bg-gray-300 h-10 flex items-center justify-center hover:bg-gray-200 focus:outline-none"
      onClick={handleClick}
    >
        <p>Sessions</p>
    </button>
  )
}

export default SessionLogPage
