import React, { useState } from 'react';
import '../App.css';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useCalendarContext } from '../contexts/CalendarContext';
import { useNavigate } from 'react-router-dom';
import Tag from './Tag';

function ProgramHeaderContent({ onClick, id, name, tags, numExercises }) {
  const { days } = useCalendarContext()
  const navigate = useNavigate()

  const navigateHome = () => {
    navigate("/home");
  };

  const assignProgram = () => {
    const selectedDay = days.find((d) => d.selected == true);
    console.log(selectedDay)
    selectedDay.program = id
    selectedDay.selected = false
    navigateHome()
  }

  return (
    <div className='text-black w-full rounded-t-lg font-semibold'>
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
    </div>
  );
}

export default ProgramHeaderContent;
