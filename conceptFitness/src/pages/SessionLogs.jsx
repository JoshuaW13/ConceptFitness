import React, { useState, useEffect } from 'react';
import '../App.css';
import ExerciseLog from '../components/ExerciseLog';
import SessionLog from '../components/SessionLog';
import DropDown from '../components/DropDown';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import DateInput from '../components/DateInput';
import { useSessionLogContext } from '../contexts/SessionLogContext';
import { useProgramContext } from "../contexts/ProgramsContext"; 
import { useExerciseCatalogueContext } from '../contexts/ExerciseCatalogueContext';
import { useNavigate } from 'react-router-dom';
import HomeButton from '../components/HomeButton';
import ProfileButton from '../components/ProfileButton';

function SessionLogs() {
  const navigate = useNavigate();

    const {sessionLogs} = useSessionLogContext();
    const { programs } = useProgramContext();
    const { exercises }=useExerciseCatalogueContext();
    const navigateExercises = () => {
        navigate("/exerciseLogs")
    };


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
                if ((program.name.toLowerCase().includes(searchText.toLowerCase()) || program.tags.find((item) => item.toLowerCase().includes(searchText.toLowerCase())) != undefined) && program.id == sessionLog.programId) {
                    filteredList.push(sessionLog);
                    break;
                }
            }
            for (let i = 0; i < exercises.length; i++) {
                const exercise = exercises[i];
                if ((exercise.name.toLowerCase().includes(searchText.toLowerCase()) || exercise.equipment.toLowerCase().includes(searchText.toLowerCase())) && sessionLog.exerciseRecords.find((item) => item.id == exercise.id) != undefined) {
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
        <div className='w-full h-full flex flex-col items-center gap-0'>
            <NavBar FirstButton={HomeButton} SecondButton={ProfileButton} PageTitle={"Logs"}></NavBar>
            <div className="w-full h-full bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md relative pt-4 overflow-y-auto flex flex-col justify-center"> {/* Main container with folder look */}
            <div className="flex px-2 ">
                <div
                className={`cursor-pointer py-2 px-4 border-t-2 border-l-2 border-r-2 rounded-tl-lg rounded-tr-lg transition-all ease-in-out
                    bg-[#E85A4F] text-white shadow-lg`}
                >
                Sessions
                </div>
                <div
                className={`cursor-pointer py-2 px-4 border-t-2 border-l-2 border-r-2 rounded-tl-lg rounded-tr-lg transition-all ease-in-out
                    bg-white text-gray-700 shadow-lg
                }`}
                onClick={() => navigateExercises()}
                >
                Exercises
                </div>
            </div>
            <div className="pt-4 pb-2 px-4 bg-white rounded-b-lg border-t-2 border-gray-300 flex-grow flex flex-col items-center overflow-hidden">

                <SearchBar searchSetter={setSearchText} searchState={searchState} searchStateSetter={setSearchState} InitialText={"Program, Exercise, etc..."}></SearchBar>
                <DateInput></DateInput>
                <div className='w-full bg-gray-100 flex flex-col gap-2 overflow-y-auto m-3 shadow-md overflow-auto'>
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
        </div>
        </div>
    );
}

export default SessionLogs;
