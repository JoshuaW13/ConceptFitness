import React, { useState } from 'react';
import '../App.css'
import Popup from './Popup'
import Menu from "@mui/icons-material/Menu";
import SearchIcon from "../assets/SearchIcon.png"
import ExerciseDataPopupSearch from "../components/ExerciseDataPopupSearch"


function ExerciseInfoHeaderShort({id, onClick, exerciseName, exerciseEquipment, onRemove, setSearchText, setSearchState }) {

const [isPopupVisible, setIsPopupVisible] = useState(false);
  return (
    <div className='flex p-1 text-black w-full rounded-t-lg font-semibold'>
      <div className='flex flex-col rounded-lg w-[92%]'onClick={onClick}>
          <p className='text-lg rounded-t-lg'>{exerciseName}</p>
          <p className='text-base'>Equipment: {exerciseEquipment}</p>
      </div>
      <div className='flex flex-col justify-between'>
        <button 
          className="text-black bg-gray-300 hover:bg-gray-400 w-6 h-6 px-1.5 text-center rounded transition duration-200 focus:outline-none"
          onClick={onRemove}
          >
          -
        </button>
        <button 
          className="flex relative items-center text-black bg-gray-300 hover:bg-gray-400 w-6 h-6 rounded transition duration-200 focus:outline-none" 
          onClick={(e) => {setIsPopupVisible(!isPopupVisible); e.stopPropagation()}}
          >
          <Menu />
          {isPopupVisible && (
            <Popup onClick={(e) => {setIsPopupVisible(!isPopupVisible); e.stopPropagation()}} Content={ExerciseDataPopupSearch} contentProps={{exerciseId: id, setSearchState: setSearchState, setSearchText: setSearchText}} className=''></Popup>
          )}
        </button>
      </div>
    </div>
  )
}

export default ExerciseInfoHeaderShort
