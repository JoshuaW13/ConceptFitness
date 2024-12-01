import React, { useState, useEffect } from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import HomeButton from '../components/HomeButton';
import ProfileButton from '../components/ProfileButton';
import SlidingDrawerWithScrolling from '../components/SlidingDrawerWithScrolling';
import { useNavigate, useLocation } from 'react-router-dom';
import { useProgramContext } from '../contexts/ProgramsContext';
import SessionExerciseHeader from '../components/SessionExerciseHeader';
import { useExerciseCatalogueContext } from '../contexts/ExerciseCatalogueContext';
import NextIcon from "@mui/icons-material/ArrowForward"
import BackIcon from "@mui/icons-material/ArrowBack"
import TabbedContainer from '../components/SessionTabContainer';

function Session() {
  const location = useLocation(); // Access the location object
  const { programToStart } = location.state || {}; // Retrieve the programToStart from the state
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // State for search input
  const [selectedProgram, setSelectedProgram] = useState(null); // Selected program
  const [currentExercise, setCurrentExercise] = useState();
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0); // Index of current exercise
  const [completedExercises, setCompletedExercises] = useState([]); // Completed exercises
  const [weights, setWeights] = useState({}); // State to store weights
  const [reps, setReps] = useState({}); // State to store reps
  const [timer, setTimer] = useState(0); // Timer state to track elapsed time
  const [isTimerRunning, setIsTimerRunning] = useState(false); // State to track if timer is running
  const [slidingDrawerOpen, setSlidingDrawerOpen] = useState(false);

  // Hardcoded list of programs and their exercises
  // const programs = [
  //   { name: 'Forearm Workout', exercises: ['Wrist Curl', 'Reverse Wrist Curl', 'Finger Curl'] },
  //   { name: 'Upper Body Workout', exercises: ['Push-ups', 'Pull-ups', 'Bench Press'] },
  // ];

  const {programs} = useProgramContext();
  const {exercises} = useExerciseCatalogueContext();

  const navigate = useNavigate();

  //load the program defaults
  useEffect(()=>{
    const programToSelect = programs.find(program=>program.id===programToStart)
    setSelectedProgram(programToSelect);
    //setSearchTerm(program.name); // Set the search input to the selected program's name
    setCurrentExercise(exercises.find(exercise=>exercise.id===programToSelect.exercises[0])); // Reset to the first exercise
    setWeights({}); // Reset weights
    setReps({}); // Reset reps
  },[])

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

  const prevExercise = () => {
    const currentExerciseIndex = selectedProgram.exercises.indexOf(currentExercise.id);
    const exerciseIndexToSet = currentExerciseIndex-1;
    const exerciseIdToSet = selectedProgram.exercises[exerciseIndexToSet];
    swapCurrentExercise(exerciseIdToSet);
  }
  
  const nextExercise = ()=>{
    const currentExerciseIndex = selectedProgram.exercises.indexOf(currentExercise.id);
    const exerciseIndexToSet = currentExerciseIndex+1;
    const exerciseIdToSet = selectedProgram.exercises[exerciseIndexToSet];
    swapCurrentExercise(exerciseIdToSet);
  }

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

  const swapCurrentExercise = (exerciseId)=>{
    setCurrentExercise(exercises.find(exercise=>exercise.id===exerciseId)); // Reset to the first exercise
  }

  // Filter the programs based on the search term
  // const filteredPrograms = programs.filter((program) =>
  //   program.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // Get current exercise details based on the selected program and current exercise index

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
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-base">Weight:</label>
                <input
                  type="number"
                  className="weight-input w-16 text-center border p-1"
                  value={weights[currentExerciseIndex] || ''}
                  onChange={(e) => handleInputChange(currentExerciseIndex, 'weight', e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-base">Reps:</label>
                <input
                  type="number"
                  className="reps-input w-16 text-center border p-1"
                  value={reps[currentExerciseIndex] || ''}
                  onChange={(e) => handleInputChange(currentExerciseIndex, 'reps', e.target.value)}
                />
              </div>
            </div>
            <button className='text-sm'>Save Set</button>
          </div>

          {/* Current Exercise Box */}
          <div className="exercise-description-box bg-gray-200 p-4 rounded-md">
            <div className='flex justify-center items-center gap-4'>
              {
                selectedProgram?.exercises?.[0] && currentExercise.id !== selectedProgram.exercises[0] && (
                  <button className="flex w-6 h-6 bg-gray-300" onClick={prevExercise}>
                    <BackIcon />
                  </button>
                )
              }
              <h3 className="text-lg font-bold mb-2">{currentExercise&& currentExercise.name}</h3>
                {selectedProgram?.exercises?.[0] && currentExercise.id !== selectedProgram.exercises[selectedProgram.exercises.length-1] && 
                (<button className='flex w-6 h-6 bg-gray-300' onClick={nextExercise}>
                  <NextIcon/>
                </button>)
              }
            </div>
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
                <p className="text-sm">{currentExercise.description}</p>
              </>
            ) : (
              <p className="text-sm">Select a program to begin.</p>
            )}
          </div>

          {/* Program Input and Dropdown */}
          {/* <div className="workout-list bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">{selectedProgram&& selectedProgram.name}</h3>

            {selectedProgram&&<div className='flex flex-col gap-1'>
              {
                selectedProgram.exercises.map((exerciseId, index)=>(
                    <SessionExerciseHeader key={index}
                      exerciseName={exercises.find(exercise=>exercise.id===exerciseId).name}
                    >
                    </SessionExerciseHeader>
                ))
              }
            </div>}
          </div> */}
        </div>

        {/* Finish Session Confirmation Popup */}
        {isPopupVisible && (
          <div className="fixed inset-0 -opacity-50 flex justify-center items-center z-50">
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
        <SlidingDrawerWithScrolling 
          isDrawerOpen={slidingDrawerOpen}
          setIsDrawerOpen={setSlidingDrawerOpen}
          Content={() => (
                selectedProgram && (
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold mb-2">{selectedProgram.name}</h3>
                    {selectedProgram.exercises.map((exerciseId, index) => {
                      const exercise = exercises.find(ex => ex.id === exerciseId);
                      if (!exercise) return null; // Handle case where exercise is not found

                      return (
                        <SessionExerciseHeader
                          key={index}
                          exerciseName={exercise.name}
                          onClick={(e) => {
                            console.log("Swapping exercise");
                            e.stopPropagation();
                            setSlidingDrawerOpen(false);
                            swapCurrentExercise(exerciseId);
                          }}
                        />
                      );
                    })}
                  </div>
                )
              )}
            />
      </div>
    </div>
  );
}

export default Session;  