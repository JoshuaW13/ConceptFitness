import React from 'react';
import '../App.css';
import DateInput from './DateInput';
import ExerciseStatsWindow from './ExerciseStatsWindow';

function ExerciseData({ onClick, exercise }) {
  return (
    <div className="bg-[#EAE7DC] w-full rounded-lg shadow-sm font-semibold">
      <div className="flex flex-col gap-2 mb-4 mt-4 text-lg">
        <p className="text-black">
          <span className="font-semibold">Current Reps:</span> {exercise.reps}
        </p>
        <p className="text-black">
          <span className="font-semibold">Current Sets:</span> {exercise.sets}
        </p>
        <p className="text-black">
          <span className="font-semibold">Max Weight:</span> {exercise.weight} lbs
        </p>
      </div>
      <div className='w-full'>
        <ExerciseStatsWindow />
      </div>
      <DateInput />
    </div>
  );
}

export default ExerciseData;
