import React from 'react';
import '../App.css';
import CloseIcon from '@mui/icons-material/Close';

function Popup_FullScreen({onClick, Content, contentProps, Title }) {
  const InitialComponent = Content;
  return (
    <div className="absolute h-full w-full top-0 left-0 bg-black/70 z-10 flex items-center">
      <div className='flex flex-col h-[95%] w-full mx-5 bg-gray-300 rounded-lg'>
        <div className="flex flex-col h-full w-fill">
          <div className='flex w-full mt-3'>
            <p className='flex relative text-2xl font-bold h-full w-full items-center align-middle justify-center'>{Title}
              <CloseIcon className='absolute m-2 bg-gray-500 rounded-md right-0' fontSize='large' onClick={onClick}/>
            </p>
          </div>
          {React.createElement(InitialComponent, contentProps)}
        </div>
      </div>
    </div>
  );
}

export default Popup_FullScreen;
