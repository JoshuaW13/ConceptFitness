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
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useProgramContext } from "../contexts/ProgramsContext";
import { useExerciseCatalogueContext } from '../contexts/ExerciseCatalogueContext';
import { useNotifContext } from "../contexts/NotifContext.jsx";
import { useLocation } from 'react-router-dom';

function ExerciseLists() {
  const { showNotif } = useNotifContext();
  const location = useLocation(); // Access the location object
  const { programToEditId } = location.state || {}; // Retrieve the programToEditId from the state
  const { exercises } = useExerciseCatalogueContext();
  const [searchText, setSearchText] = useState("");
  const [searchState, setSearchState] = useState(true);
  const [programName, setProgramName] = useState("");
  const programNameRef = useRef(programName);
  const [plannedExercises, setPlannedExercises] = useState([])
  const plannedExercisesRef = useRef(plannedExercises);
  const [numExercises, setNumExercises] = useState(0)
  const [tags, setTags] = useState([]);
  const tagsRef = useRef(tags);
  const { programs, addProgram } = useProgramContext();
  const [flyer, setFlyer] = useState(null);
  const [target, setTarget] = useState(null);



  const prepareProgramToEdit = () =>{
    if(programToEditId===undefined){
      return;
    }
    const programToEdit = programs.find((program)=>program.id===programToEditId);
    setProgramName(programToEdit.name)
    for(let i=0;i<programToEdit.exercises.length;i++){
      planExercise(programToEdit.exercises[i]);
    }
    for(let i=0;i<programToEdit.tags.length;i++){
      addTag(programToEdit.tags[i]);
    }
  }

  const addTag = (tagToAdd)=>{
    if(!tagToAdd) return;
    setTags((prevTags)=>{
      if (prevTags.some((tag) => tag == tagToAdd)) {
        return prevTags;
      }
      return [...prevTags, tagToAdd];
    })
  }

  const planExercise = (key, e) => {
    const exerciseToAdd = exercises.find((exercise) => exercise.id === key);
    if (!exerciseToAdd) return;  // Ensure the exercise exists
  
    // Directly check for duplicates before updating state
    setPlannedExercises((prevExercises) => {
      // Avoid adding if the exercise is already in the planned exercises list
      if (prevExercises.some((exercise) => exercise.id === exerciseToAdd.id)) {
        showNotif("Exercise Already In Program")
        return prevExercises;
      }
      if(e != undefined)
        handleFlyer(e)
      return [...prevExercises, exerciseToAdd];
    });
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
    console.log("Triggered")
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

  useEffect(()=>{
    console.log("Adding exercises!");
    prepareProgramToEdit();
  }, [programToEditId])

  const saveProgram = (currentPlannedExercises, currentTags, name) => {
    if (currentPlannedExercises.length === 0) {
      return;
    }
    const exercisesToAdd = currentPlannedExercises.map((plannedExercise) => {
      return plannedExercise.id;
    })
    const idToAdd = programToEditId?programToEditId: programs.length + 1
    let programToAdd = {
      id: idToAdd,
      name: name===""?"My Program #"+idToAdd: name,
      tags: currentTags,
      exercises: exercisesToAdd,
    }
    addProgram(programToAdd);
  }

  const handleFlyer = (e) => {
    const button = e.target.getBoundingClientRect();

    setFlyer({
      x: button.x,
      y: button.y,
    });

    requestAnimationFrame(() => {
      endFlyer()
    });
  };

  const endFlyer = () => {
    setFlyer({
      x: target.x,
      y: target.y,
    });

    setTimeout(() => {
      setFlyer(null); 
    }, 600); 
  }

  return (
    <div ref={screen} className="w-full h-full flex flex-col items-center relative gap-2 overflow-y-hidden overflow-x-hidden">
      <NavBar FirstButton={HomeButton} SecondButton={ProfileButton} PageTitle={"Exercise Catalogue"}></NavBar>
      <SearchBar searchSetter={setSearchText} searchState={searchState} searchStateSetter={setSearchState} InitialText={"Pull-Up, Tricep, Barbell, etc..."} />
      <div className='h-[80%] w-[85%] flex flex-col bg-gray-200 gap-2 p-2 rounded-lg overflow-y-auto m-2'>
        {filteredExercises.map((exercise) => (
          <DropDown
            key={exercise.id}
            InitialComponent={ExerciseInfoHeader}
            HiddenComponents={ExerciseInfo}
            InitialProps={{
              exerciseName: exercise.name,
              exerciseEquipment: exercise.equipment,
              targetMuscle: exercise.targetMuscle,
              handleClick: (e) => {
                e.stopPropagation()
                planExercise(exercise.id, e)
              }, // Pass the exercise.id as an argument
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
          setProgramName: setProgramName,
          numExercises: numExercises,
          setNumExercises: setNumExercises,
          setSearchText: setSearchText,
          setSearchState: setSearchState,
        }}
        numExercises={numExercises} 
        setTarget={setTarget}
      ></SlidingDrawer>
      {flyer && (
        <div
          key={"hello"}
          className="fixed"
          style={{
            top: flyer.y - 2,
            left: flyer.x + 2,
            zIndex: 999,
            transform: `0.7s ease`,
            transition: `top 0.7s ease, left 0.7s ease`
          }}
        >
          <FitnessCenterIcon fontSize='small' className='text-black'></FitnessCenterIcon>
        </div>
      )}
    </div>
  );
}

export default ExerciseLists;
