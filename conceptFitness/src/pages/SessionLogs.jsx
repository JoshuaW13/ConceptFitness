import React, { useState } from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import HomeButton from '../components/HomeButton';
import ExerciseLog from '../components/ExerciseLog';
import SessionLog from '../components/SessionLog';
import DropDown from '../components/DropDown';

function SessionLogs() {
    const sessionLogs = [];
    const exerciseLogs = [];

    for (let i = 0; i < 10; i++) {
        exerciseLogs.push(() => <ExerciseLog key={i} />); 
    }

    for (let i = 0; i < 5; i++) {
        sessionLogs.push(
            <DropDown
                key={i}
                InitialComponent={SessionLog}
                HiddenComponents={exerciseLogs} 
            />
        );
    }

    return (
        <div className='w-full h-full flex flex-col items-center gap-2'>
            <NavBar FirstButton={HomeButton} />
            <div className='bg-black w-[75%] rounded-lg'>
                <input type="text" placeholder='Search...' className='text-black bg-gray-300 w-full' />
            </div>
            <form>
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" />
            </form>
            <div className='h-[75%] w-[75%] bg-gray-200 flex flex-col gap-2 overflow-y-auto m-3 scrollbar-hidden'>
                {sessionLogs}
            </div>
        </div>
    );
}

export default SessionLogs;
