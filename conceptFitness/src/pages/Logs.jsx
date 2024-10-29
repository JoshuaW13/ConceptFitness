import React, { useState } from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import HomeButton from '../components/HomeButton';
import ExerciseLog from '../components/ExerciseLog';
import SessionLog from '../components/SessionLog';
import DropDown from '../components/DropDown';

function Logs() {
    const sessionLogs = [];
    const exerciseLogs = [];

    // Create instances of ExerciseLog components
    for (let i = 0; i < 10; i++) {
        exerciseLogs.push(() => <ExerciseLog key={i} />); // Store component constructors
    }

    // Create DropDowns for each SessionLog
    for (let i = 0; i < 5; i++) {
        sessionLogs.push(
            <DropDown
                key={i}
                InitialComponent={SessionLog}
                HiddenComponents={exerciseLogs} // Use HiddenComponents as an array of component constructors
            />
        );
    }

    return (
        <div className='w-full h-full flex flex-col items-center'>
            <NavBar FirstButton={HomeButton} />
            <div className='bg-black w-[75%] rounded-lg'>
                <input type="text" placeholder='Search...' className='text-black bg-gray-300 w-full' />
            </div>
            <form>
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" />
            </form>
            <div className='h-[75%] w-[75%] bg-gray-200 flex flex-col gap-2 p-2 overflow-y-auto'>
                {sessionLogs}
            </div>
        </div>
    );
}

export default Logs;
