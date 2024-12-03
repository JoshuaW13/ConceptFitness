import React, { useState, useEffect } from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import HomeButton from '../components/HomeButton';
import ExerciseDataHeader from '../components/ExerciseDataHeader';
import DropDown from '../components/DropDown';
import ExerciseData from '../components/ExerciseData';
import LogNavbar from '../components/LogNavBar';
import SearchBar from '../components/SearchBar';
import { useExerciseLogContext } from '../contexts/ExerciseLogContext';
import { useExerciseCatalogueContext } from '../contexts/ExerciseCatalogueContext';

function ExerciseLogs() {
    const {exerciseLogs}=useExerciseLogContext();
    const {exercises}=useExerciseCatalogueContext();
    console.log(exerciseLogs);

    const filteredList = []
    const [searchText, setSearchText] = useState("");
    const [searchState, setSearchState] = useState(true);
    const [filteredExerciseLog, setFilteredExerciseLog] = useState([])
  
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
        <div className='w-full h-full flex flex-col items-center gap-2'>
            <LogNavbar />
            <SearchBar searchSetter={setSearchText} searchState={searchState} searchStateSetter={setSearchState} InitialText={"Pull-Up, Tricep, Barbell, etc..."}></SearchBar>
            <div className='h-[75%] w-[75%] bg-gray-100 flex flex-col gap-4 overflow-y-auto m-3 scrollbar-hidden shadow-md'>
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
    );
}

export default ExerciseLogs;
