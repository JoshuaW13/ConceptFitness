import React from 'react';
import '../App.css';
import CloseIcon from '@mui/icons-material/Close';

function Popup_FullScreen({onClick, selectedDate, Content, Title }) {
  return (
    <div className="absolute h-full w-full top-0 left-0 bg-black/0 z-10 z-[99] flex items-center">
      <div className='flex flex-col h-[95%] w-full mx-5 bg-gray-300 rounded-lg z-10'>
        <div className="flex flex-col h-full w-fill z-10">
          <div className='flex w-full mt-3 z-10'>
            <p className='flex relative text-2xl font-bold h-full w-full items-center align-middle justify-center z-10'>{Title}
              <CloseIcon className='absolute m-2 bg-gray-500 rounded-md right-0 z-10' fontSize='large' onClick={onClick}/>
            </p>
          </div>
          <Content
            onClick={onClick}
            selectedDate={selectedDate}
          />
        </div>
      </div>
    </div>
  );
}

export default Popup_FullScreen;
