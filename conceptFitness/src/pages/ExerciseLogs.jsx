import React, { useState } from 'react';
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

    // for (let i = 0; i < 5; i++) {
    //     exerciseLogs.push(
    //         <DropDown
    //             key={i}
    //             InitialComponent={ExerciseDataHeader}
    //             HiddenComponents={ExerciseData}
    //         />
    //     );
    // }

    return (
        <div className='w-full h-full flex flex-col items-center gap-2'>
            <LogNavbar />
            <SearchBar></SearchBar>
            <div className='h-[75%] w-[75%] bg-gray-100 flex flex-col gap-4 overflow-y-auto m-3 scrollbar-hidden shadow-md'>
                {exerciseLogs.map((exerciseLog,index)=>(
                    <DropDown
                        key={index}
                        InitialComponent={ExerciseDataHeader}
                        InitialProps={{
                            exercise: exercises.find((exercise) => exercise.id == exerciseLog.exerciseId)
                        }}
                        HiddenComponents={ExerciseData}
                    />
                ))}
            </div>
        </div>
    );
}

export default ExerciseLogs;
