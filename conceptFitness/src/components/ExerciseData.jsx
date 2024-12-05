import React from 'react';
import '../App.css';
import DateInput from './DateInput';
import ExerciseStatsWindow from './ExerciseStatsWindow';

function ExerciseData({ onClick, exercise }) {
  return (
    <div className="bg-gray-100 w-full rounded-lg shadow-sm font-semibold">
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-gray-700 text-lg">
          <span className="font-semibold">Current Reps:</span> {exercise.reps}
        </p>
        <p className="text-gray-700 text-lg">
          <span className="font-semibold">Current Sets:</span> {exercise.sets}
        </p>
        <p className="text-gray-700 text-lg">
          <span className="font-semibold">Max Weight:</span> {exercise.weight}
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
