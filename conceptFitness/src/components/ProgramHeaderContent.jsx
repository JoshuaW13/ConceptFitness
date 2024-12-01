import React, { useState } from 'react';
import '../App.css';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useCalendarContext } from '../contexts/CalendarContext';
import Popup_Notif from '../components/Popup_Notif';
import Tag from './Tag';

function ProgramHeaderContent({ onClick, id, name, tags, numExercises }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const { days } = useCalendarContext()
  const msg = "Testing"

  const assignProgram = () => {
    const selectedDay = days.find((d) => d.selected == true);
    console.log(selectedDay)
    selectedDay.program = id
    showNotif()
  }

  const showNotif = () => {
    setIsPopupVisible(true);
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 2000);    
  }

  return (
    <div className='flex text-black w-full rounded-t-lg font-semibold justify-center'>
      <div className='flex rounded-t-lg w-full h-full p-1 items-center'>
        <div className='flex flex-col w-full'>
          <p className='relative text-lg w-full'>{name}
            <EventAvailableIcon className='absolute right-0 rounded-md bg-gray-400' fontSize='medium' onClick={assignProgram}/>
          </p>

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

          <p className='text-base'># of Exercises: {numExercises}</p>
        </div>
      </div>
      {isPopupVisible && (
        <Popup_Notif Content={msg}/>
      )}
    </div>
  );
}

export default ProgramHeaderContent;
