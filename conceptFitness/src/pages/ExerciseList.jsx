import React, { useEffect, useState, useRef } from 'react';
import '../App.css';
import DropDown from '../components/DropDown';
import ExerciseInfoHeader from '../components/ExerciseInfoHeader';
import ExerciseInfo from '../components/ExerciseInfo';
import NavBar from '../components/NavBar';
import HomeButton from '../components/HomeButton'
import ProfileButton from '../components/ProfileButton'
import SlidingDrawer from '../components/SlidingDrawer';
import CatalogueDrawerContent from '../components/CatalogueDrawerContent';
import SearchBar from '../components/SearchBar';
import { useProgramContext } from "../contexts/ProgramsContext";
import { useExerciseCatalogueContext } from '../contexts/ExerciseCatalogueContext';
import { useLocation } from 'react-router-dom';

function ExerciseLists({route}) {
  const location = useLocation(); // Access the location object
  const { programToEditId } = location.state || {}; // Retrieve the programToEditId from the state
  console.log("The program we are editing is ", programToEditId);
  const { exercises } = useExerciseCatalogueContext();
  const [searchText, setSearchText] = useState("");
  const [searchState, setSearchState] = useState(true);
  const [programName, setProgramName] = useState("");
  const programNameRef = useRef(programName);
  const [plannedExercises, setPlannedExercises] = useState([])
  const plannedExercisesRef = useRef(plannedExercises);
  const [tags, setTags] = useState([]);
  const tagsRef = useRef(tags);
  const { programs, addProgram } = useProgramContext();

  const planExercise = (e, key) => {
    e.stopPropagation();
    const exerciseToAdd = exercises.find((exercise) => exercise.id === key);
    if (plannedExercises.some((exercise) => exercise.id === exerciseToAdd.id)) {
      return;
    }

    setPlannedExercises((prevExercises) => [
      ...prevExercises,
      { ...exerciseToAdd },  // Add unique key to the exercise object
    ]);
  };

  const filteredList = []
  const [filteredExercises, setFilteredExercises] = useState([])

  const filterSearch = () => {
    if (searchText === "") {
      setFilteredExercises(exercises);
      setSearchState(true);
    } else if (!searchState && searchText != null) {
      exercises.forEach((exercise) => {
        if (exercise.name.toLowerCase().replace(/\s/g, '').replace(/-|,/g, "").includes(searchText.toLowerCase().replace(/\s/g, '').replace(/-/g, "")) ||
          exercise.equipment.toLowerCase().replace(/\s/g, '').replace(/-/g, "").includes(searchText.toLowerCase().replace(/\s/g, '').replace(/-/g, "")) ||
          exercise.targetMuscle.toLowerCase().replace(/\s/g, '').replace(/-/g, "").includes(searchText.toLowerCase().replace(/\s/g, '').replace(/-/g, ""))) {
          filteredList.push(exercise)
        }
      })
      setFilteredExercises(filteredList);
      setSearchState(true);
    }
  }

  useEffect(() => {
    filterSearch();
  }, [searchState]);

  useEffect(() => {
    plannedExercisesRef.current = plannedExercises;
    tagsRef.current = tags;
    programNameRef.current = programName
  }, [plannedExercises, tags, programName]); 

  useEffect(() => {
    return () => {
      const plannedExercisesToSave = plannedExercisesRef.current
      const tagsToSave = tagsRef.current
      const nameToSave = programNameRef.current
      saveProgram(plannedExercisesToSave, tagsToSave, nameToSave); 
    };
  }, []);

  const saveProgram = (currentPlannedExercises, currentTags, name) => {
    if (currentPlannedExercises.length === 0) {
      return;
    }
    const exercisesToAdd = currentPlannedExercises.map((plannedExercise) => {
      return plannedExercise.id;
    })
    let programToAdd = {
      id: programs.length + 1,
      name: name,
      tags: currentTags,
      exercises: exercisesToAdd,
    }
    addProgram(programToAdd);
  }

  return (
    <div className="w-full h-full flex flex-col items-center relative gap-2">
      <NavBar FirstButton={HomeButton} SecondButton={ProfileButton}></NavBar>
      <SearchBar searchSetter={setSearchText} searchState={searchState} searchStateSetter={setSearchState} InitialText={"Pull-Up, Tricep, Barbell, etc..."} />
      <div className='h-[80%] w-[85%] flex flex-col bg-gray-200 gap-2 p-2 rounded-lg overflow-y-auto m-2 scrollbar-hidden'>
        {filteredExercises.map((exercise) => (
          <DropDown
            key={exercise.id}
            InitialComponent={ExerciseInfoHeader}
            HiddenComponents={ExerciseInfo}
            InitialProps={{
              exerciseName: exercise.name,
              exerciseEquipment: exercise.equipment,
              targetMuscle: exercise.targetMuscle,
              handleClick: (e) => planExercise(e, exercise.id), // Pass the exercise.id as an argument
            }}
            HiddenProps={{
              description: exercise.description
            }}
          />))}
      </div>
      <SlidingDrawer
        Content={CatalogueDrawerContent}
        contentProps={{
          plannedExercises: plannedExercises,
          setPlannedExercises: setPlannedExercises,
          tags: tags,
          setTags: setTags,
          programName: programName,
          setProgramName: setProgramName
        }}
      ></SlidingDrawer>
    </div>
  );
}

export default ExerciseLists;
