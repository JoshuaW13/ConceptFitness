import React, { useState } from 'react';
import '../App.css';
import StartIcon from '../assets/startIcon.png';
import Popup from './Popup';
import Menu from "@mui/icons-material/Menu";
import ProgramLogPopup from "../components/ProgramLogPopup";
import { useNavigate } from 'react-router-dom';
import Tag from './Tag';

function ProgramLog({ id, onClick, name, tags, numExercises }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const navigate = useNavigate();
  const navigateSession = () => {
    navigate("/session");
  };

  return (
    <div className='text-black w-full rounded-t-lg font-semibold'>
      <div className='flex rounded-t-lg w-full h-full p-1 items-center'>
        <div className='flex flex-col w-full'>
          <p className='text-lg w-[92%]' onClick={onClick}>{name}</p>

          {/* Tags is causing the problem */}
          <div className='flex-wrap h-[5%] flex gap-1'>
            {tags && tags.length > 0 ? (
              tags.map((tag, index) => (
                <Tag key={index} text={tag} />
              ))
            ) : (
              <p>No tags available</p>
            )}
          </div>


          <p className='text-base' onClick={onClick}># of Exercises: {numExercises}</p>
        </div>

          {/* The below div is overflowing outside it's parent!!! */}
          <div className='flex flex-col justify-between w-auto'>
            <button className='flex w-6 h-6 bg-gray-300' onClick={navigateSession}>
              <img src={StartIcon} alt="" className="p-1" />
            </button>
            <button
              className='flex relative items-center text-black bg-gray-300 hover:bg-gray-400 w-6 h-6 rounded transition duration-200 focus:outline-none'
              onClick={(e) => { setIsPopupVisible(!isPopupVisible); e.stopPropagation() }}
            >
              <Menu />
              {isPopupVisible && (
                <Popup className="relative" 
                onClick={(e) => { setIsPopupVisible(false); e.stopPropagation() }} 
                Content={ProgramLogPopup} 
                contentProps={{
                  programId: id
                }}
                />
              )}
            </button>
          </div>

      </div>
    </div>
  );
}

export default ProgramLog;
