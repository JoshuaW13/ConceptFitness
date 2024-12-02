import React, { useState, useEffect } from 'react';
import '../App.css';
import ExerciseLog from '../components/ExerciseLog';
import SessionLog from '../components/SessionLog';
import DropDown from '../components/DropDown';
import LogNavbar from '../components/LogNavBar';
import SearchBar from '../components/SearchBar';
import DateInput from '../components/DateInput';
import { useSessionLogContext } from '../contexts/SessionLogContext';
import { useProgramContext } from "../contexts/ProgramsContext"; 
import { useExerciseCatalogueContext } from '../contexts/ExerciseCatalogueContext';

function SessionLogs() {
    const {sessionLogs} = useSessionLogContext();
    const { programs } = useProgramContext();
    const { exercises }=useExerciseCatalogueContext();

    const constructExerciseLog = (exerciseRecord, index)=>{
        return() =>
            <ExerciseLog key={index} exerciseRecord={exerciseRecord}/>
    }

    const filteredList = []
    const [searchText, setSearchText] = useState("");
    const [searchState, setSearchState] = useState(true);
    const [filteredSessionLog, setFilteredSessionLog] = useState([])
  
    const filterSearch = () => {
      if (searchText === "") {
        setFilteredSessionLog(sessionLogs);
        setSearchState(true);
      } else if (!searchState && searchText != null) {
        sessionLogs.forEach((sessionLog) => {
            for (let i = 0; i < programs.length; i++) {
                const program = programs[i];
                if ((program.name.includes(searchText) || program.tags.find((item) => item.includes(searchText)) != undefined) && program.id == sessionLog.programId) {
                    filteredList.push(sessionLog);
                    break;
                }
            }
            for (let i = 0; i < exercises.length; i++) {
                const exercise = exercises[i];
                if ((exercise.name.includes(searchText) || exercise.equipment.includes(searchText)) && sessionLog.exerciseRecords.find((item) => item.id == exercise.id) != undefined) {
                    filteredList.push(sessionLog);
                    break;
                }
            }
        })
        setFilteredSessionLog(filteredList);
        setSearchState(true);
      }
    }

    useEffect(() => {
        filterSearch();
    }, [searchState]);

    return (
        <div className='w-full h-full flex flex-col items-center gap-2'>
            <LogNavbar></LogNavbar>
            <SearchBar searchSetter={setSearchText} searchState={searchState} searchStateSetter={setSearchState} InitialText={"Pull-Up, Tricep, Barbell, etc..."}></SearchBar>
            <DateInput></DateInput>
            <div className='h-[75%] w-[75%] bg-gray-100 flex flex-col gap-2 overflow-y-auto m-3 scrollbar-hidden shadow-md'>
                {filteredSessionLog.map((sessionLog, index)=>(
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
