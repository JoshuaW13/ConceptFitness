import React from 'react';
import '../App.css';
import CloseIcon from '@mui/icons-material/Close';

function Popup_FullScreen({onClick, Content, Title }) {
  return (
    <div className="absolute h-full w-full top-0 left-0 bg-black/70 z-10 flex">
      <div className='flex flex-col h-full w-full my-10 mx-5 mb-5 bg-gray-300 rounded-lg'>
        <div className="flex flex-col h-full w-fill">
          <div className='flex w-full mt-3'>
            <p className='flex relative text-2xl font-bold h-full w-full items-center align-middle justify-center'>{Title}
              <CloseIcon className='absolute m-2 bg-gray-500 rounded-md right-0' fontSize='large' onClick={onClick}/>
            </p>
          </div>
          <Content/>
        </div>
      </div>
    </div>
  );
}

export default Popup_FullScreen;
