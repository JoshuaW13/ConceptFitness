import React, { useEffect, useState } from 'react';
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
import { useExerciseCatalogueContext } from '../contexts/ExerciseCatalogueContext';

function ExerciseLists() {
  const { exercises } = useExerciseCatalogueContext();
  const [searchText, setSearchText] = useState("");
  const [searchState, setSearchState] = useState(true);
  const [plannedExercises, setPlannedExercises] = useState([])
  const filteredList = []
  const [filteredExercises, setFilteredExercises] = useState([])

  const filterSearch = () => {
    if(!searchState) {
      console.log("Running")
      exercises.forEach((exercise) => {        
        if(exercise.name.toLowerCase().includes(searchText.toLowerCase()) || exercise.equipment.toLowerCase().includes(searchText.toLowerCase()) || exercise.targetMuscle.toLowerCase().includes(searchText.toLowerCase())) {
          filteredList.push(exercise)
      }}) 
      setFilteredExercises(filteredList)
      setSearchState(true)
      console.log(filteredList)
    }
  }

  useEffect(() => {
    filterSearch()
  }, [searchState])

  return (
    <div className="w-full h-full flex flex-col items-center relative gap-2">
      {/* Pass component functions, not JSX */}
      <NavBar FirstButton={HomeButton} SecondButton={ProfileButton}></NavBar>
      <SearchBar searchSetter={setSearchText} searchState={searchState} searchStateSetter={setSearchState}/>
      <div className='h-[80%] w-[85%] flex flex-col bg-gray-200 gap-2 p-2 rounded-lg overflow-y-auto m-2 scrollbar-hidden'>
        {filteredExercises.map((exercise) => (
        <DropDown
          key={exercise.id} // Use exercise.id directly as the key
          InitialComponent={ExerciseInfoHeader}
          HiddenComponents={ExerciseInfo}
          InitialProps={{exerciseName: exercise.name, exerciseEquipment: exercise.equipment, targetMuscle: exercise.targetMuscle}}
        />))}
      </div>
      <SlidingDrawer 
      Content={CatalogueDrawerContent}
      contentProps={{plannedExercises: plannedExercises}}
      ></SlidingDrawer>
    </div>
  );
}

export default ExerciseLists;

