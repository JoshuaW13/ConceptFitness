import React, { useState } from 'react';
import '../App.css';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useCalendarContext } from '../contexts/CalendarContext';
import Popup_Notif from '../components/Popup_Notif';
import Tag from './Tag';
import { useNotifContext } from "../contexts/NotifContext.jsx";

function ProgramHeaderContent({ onClick, selectedDate, id, name, tags, numExercises }) {
  const { addProgramToDay } = useCalendarContext()
  const { showNotif } = useNotifContext();

  const assignProgram = () => {
    addProgramToDay(selectedDate, id)
    showNotif("Program Scheduled")
    onClick()
  }

  return (
    <div className='flex text-black w-full rounded-t-lg font-semibold justify-center]'>
      <div className='flex rounded-t-lg w-full h-full p-1 items-center'>
        <div className='flex flex-col w-full'>
          <p className='relative text-lg w-full'>{name}
            <EventAvailableIcon className='absolute right-0 rounded-md bg-gray-400' fontSize='medium' onClick={assignProgram}/>
          </p>
          {/*ChatGPT used to help debug tag rendering method */}
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
    </div>
  );
}

export default ProgramHeaderContent;
