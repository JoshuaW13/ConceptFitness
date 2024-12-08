import React, { useState } from 'react';
import '../App.css';
import StartIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import Popup from './Popup';
import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit"
import { useNavigate } from 'react-router-dom';
import { useProgramContext } from "../contexts/ProgramsContext"; 
import ConfirmationPopup from './ConfirmationPopup';
import Tag from './Tag';

function ProgramLog({ id, onClick, name, tags, numExercises }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const { removeProgram } = useProgramContext();

  const navigate = useNavigate();
  const navigateSession = () => {
    navigate("/session",{state:{programToStart:id}});
  };

  const navigateCatalogue = () =>{
    navigate("/catalogue", { state: { programToEditId: id } }); 
  }

  const handleProgramDelete = ()=>{
    setIsPopupVisible(true);
  }

  const deleteProgram = ()=>{
    removeProgram(id)
  }

  return (
    <div className='text-black w-full rounded-t-lg font-semibold'>
      <div className='flex rounded-t-lg w-full h-full p-1 items-center'>
        <div className='flex flex-col w-full'>
          <p className='text-xl w-[92%] mb-2' onClick={onClick}>{name}</p>

          {/*ChatGPT used to help debug tag rendering method */}
          <div className='flex-wrap h-[5%] flex gap-1'>
            {tags && tags.length > 0 ? (
              tags.map((tag, index) => (
                <Tag key={index} text={tag} />
              ))
            ) : (
              <p></p>
            )}
          </div>


          <p className='text-lg mt-2' onClick={onClick}># of Exercises: {numExercises}</p>
        </div>
          <div className='flex flex-col justify-between w-auto gap-1 relative'>
            <button className='flex w-6 h-6 border-black bg-blue-400 text-white' onClick={navigateSession}>
              <StartIcon/>
            </button>
            <button className='flex w-6 h-6 border-black bg-yellow-400 text-white' onClick={navigateCatalogue}>
              <EditIcon/>
            </button>
            <button className='flex w-6 h-6 border-black bg-black text-white' onClick={(e)=>{e.stopPropagation();handleProgramDelete()}}>
              <DeleteIcon/>
            </button>
            {isPopupVisible && (
            <Popup className="relative" 
            onClick={(e) => { setIsPopupVisible(false); e.stopPropagation(); }} 
            Content={ConfirmationPopup}
            contentProps={{
              message: "Are you sure you want to delete this program?",
              onConfirm: deleteProgram,
            }}
            />
          )}
          </div>

      </div>
    </div>
  );
}

export default ProgramLog;
