import React, { useState }  from 'react'
import '../App.css'
import StartIcon from '../assets/startIcon.png'
import Popup from './Popup'
import Menu from "@mui/icons-material/Menu";
import ProgramLogPopup from "../components/ProgramLogPopup"
import { useNavigate } from 'react-router-dom';

function ProgramLog({onClick}) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  
  const navigate = useNavigate();
  const navigateSession = () =>{
    navigate("/session")
  }

  return (
    <div className='bg-gray-400 w-full rounded-t-lg font-semibold'>
      <div className='flex bg-gray-500 rounded-t-lg w-full p-1 items-center'>
        <p className='text-lg w-[92%]' onClick={onClick}>Program Name</p>
        <div className='flex flex-col h-14 justify-between'>
          <button className='flex w-6 h-6 bg-gray-300' onClick={navigateSession} >
            <img src={StartIcon} alt="" className="p-1" />
          </button>
          <button className='flex items-center text-black bg-gray-300 hover:bg-gray-400 w-6 h-6 rounded transition duration-200 focus:outline-none' 
            onClick={() => setIsPopupVisible(!isPopupVisible)} 
            >
            <Menu />
            {isPopupVisible && (
            <Popup className="relative" onClick={() => setIsPopupVisible(false)} Content={ProgramLogPopup}></Popup>
            )}
          </button>
        </div>
      </div>
      <p className='text-base'onClick={onClick}>Tag: Tag(s)</p>
      <p className='text-base'onClick={onClick}># of Exercises: -</p>
    </div>
  )
}

export default ProgramLog
