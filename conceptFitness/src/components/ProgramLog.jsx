import React from 'react'
import '../App.css'
import StartIcon from '../assets/startIcon.png'
import { useNavigate } from 'react-router-dom';

function ProgramLog({onClick}) {
  const navigate = useNavigate();

  const navigateSession = () =>{
    navigate("/session")
  }

  return (
    <div className='bg-gray-200 w-full rounded-t-lg font-semibold' onClick={onClick}>
        <div className='flex bg-gray-200 rounded-t-lg w-full p-1'>
          <p className='flex text-lg w-[92%] justify-center'>Program Name: Name</p>
          <button className='flex w-7 h-7  bg-gray-300' onClick={navigateSession} >
            <img src={StartIcon} alt="" className="p-1" />
          </button>
        </div>
        <p className='text-base'>Tag: Tag(s)</p>
        <p className='text-base'># of Exercises: -</p>
    </div>
  )
}

export default ProgramLog
