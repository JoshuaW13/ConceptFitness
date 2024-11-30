import React from 'react';
import '../App.css';
import ExerciseGraph from "../assets/exerciseGraph.jpg";
import DateInput from './DateInput';

function ExerciseData({ onClick, exercise }) {
  return (
    <div className="bg-gray-100 w-full rounded-lg shadow-sm p-4 font-semibold">
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-gray-700 text-sm">Current Reps: {exercise.maxReps}</p>
        <p className="text-gray-700 text-sm">Current Sets: {exercise.currentSets}</p>
        <p className="text-gray-700 text-sm">Max Weight: {exercise.maxWeight}</p>
      </div>

      <div className="relative">
        <img src={ExerciseGraph} alt="Exercise Graph" className="w-full rounded-lg mb-4" />
      </div>
    <DateInput></DateInput>
    </div>
  );
}

export default ExerciseData;
