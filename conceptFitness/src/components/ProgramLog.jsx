import React, { useState } from 'react';
import '../App.css';
import StartIcon from '../assets/startIcon.png';
import Popup from './Popup';
import Menu from "@mui/icons-material/Menu";
import ProgramLogPopup from "../components/ProgramLogPopup";
import { useNavigate } from 'react-router-dom';
import Tag from './Tag';

function ProgramLog({ onClick, name, tags, numExercises }) {
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

          {/* Only render the tags once, conditionally */}
          <div className='flex gap-1 justify-center'>
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

        <div className='flex flex-col h-full justify-between'>
          <button className='flex w-6 h-6 bg-gray-300' onClick={navigateSession}>
            <img src={StartIcon} alt="" className="p-1" />
          </button>
          <button
            className='flex relative items-center text-black bg-gray-300 hover:bg-gray-400 w-6 h-6 rounded transition duration-200 focus:outline-none'
            onClick={(e) => { setIsPopupVisible(!isPopupVisible); e.stopPropagation() }}
          >
            <Menu />
            {isPopupVisible && (
              <Popup className="relative" onClick={(e) => { setIsPopupVisible(false); e.stopPropagation() }} Content={ProgramLogPopup} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProgramLog;
