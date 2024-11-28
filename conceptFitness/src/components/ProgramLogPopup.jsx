import React, { useState } from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';
import ConfirmationPopup from './ConfirmationPopup';
import { useProgramContext } from "../contexts/ProgramsContext"; 


function ExerciseLogPopup({programId}) {
  const navigate = useNavigate();
  const [isPopupVisible, setIsPopupVisible]=useState(false);
  const { removeProgram } = useProgramContext();

  const catalogue = () =>{
    navigate("/catalogue", { state: { programToEditId: programId } }); 
  }

  const handleProgramDelete = ()=>{
    setIsPopupVisible(true);
  }

  const deleteProgram = ()=>{
    removeProgram(programId)
  }

  return (
    <div className="flex flex-col">
          <button className="bg-gray-300 text-black pl-2 pr-2" onClick={catalogue}>Edit</button>
          <button className="bg-gray-300 text-black pl-2 pr-2" onClick={(e)=>{e.stopPropagation();handleProgramDelete();}}>Delete</button>
          {isPopupVisible && (
            <Popup className="absolute" 
            onClick={(e) => { setIsPopupVisible(false); e.stopPropagation(); }} 
            Content={ConfirmationPopup}
            contentProps={{
              message: "Are you sure you want to delete this program?",
              onConfirm: deleteProgram,
            }}
            />
          )}
    </div>
  )
}

export default ExerciseLogPopup


