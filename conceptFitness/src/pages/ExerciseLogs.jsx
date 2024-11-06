import React, { useState } from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import HomeButton from '../components/HomeButton';
import ExerciseDataHeader from '../components/ExerciseDataHeader';
import DropDown from '../components/DropDown';
import ExerciseData from '../components/ExerciseData'
import ProfileButton from '../components/ProfileButton';

function ExerciseLogs() {

    const exerciseLogs = [];

    for (let i = 0; i < 5; i++) {
        exerciseLogs.push(
            <DropDown
                key={i}
                InitialComponent={ExerciseDataHeader}
                HiddenComponents={ExerciseData} 
            ></DropDown>
        )
    }

    return (
        <div className='w-full h-full flex flex-col items-center gap-2'>
            <NavBar FirstButton={HomeButton} SecondButton={ProfileButton}/>
            <div className='bg-black w-[75%] rounded-lg'>
                <input type="text" placeholder='Search...' className='text-black bg-gray-300 w-full' />
            </div>
            <div className='h-[75%] w-[75%] bg-gray-300 flex flex-col gap-2 overflow-y-auto m-3 scrollbar-hidden'>
                {exerciseLogs}
            </div>
        </div>
    );
}

export default ExerciseLogs;
