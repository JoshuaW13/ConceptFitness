import React, { useState, useEffect } from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import HomeButton from '../components/HomeButton';
import ProfileButton from '../components/ProfileButton';
import ExerciseDataHeader from '../components/ExerciseDataHeader';
import DropDown from '../components/DropDown';
import ExerciseData from '../components/ExerciseData';
import SearchBar from '../components/SearchBar';
import { useExerciseLogContext } from '../contexts/ExerciseLogContext';
import { useNavigate } from 'react-router-dom';
import { useExerciseCatalogueContext } from '../contexts/ExerciseCatalogueContext';

function ExerciseLogs() {
    const {exerciseLogs}=useExerciseLogContext();
    const {exercises}=useExerciseCatalogueContext();
    const navigate = useNavigate();


    const filteredList = []
    const [searchText, setSearchText] = useState("");
    const [searchState, setSearchState] = useState(true);
    const [filteredExerciseLog, setFilteredExerciseLog] = useState([])

    const navigateSessions = () => {
        navigate("/sessionLogs")
    };

  
    const filterSearch = () => {
      if (searchText === "") {
        setFilteredExerciseLog(exerciseLogs);
        setSearchState(true);
      } else if (!searchState && searchText != null) {
        exerciseLogs.forEach((exerciseLog) => {
            exercises.forEach((exercise) => {
                if((exercise.name.toLowerCase().includes(searchText.toLowerCase()) || exercise.equipment.toLowerCase().includes(searchText.toLowerCase()))&& exercise.id == exerciseLog.exerciseId) {
                    filteredList.push(exerciseLog)
                } 
            })
        })
        setFilteredExerciseLog(filteredList);
        setSearchState(true);
      }
    }

    useEffect(() => {
        filterSearch();
    }, [searchState]);

    return (
        <div className='w-full h-full flex flex-col items-center scrollbar-hidden'>
            <NavBar FirstButton={HomeButton} SecondButton={ProfileButton} PageTitle={"Logs"}></NavBar>
            <div className="w-full h-full bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md relative pt-4 overflow-y-auto flex flex-col justify-center"> {/* Main container with folder look */}
            <div className="flex px-2">
                <div
                className={`cursor-pointer py-2 px-4 border-t-2 border-l-2 border-r-2 rounded-tl-lg rounded-tr-lg transition-all ease-in-out
                    bg-white text-gray-700 shadow-lg`}
                    onClick={() => navigateSessions()}
                >
                Sessions
                </div>
                <div
                className={`cursor-pointer py-2 px-4 border-t-2 border-l-2 border-r-2 rounded-tl-lg rounded-tr-lg transition-all ease-in-out
                    bg-[#E85A4F] text-white shadow-lg
                }`}
                >
                Exercises
                </div>
            </div>
            <div className="pt-6 px-4 pb-4 bg-white rounded-b-lg border-t-2 border-gray-300 flex-grow flex flex-col items-center scrollbar-hidden">
                <SearchBar searchSetter={setSearchText} searchState={searchState} searchStateSetter={setSearchState} InitialText={"Pull-Up, Tricep, Barbell, etc..."}></SearchBar>
                <div className='w-[75%] bg-gray-100 flex flex-col gap-4 overflow-y-auto m-3 scrollbar-hidden shadow-md'>
                    {filteredExerciseLog.map((exerciseLog,index)=>(
                        <DropDown
                            key={index}
                            InitialComponent={ExerciseDataHeader}
                            InitialProps={{
                                exercise: exercises.find((exercise) => exercise.id == exerciseLog.exerciseId)
                            }}
                            HiddenComponents={ExerciseData}
                            HiddenProps={{
                                exercise: exerciseLog
                            }}
                        />
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
}

export default ExerciseLogs;
