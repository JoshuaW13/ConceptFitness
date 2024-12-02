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
          id: index,
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

  const addNewProgram = ()=>{
    navigate("/catalogue")
  }

  return (
    <div className="w-full h-full flex flex-col items-center gap-2">
      <NavBar FirstButton={HomeButton} SecondButton={ProfileButton}></NavBar>
      <div className='flex gap-1 justify-center'>
        <SearchBar searchSetter={setSearchText} searchState={searchState} searchStateSetter={setSearchState} InitialText={"Pull-Up, Tricep, Barbell, etc..."} />
        <button className='w-[10%]' onClick={addNewProgram}>+</button>
      </div>
      <div className="h-[80%] w-[85%] flex flex-col gap-2 p-2 rounded-lg overflow-y-auto m-2 scrollbar-hidden">
        {filteredPrograms.map((program) => {
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
