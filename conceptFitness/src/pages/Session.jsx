import React, { useState, useEffect } from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import HomeButton from '../components/HomeButton';
import ProfileButton from '../components/ProfileButton';
import SlidingDrawerWithScrolling from '../components/SlidingDrawerWithScrolling';
import { useNavigate } from 'react-router-dom';

function Session() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // State for search input
  const [selectedProgram, setSelectedProgram] = useState(null); // Selected program
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0); // Index of current exercise
  const [completedExercises, setCompletedExercises] = useState([]); // Completed exercises
  const [weights, setWeights] = useState({}); // State to store weights
  const [reps, setReps] = useState({}); // State to store reps
  const [timer, setTimer] = useState(0); // Timer state to track elapsed time
  const [isTimerRunning, setIsTimerRunning] = useState(false); // State to track if timer is running

  // Hardcoded list of programs and their exercises
  const programs = [
    { name: 'Forearm Workout', exercises: ['Wrist Curl', 'Reverse Wrist Curl', 'Finger Curl'] },
    { name: 'Upper Body Workout', exercises: ['Push-ups', 'Pull-ups', 'Bench Press'] },
  ];

  const navigate = useNavigate();

  // Load completed exercises from localStorage when the component is mounted
  useEffect(() => {
    const storedExercises = localStorage.getItem('completedExercises');
    if (storedExercises) {
      setCompletedExercises(JSON.parse(storedExercises));
    }
  }, []);

  // Save completed exercises to localStorage when they change
  useEffect(() => {
    if (completedExercises.length > 0) {
      localStorage.setItem('completedExercises', JSON.stringify(completedExercises));
    }
  }, [completedExercises]);

  // Timer logic: increment time every second if the timer is running
  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000); // Increment timer by 1 second
    } else {
      clearInterval(interval); // Clear interval when timer is stopped
    }

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [isTimerRunning]);

  // Function to go to the previous exercise
  const handlePrevExercise = () => {
    setCurrentExerciseIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : selectedProgram.exercises.length - 1
    );
  };

  // Function to go to the next exercise
  const handleNextExercise = () => {
    setCurrentExerciseIndex((prevIndex) =>
      prevIndex < selectedProgram.exercises.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Function to handle selecting a program
  const handleProgramSelect = (program) => {
    setSelectedProgram(program);
    setSearchTerm(program.name); // Set the search input to the selected program's name
    setCurrentExerciseIndex(0); // Reset to the first exercise
    setWeights({}); // Reset weights
    setReps({}); // Reset reps
  };

  // Function to handle weight and reps input change
  const handleInputChange = (exerciseIndex, type, value) => {
    if (type === 'weight') {
      setWeights((prev) => ({ ...prev, [exerciseIndex]: value }));
    } else if (type === 'reps') {
      setReps((prev) => ({ ...prev, [exerciseIndex]: value }));
    }
  };

  // Handle finishing the session and showing the confirmation popup
  const handleFinishSession = () => {
    if (!selectedProgram) {
      alert("Please select a program first.");
      return; // Exit if no program is selected
    }

    const sessionRecord = {
      program: selectedProgram,
      exercises: selectedProgram.exercises.map((exercise, index) => ({
        exercise,
        weight: weights[index] || 'N/A', // Use 'N/A' if no weight is provided
        reps: reps[index] || 'N/A', // Use 'N/A' if no reps are provided
      })),
    };

    // Add the new session record to the state
    setCompletedExercises((prev) => {
      const updatedExercises = [...prev, sessionRecord];
      return updatedExercises;
    });

    // Show the confirmation popup
    setIsPopupVisible(true);

    // Stop the timer when session is finished
    setIsTimerRunning(false);
  };

  const handleBackToHome = () => {
    setIsPopupVisible(false);
    navigate('/home');
  };

  // Filter the programs based on the search term
  const filteredPrograms = programs.filter((program) =>
    program.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current exercise details based on the selected program and current exercise index
  const currentExercise = selectedProgram
    ? selectedProgram.exercises[currentExerciseIndex]
    : null;

  // Format the timer in mm:ss format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="session-page w-full h-full relative">
      <div className="scrollable-container">
        <NavBar FirstButton={HomeButton} SecondButton={ProfileButton} />

        <div className="flex justify-between w-full px-8 py-4">
          {isTimerRunning ? (
            <button className="time-button bg-gray-300 p-1 w-1/4 text-sm">{formatTime(timer)}</button>
          ) : (
            <button
              className="time-button bg-gray-300 p-1 w-1/4 text-sm"
              onClick={() => setIsTimerRunning(true)} // Start the timer
            >
              Start Timer
            </button>
          )}
          <button 
            className="session-time-button bg-gray-300 p-1 w-1/4 text-sm"
            onClick={handleFinishSession}
          >
            Finish Session
          </button>
        </div>

        <div className="flex flex-col w-full px-8 gap-4 flex-grow">
          {/* Weight and Reps Section */}
          <div className="controls flex items-center justify-center gap-4 w-full mb-4">
            <div className="triangle-left" onClick={handlePrevExercise}></div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-lg">Weight:</label>
                <input
                  type="number"
                  className="weight-input w-16 text-center border p-1"
                  value={weights[currentExerciseIndex] || ''}
                  onChange={(e) => handleInputChange(currentExerciseIndex, 'weight', e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-lg">Reps:</label>
                <input
                  type="number"
                  className="reps-input w-16 text-center border p-1"
                  value={reps[currentExerciseIndex] || ''}
                  onChange={(e) => handleInputChange(currentExerciseIndex, 'reps', e.target.value)}
                />
              </div>
            </div>
            <div className="triangle-right" onClick={handleNextExercise}></div>
          </div>

          {/* Current Exercise Box */}
          <div className="exercise-description-box bg-gray-200 p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">Current Exercise</h3>
            {currentExercise ? (
              <>
                <div className="video-placeholder bg-white w-full relative mb-2">
                  <video
                    src="https://www.youtube.com/embed/IODxDxX7oi4"
                    type="video/mp4"
                    controls
                    className="w-full h-full object-cover rounded-md"
                  >
                    Your browser do not support video tag
                 </video>
                </div>
                <p className="text-sm">{currentExercise} is a common exercise used in strength training.</p>
              </>
            ) : (
              <p className="text-sm">Select a program to begin.</p>
            )}
          </div>

          {/* Program Input and Dropdown */}
          <div className="workout-list bg-gray-200 p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">Workout Exercises</h3>
            <div className="flex items-center gap-2">
              <label className="text-md font-semibold">Current Program</label>
              <input
                type="text"
                className="w-full border rounded p-2"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input
              />
            </div>
            {searchTerm && (
              <div className="program-dropdown bg-white border rounded shadow-md mt-2 max-h-40 overflow-y-auto">
                {filteredPrograms.length > 0 ? (
                  filteredPrograms.map((program, index) => (
                    <div
                      key={index}
                      className="p-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleProgramSelect(program)}
                    >
                      {program.name}
                    </div>
                  ))
                ) : (
                  <div className="p-2 text-gray-500">No programs found</div>
                )}
              </div>
            )}

            {/* List of Exercises for the Selected Program */}
            {selectedProgram && (
              <div className="exercise-list mt-4 max-h-40 overflow-y-auto">
                <div className="exercise-header">
                  <span className="text-md font-semibold">Exercises</span>
                </div>
                <div className="max-h-40 overflow-y-auto">
                  {selectedProgram.exercises.map((exercise, index) => (
                    <div
                      key={index}
                      className="exercise-item p-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => setCurrentExerciseIndex(index)}
                    >
                      <span className="font-semibold">Exercise {index + 1}:</span> {exercise}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
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

        {/* Sliding Drawer with Scrolling */}
        <SlidingDrawerWithScrolling Content={() => (
          <div className="flex flex-col p-4 gap-4">
            <h2 className="text-xl font-bold text-center mb-4">Session Records</h2>
            {completedExercises.map((session, index) => (
              <div key={index} className="session-record p-2 mb-2 bg-white rounded-md shadow-md">
                <h3 className="text-lg font-semibold">{session.program.name}</h3>
                <div className="exercises-list">
                  {session.exercises.map((exercise, idx) => (
                    <div key={idx} className="exercise-entry p-2">
                      <p>{exercise.exercise}</p>
                      <p>Weight: {exercise.weight}</p>
                      <p>Reps: {exercise.reps}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )} />
      </div>
    </div>
  );
}

export default Session;  