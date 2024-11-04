import React from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import HomeButton from '../components/HomeButton';
import ProfileButton from '../components/ProfileButton';
import CatalogueDrawerContent from '../components/CatalogueDrawerContent';
import SlidingDrawer from '../components/SlidingDrawer';
import ExerciseLog from '../components/ExerciseLog';

function Session() {
  return (
    <div className='session-page w-full h-full flex flex-col items-center relative'>
      <NavBar FirstButton={HomeButton} SecondButton={ProfileButton} />
      
      <div className='flex justify-between w-full px-8 py-4'>
        <button className='time-button bg-gray-300 p-1 w-1/4 text-sm'>Time</button>
        <button className='session-time-button bg-gray-300 p-1 w-1/4 text-sm'>Session Time</button>
      </div>

      <div className='flex w-full px-8 gap-4 flex-grow flex-col'>
        <div className='left-section w-full flex flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <label className='text-lg'>Weight:</label>
            <input type='number' className='weight-input w-16 text-center border p-1' />
            <button className='increment-button bg-gray-300 p-1'>+</button>
          </div>
          <div className='flex items-center gap-2'>
            <label className='text-lg'>Reps:</label>
            <input type='number' className='reps-input w-16 text-center border p-1' />
          </div>
        </div>

        <div className='flex flex-col w-full flex-grow gap-4'>
          <div className='exercise-description-box bg-gray-200 p-4 rounded-md w-full'>
            <h3 className='text-lg font-bold mb-2'>Current Exercise</h3>
            <div className='video-placeholder bg-white h-32 w-full relative mb-2'>
              <img
                src='https://www.goodfreephotos.com/albums/people/guy-doing-push-up.jpg' // Push-up thumbnail
                alt='Push-up Exercise'
                className='absolute inset-0 w-full h-full object-cover rounded-md'
              />
              <button className='play-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2'>
                ▶
              </button>
            </div>
            <p className='text-sm'>A push-up is a common exercise used in strength training to build upper body strength.</p>
          </div>

          {/* Exercise list box with CatalogueDrawerContent */}
          <div className='workout-list bg-gray-200 p-4 rounded-md w-full h-[200px] overflow-y-auto'>
            <h3 className='text-lg font-bold mb-2'>Workout Exercises</h3>
            <CatalogueDrawerContent />
          </div>
        </div>
      </div>
      {/* Sliding Drawer with ExerciseLog components */}
      <SlidingDrawer Content={() => (
        <div className="flex flex-col p-4 gap-4">
          <h2 className="text-xl font-bold text-center mb-4">Session Records</h2>
          <ExerciseLog />
          <ExerciseLog />
          <ExerciseLog />
        </div>
      )} />
    </div>
  );
}

export default Session;
