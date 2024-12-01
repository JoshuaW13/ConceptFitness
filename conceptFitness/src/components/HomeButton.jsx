import React from 'react';
import '../App.css';
import viteLogo from "/ConceptFitnessLogo.png";
import { useNavigate } from 'react-router-dom';

function HomeButton() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/home");
  }
  
  return (
    <button 
      className="text-black p-1 h-11 flex items-center justify-center focus:outline-none border-black"
      // style={{ backgroundColor: '#EAE7DC' }}
      onClick={handleClick}
    >
      <img 
        src={viteLogo} 
        alt="Home Logo" 
        className="h-full w-full object-contain"  // Use object-contain to maintain aspect ratio
        style={{ height: '100% !important', width: '100% !important' }}
      />
    </button>
  );
}

export default HomeButton;
