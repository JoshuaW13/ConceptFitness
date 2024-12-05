import React, { useState, useEffect, useMemo, useRef } from 'react';
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
import DropDown from '../components/DropDown';
import SessionSetLog from '../components/SessionSetLog';
import Popup from '../components/Popup';
import ConfirmationPopup from '../components/ConfirmationPopup';
import { useSessionLogContext } from '../contexts/SessionLogContext';
import { useExerciseLogContext } from '../contexts/ExerciseLogContext';
import Timer from "../components/Timer"

function Session() {
  const location = useLocation(); // Access the location object
  const { programToStart } = location.state || {}; // Retrieve the programToStart from the state
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null); // Selected program
  const [currentExercise, setCurrentExercise] = useState();
  const [completedExercises, setCompletedExercises] = useState([]); // Completed exercises
  const [slidingDrawerOpen, setSlidingDrawerOpen] = useState(false);
  const [exerciseToLogData, setExerciseToLogData] = useState(new Map());
  const [currentSetData, setCurrentSetData]=useState({number:1,weight:0,reps:0});

  const {programs} = useProgramContext();
  const {exercises} = useExerciseCatalogueContext();
  const {sessionLogs, addSessionLog} = useSessionLogContext();
  const {exerciseLogs, updateExerciseLog} = useExerciseLogContext();

  const timerRef = useRef(0);

  const navigate = useNavigate();

  //load the program defaults
  useEffect(()=>{
    const programToSelect = programs.find(program=>program.id===programToStart)
    setSelectedProgram(programToSelect);
    //setSearchTerm(program.name); // Set the search input to the selected program's name
    setCurrentExercise(exercises.find(exercise=>exercise.id===programToSelect.exercises[0])); // Reset to the first exercise
  },[])

  useEffect(()=>{
    console.log("exercise to log data being change!")
    console.log(exerciseToLogData)

  },[exerciseToLogData])

  // Load completed exercises from localStorage when the component is mounted
  useEffect(() => {
    const storedExercises = localStorage.getItem('completedExercises');
    if (storedExercises) {
      setCompletedExercises(JSON.parse(storedExercises));
    }
  }, []);

  // useEffect(()=>{
  //   console.log("The current set data is "+currentSetData.reps);

  // }, [currentSetData])

  // Save completed exercises to localStorage when they change
  useEffect(() => {
    if (completedExercises.length > 0) {
      localStorage.setItem('completedExercises', JSON.stringify(completedExercises));
    }
  }, [completedExercises]);
  

  const resetSetData = (exerciseId)=>{
    const updatedSetData = { ...currentSetData };
    updatedSetData.weight =0;
    updatedSetData.reps =0;
    const exerciseData = exerciseToLogData.get(exerciseId);
    console.log("reset data being called");
    updatedSetData.number = (exerciseData && exerciseData.length > 0) ? exerciseData.length + 1 : 1;
    setCurrentSetData(updatedSetData);
  }

  const prevExercise = () => {
    const currentExerciseIndex = selectedProgram.exercises.indexOf(currentExercise.id);
    const exerciseIndexToSet = currentExerciseIndex-1;
    const exerciseIdToSet = selectedProgram.exercises[exerciseIndexToSet];
    resetSetData(exerciseIdToSet)
    swapCurrentExercise(exerciseIdToSet);
  }
  
  const nextExercise = ()=>{
    const currentExerciseIndex = selectedProgram.exercises.indexOf(currentExercise.id);
    const exerciseIndexToSet = currentExerciseIndex+1;
    const exerciseIdToSet = selectedProgram.exercises[exerciseIndexToSet];
    resetSetData(exerciseIdToSet)
    swapCurrentExercise(exerciseIdToSet);
  }

  // Function to handle weight and reps input change
  const handleInputChange = (type, value) => {
    // Create a copy of currentSetData and update the specific field
    const updatedSetData = { ...currentSetData }; 
  
    if (type === 'weight') {
      updatedSetData.weight = value; // Update the weight field
    } else if (type === 'reps') {
      updatedSetData.reps = value; // Update the reps field
    }
  
    // Set the new state with updatedSetData
    setCurrentSetData(updatedSetData);
  };

  // Handle finishing the session and showing the confirmation popup
  const handleFinishSession = () => {
    if (!selectedProgram) {
      alert("Please select a program first.");
      return; // Exit if no program is selected
    }

    // Show the confirmation popup
    setIsPopupVisible(true);

    // Stop the timer when session is finished
  };

  const saveSessionLogAndReturnHome = ()=>{
    let sessionRecordToSave = {
      id: sessionLogs.length+1,
      programId: selectedProgram.id,
      date: Date('2024-11-29'),
      durationMinutes: timerRef.current,
      exerciseRecords:[],
    }
    let amountOfNewLogsAdded = 1;
    exerciseToLogData.forEach((recordArray, exerciseId) => {
      const setsToAdd=[];
      let newExerciseLog = exerciseLogs.find((exerciseLog) => exerciseLog.exerciseId == exerciseId)
      if(newExerciseLog===undefined){
        newExerciseLog={
          id:exerciseLogs.length+amountOfNewLogsAdded,
          exerciseId: exerciseId,
          reps:0,
          sets:0,
          weight:0,
        }
        amountOfNewLogsAdded +=1;
      }
      if(newExerciseLog.sets<recordArray.length){
        newExerciseLog.sets = recordArray.length
      }
      for(let i =0;i<recordArray.length;i++){
        setsToAdd.push({reps:recordArray[i].reps,weight:recordArray[i].weight});
        if(recordArray[i].reps>newExerciseLog.reps){
          newExerciseLog.reps = recordArray[i].reps;
        }
        if(recordArray[i].weight>newExerciseLog.weight){
          newExerciseLog.weight = recordArray[i].weight;
        }
      }
      sessionRecordToSave.exerciseRecords.push({id:exerciseId, sets:setsToAdd});
      updateExerciseLog(newExerciseLog);
    });
    addSessionLog(sessionRecordToSave);
    navigate("/home")
  }

  const deleteSetData = (indexToDelete, exerciseToDelete)=>{
    const newExerciseToLogMap = new Map(exerciseToLogData);
      const newRecords = newExerciseToLogMap.get(exerciseToDelete) || [];
    if(newRecords.length>=indexToDelete){
      newRecords.splice(indexToDelete,1);
      }
      newExerciseToLogMap.set(exerciseToDelete, newRecords);
    setExerciseToLogData(newExerciseToLogMap);
  }

  const handleBackToHome = () => {
    setIsPopupVisible(false);
    navigate('/home');
  };

  const swapCurrentExercise = (exerciseId)=>{
    setCurrentExercise(exercises.find(exercise=>exercise.id===exerciseId)); // Reset to the first exercise
  }

  const saveSet = ()=>{
    const newExerciseToLogMap = new Map(exerciseToLogData);
      const newRecords = newExerciseToLogMap.get(currentExercise.id) || [];
      const updatedSetData = { ...currentSetData };
  
    if(newRecords.length>=currentSetData.number){
      newRecords[currentSetData.number-1] = {weight: currentSetData.weight, reps: currentSetData.reps}
      updatedSetData.number = newRecords.length+1;
    }else{
      newRecords.push({weight: currentSetData.weight, reps: currentSetData.reps})
      updatedSetData.number = updatedSetData.number+1;
      }
      newExerciseToLogMap.set(currentExercise.id, newRecords);
    setExerciseToLogData(newExerciseToLogMap);
      updatedSetData.weight = 0;
      updatedSetData.reps = 0;
    setCurrentSetData(updatedSetData)
  }

  // Filter the programs based on the search term
  // const filteredPrograms = programs.filter((program) =>
  //   program.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // Get current exercise details based on the selected program and current exercise index

  // Format the timer in mm:ss format


  return (
    <div className="session-page w-full h-full relative">
        <NavBar FirstButton={HomeButton} SecondButton={ProfileButton} PageTitle={programs.find(program=>program.id===programToStart).name} />
      <div className="overflow-auto scrollbar-none" >

      <div className="flex justify-center items-center w-full px-12 py-4">
  <div className="flex items-center justify-center"> {/* Timer is wrapped in a div to control alignment better */}
      <Timer timerRef={timerRef}/> {/* Timer Component */}
    </div>

    <button 
      className="session-time-button bg-gray-300 p-2 text-sm flex items-center justify-center h-full"
      onClick={handleFinishSession}
    >
      Finish
    </button>
  </div>



        <div className="flex flex-col w-full px-8 gap-2 flex-grow">
          {/* Weight and Reps Section */}
          <div className="controls flex items-center justify-center gap-4 w-full mb-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-2 justify-center">
              <label className="text-base w-20 text-center">Weight:</label>
              <input
                type="number"
                className="weight-input w-16 text-center border p-1"
                value={currentSetData.weight || ''}
                onChange={(e) => handleInputChange('weight', e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 justify-center">
              <label className="text-base w-20 text-center">Reps:</label>
              <input
                type="number"
                className="reps-input w-16 text-center border p-1"
                value={currentSetData.reps || ''}
                onChange={(e) => handleInputChange('reps', e.target.value)}
              />
            </div>
          </div>
          <button className='text-sm flex w-12 h-12 bg-gray-300 items-center' onClick={saveSet}>Save Set</button>
        </div>


          {/* Current Exercise Box */}
          <div className="exercise-description-box bg-gray-200 p-2 rounded-md">
            <div className='flex justify-center items-center gap-4'>
              {
                selectedProgram?.exercises?.[0] && currentExercise.id !== selectedProgram.exercises[0] && (
                  <button className="flex w-6 h-6 bg-gray-300" onClick={prevExercise}>
                    <BackIcon />
                  </button>
                )
              }
              <h3 className="flex items-center justify-center text-lg font-bold mb-1">{currentExercise&& currentExercise.name}</h3>
              <h4 className='flex justify-center items-center font-bold  mb-1'>Set: {currentSetData&&currentSetData.number}</h4>
                {selectedProgram?.exercises?.[0] && currentExercise.id !== selectedProgram.exercises[selectedProgram.exercises.length-1] && 
                (<button className='flex w-6 h-6 bg-gray-300' onClick={nextExercise}>
                  <NextIcon/>
                </button>)
              }
            </div>
            {currentExercise ? (
              <>
                <div className="video-placeholder bg-white w-full h-40 relative">
                  <video
                    src="https://www.youtube.com/embed/IODxDxX7oi4"
                    type="video/mp4"
                    controls
                    className="w-full h-full object-cover rounded-md"
                  >
                    Your browser do not support video tag
                 </video>
                </div>
                <p className="text-lg">{currentExercise.description}</p>
              </>
            ) : (
              <p className="text-sm">Select a program to begin.</p>
            )}
          </div>
        </div>

        {/* Finish Session Confirmation Popup */}
        {isPopupVisible && (
        <div className="absolute inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
          <div className="p-2 rounded-lg shadow-lg relative w-[100%]">
            <Popup
              onClick={(e) => { setIsPopupVisible(false); e.stopPropagation(); }} 
              Content={ConfirmationPopup}
              contentProps={{
                message: exerciseToLogData.size==0? 
                "No exercises recorded. Are you sure you would like to return to the main menu?":
                "Would you like to complete this workout?"
                ,
                onConfirm: exerciseToLogData.size==0? ()=>{navigate("/home")}:saveSessionLogAndReturnHome,
              }}
              isCentered={true}  // Ensures it's centered
            />
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
                    <DropDown
                      key={index}
                      isActive={useMemo(() => exerciseToLogData.get(exercise.id)?.length > 0, [exerciseToLogData, exercise.id])}
                      InitialComponent={SessionExerciseHeader}
                      InitialProps={{
                        exerciseName: exercise.name,
                        onClick: (e) => {
                          e.stopPropagation();
                          setSlidingDrawerOpen(false);
                          swapCurrentExercise(exerciseId);
                          resetSetData(exerciseId)
                        },
                      }}
                      HiddenComponents={SessionSetLog}
                      HiddenProps={{
                        exerciseRecords: exerciseToLogData.get(exercise.id),
                        onEdit: (e, setData)=>{
                          console.log("setting new set!");
                          e.stopPropagation();
                          swapCurrentExercise(exercise.id);
                          setSlidingDrawerOpen(false);
                          setCurrentSetData(setData);
                        },
                        onDelete: (e, indexToRemove)=>{
                          e.stopPropagation();
                          deleteSetData(indexToRemove, exercise.id)
                          setSlidingDrawerOpen(false);
                        }
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