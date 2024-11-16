import React, { useState } from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import HomeButton from '../components/HomeButton';
import ProfileButton from '../components/ProfileButton';
import CatalogueDrawerContent from '../components/CatalogueDrawerContent';
import SlidingDrawerWithScrolling from '../components/SlidingDrawerWithScrolling';
import ExerciseLog from '../components/ExerciseLog';
import { useNavigate } from 'react-router-dom';

function Session() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();

  const handleFinishSession = () => {
    setIsPopupVisible(true);
  };

  const handleBackToHome = () => {
    setIsPopupVisible(false);
    navigate("/home");
  };

  return (
    <div className='session-page w-full h-full relative'>
      {/* Scrollable container */}
      <div className='scrollable-container'>
        <NavBar FirstButton={HomeButton} SecondButton={ProfileButton} />
        
        <div className='flex justify-between w-full px-8 py-4'>
          <button className='time-button bg-gray-300 p-1 w-1/4 text-sm'>Time</button>
          <button 
            className='session-time-button bg-gray-300 p-1 w-1/4 text-sm' 
            onClick={handleFinishSession}
          >
            Finish Session
          </button>
        </div>

        <div className='flex flex-col w-full px-8 gap-4 flex-grow'>
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

          {/* Current Exercise Box */}
          <div className='exercise-description-box bg-gray-200 p-4 rounded-md'>
            <h3 className='text-lg font-bold mb-2'>Current Exercise</h3>
            <div className='video-placeholder bg-white w-full relative mb-2'>
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

          {/* Workout Exercises List */}
          <div className='workout-list bg-gray-200 p-4 rounded-md'>
            <h3 className='text-lg font-bold mb-2'>Workout Exercises</h3>
            <CatalogueDrawerContent />
          </div>
        </div>
        
        {/* Sliding Drawer with Scrolling */}
        <SlidingDrawerWithScrolling Content={() => (
          <div className="flex flex-col p-4 gap-4">
            <h2 className="text-xl font-bold text-center mb-4">Session Records</h2>
            <ExerciseLog />
            <ExerciseLog />
            <ExerciseLog />
            <ExerciseLog />
            <ExerciseLog />
            <ExerciseLog />
            {/* Add more ExerciseLogs here to test scrolling */}
          </div>
        )} />
      </div>

      {/* Finish Session Confirmation Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-3/4 max-w-md text-center">
            <h2 className="text-lg font-bold mb-2">Session Completed!</h2>
            <button 
              onClick={handleBackToHome} 
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Session;
