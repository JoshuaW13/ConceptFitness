import React, { useState } from 'react';
import '../App.css';
import ExerciseLog from '../components/ExerciseLog';
import SessionLog from '../components/SessionLog';
import DropDown from '../components/DropDown';
import LogNavbar from '../components/LogNavBar';
import SearchBar from '../components/SearchBar';
import DateInput from '../components/DateInput';
import { useSessionLogContext } from '../contexts/SessionLogContext';

function SessionLogs() {
    const {sessionLogs} = useSessionLogContext();

    const constructExerciseLog = (exerciseRecord, index)=>{
        return() =>
            <ExerciseLog key={index} exerciseRecord={exerciseRecord}/>
        
    }

    return (
        <div className='w-full h-full flex flex-col items-center gap-2'>
            <LogNavbar></LogNavbar>
            <SearchBar></SearchBar>
            <DateInput></DateInput>
            <div className='h-[75%] w-[75%] bg-gray-100 flex flex-col gap-2 overflow-y-auto m-3 scrollbar-hidden shadow-md'>
                {sessionLogs.map((sessionLog, index)=>(
                    <DropDown
                        key={index}
                        InitialComponent={SessionLog}
                        InitialProps={{
                            sessionLog: sessionLog
                        }}
                        HiddenComponents={sessionLog.exerciseRecords.map((exerciseRecord, index) => {
                            return constructExerciseLog(exerciseRecord, index);
                        })}
                    />
                ))}
            </div>
        </div>
    );
}

export default SessionLogs;
