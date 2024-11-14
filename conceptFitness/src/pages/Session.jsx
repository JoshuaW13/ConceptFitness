import React, { useState } from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import HomeButton from '../components/HomeButton';
import ProfileButton from '../components/ProfileButton';
import CatalogueDrawerContent from '../components/CatalogueDrawerContent';
import SlidingDrawer from '../components/SlidingDrawer';
import ExerciseLog from '../components/ExerciseLog';
import { useNavigate } from 'react-router-dom';

function Session() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();

  const handleFinishSession = () => {
    setIsPopupVisible(true);
  };

  const handleBackToHome = () => {
    navigate("/home");
  };

  return (
    <div className='session-page flex flex-col items-center relative w-full h-full max-w-[1200px] mx-auto'>
      <NavBar FirstButton={HomeButton} SecondButton={ProfileButton} />

      <div className='flex justify-between w-full px-4 py-4'>
        <button className='time-button bg-gray-300 p-1 w-1/4 text-sm'>Time</button>
        <button className='session-time-button bg-gray-300 p-1 w-1/4 text-sm' onClick={handleFinishSession}>Finish Session</button>
      </div>

      <div className='main-content flex flex-col items-center w-full px-4 gap-4'>
        {/* Weight and Reps Section */}
        <div className='controls flex items-center justify-center gap-4 w-full mb-4'>
          <div className='triangle-left'></div>
          <div className='flex flex-col items-center gap-4'>
            <div className='flex items-center gap-2'>
              <label className='text-lg'>Weight:</label>
              <input type='number' className='weight-input w-16 text-center border p-1' />
            </div>
            <div className='flex items-center gap-2'>
              <label className='text-lg'>Reps:</label>
              <input type='number' className='reps-input w-16 text-center border p-1' />
            </div>
          </div>
          <div className='triangle-right'></div>
        </div>

        {/* Stacked Exercise Boxes */}
        <div className='exercise-section flex flex-col w-full gap-4'>
          {/* Current Exercise Box */}
          <div className='exercise-description-box bg-gray-200 p-4 rounded-md w-full'>
            <h3 className='text-lg font-bold mb-2'>Current Exercise</h3>
            <div className='video-placeholder bg-white relative mb-2 h-32 w-full'>
              <img
                src='https://www.goodfreephotos.com/albums/people/guy-doing-push-up.jpg'
                alt='Push-up Exercise'
                className='absolute inset-0 w-full h-full object-cover rounded-md'
              />
              <button className='play-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2'>
                ▶
              </button>
            </div>
            <p className='text-sm'>A push-up is a common exercise used in strength training to build upper body strength.</p>
          </div>

          {/* Workout Exercises Box */}
          <div className='workout-list bg-gray-200 p-4 rounded-md w-full h-[200px] overflow-y-auto'>
            <h3 className='text-lg font-bold mb-2'>Workout Exercises</h3>
            <CatalogueDrawerContent />
          </div>
        </div>
      </div>

      {/* Sliding Drawer with Exercise Logs */}
      <SlidingDrawer Content={() => (
        <div className="flex flex-col p-4 gap-4">
          <h2 className="text-xl font-bold text-center mb-4">Session Records</h2>
          <ExerciseLog />
          <ExerciseLog />
          <ExerciseLog />
        </div>
      )} />

      {/* Finish Session Popup */}
      {isPopupVisible && (
        <div className='popup absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
            <p className='text-lg font-semibold mb-4'>Session Completed!</p>
            <button
              className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none'
              onClick={handleBackToHome}
            >
              Back to Home Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Session;
