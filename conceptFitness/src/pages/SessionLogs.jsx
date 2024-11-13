import React, { useState } from 'react';
import '../App.css';
import ExerciseLog from '../components/ExerciseLog';
import SessionLog from '../components/SessionLog';
import DropDown from '../components/DropDown';
import LogNavbar from '../components/LogNavBar';
import SearchBar from '../components/SearchBar';
import DateInput from '../components/DateInput';

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
            <LogNavbar></LogNavbar>
            <SearchBar></SearchBar>
            <DateInput></DateInput>
            <div className='h-[75%] w-[75%] bg-gray-100 flex flex-col gap-2 overflow-y-auto m-3 scrollbar-hidden'>
                {sessionLogs}
            </div>
        </div>
    );
}

export default SessionLogs;
