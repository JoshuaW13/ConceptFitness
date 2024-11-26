import React, { useState } from 'react';
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



function Programs() {
  const { exercises } = useExerciseCatalogueContext();
  const { programs, removeExerciseFromProgram } = useProgramContext();

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

  return (
    <div className="w-full h-full flex flex-col items-center gap-2">
      <NavBar FirstButton={HomeButton} SecondButton={ProfileButton}></NavBar>
      <SearchBar />
      <div className="h-[80%] w-[85%] flex flex-col gap-2 p-2 rounded-lg overflow-y-auto m-2 scrollbar-hidden">
        {programs.map((program) => {
          return (
            <DropDown
              key={program.id}
              InitialComponent={ProgramLog}
              HiddenComponents={program.exercises.map((exerciseId, index) => {
                return constructExercise(exerciseId, index, program.id);
              })}
              InitialProps={{
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
