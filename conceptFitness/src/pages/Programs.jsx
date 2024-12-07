import React, { useState, useEffect } from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import HomeButton from '../components/HomeButton';
import ProfileButton from '../components/ProfileButton';
import ExerciseInfoShortish from '../components/ExerciseInfoShortish';
import ExerciseInfoHeaderShort from '../components/ExerciseInfoHeaderShort';
import ProgramLog from '../components/ProgramLog';
import DropDown from '../components/DropDown';
import SearchBar from '../components/SearchBar';
import { useExerciseCatalogueContext } from '../contexts/ExerciseCatalogueContext';
import { useProgramContext } from "../contexts/ProgramsContext";
import { useNavigate } from 'react-router-dom';

function Programs() {
  const { exercises } = useExerciseCatalogueContext();
  const { programs, removeExerciseFromProgram } = useProgramContext();
  const navigate = useNavigate();

  const constructExercise = (exerciseId, index, programId) => {
    const exercise = exercises.find(exercise=>exercise.id===exerciseId)
    const onRemove = ()=>{
      removeExerciseFromProgram(programId, exerciseId);
    }
    return () =>
      <DropDown
        key={index}
        InitialComponent={ExerciseInfoHeaderShort}
        HiddenComponents={ExerciseInfoShortish}
        InitialProps={{
          id: exercise.id,
          exerciseName: exercise.name,
          exerciseEquipment: exercise.equipment,
          onRemove: onRemove, 
        }}
        HiddenProps={{
          description: exercise.description
        }}
      />;
  };

  const filteredList = []
  const [searchText, setSearchText] = useState("");
  const [searchState, setSearchState] = useState(true);
  const [filteredPrograms, setFilteredPrograms] = useState([])

  const filterSearch = () => {
    if (searchText === "") {
      setFilteredPrograms(programs);
      setSearchState(true);
    } else if (!searchState && searchText != null) {
      programs.forEach((program) => {
        if (program.name.toLowerCase().replace(/\s/g, '').replace(/-|,/g, "").includes(searchText.toLowerCase().replace(/\s/g, '').replace(/-/g, "")) || 
            program.tags.find((item) => item.includes(searchText)) != undefined) {
          filteredList.push(program)
        }
      })
      setFilteredPrograms(filteredList);
      setSearchState(true);
    }
  }

  useEffect(() => {
    filterSearch();
  }, [searchState]);

  useEffect(() => {
    filterSearch();
  }, [programs, searchText]); // Re-run search when `programs` or `searchText` changes  

  const addNewProgram = ()=>{
    navigate("/catalogue")
  }

  return (
    <div className="background gap-2 h-full">
      <NavBar FirstButton={HomeButton} SecondButton={ProfileButton} PageTitle={"Programs"}></NavBar>
      <div className='flex gap-3 justify-end w-[85%] mt-2'>
        <SearchBar searchSetter={setSearchText} searchState={searchState} searchStateSetter={setSearchState} InitialText={"Name, Tags, etc."} />
        <button className='w-[20%] flex bg-green-400 justify-center items-center' onClick={addNewProgram}>+</button>
      </div>
      <div className="h-[80%] w-[85%] flex flex-col gap-2 p-2 rounded-lg shadow-lg border-gray border-2 overflow-y-auto m-2 scrollbar-hidden bg-[#D8C3A5]">
        {programs.map((program) => {
          return (
            <DropDown
              key={program.id}
              InitialComponent={ProgramLog}
              HiddenComponents={program.exercises.map((exerciseId, index) => {
                return constructExercise(exerciseId, index, program.id);
              })}
              InitialProps={{
                id: program.id,
                name: program.name,
                tags: program.tags,
                numExercises: program.exercises.length,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Programs;
