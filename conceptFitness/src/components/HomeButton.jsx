import React from 'react';
import '../App.css';
import HomeIcon from "@mui/icons-material/Home"
import { useNavigate } from 'react-router-dom';

function HomeButton() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/home");
  }
  
  return (
    <button 
      className="text-black px-4 py-2 border-[#D8C3A5] border-4 rounded ml-4 focus:outline-none relative"
      style={{ backgroundColor: '#EAE7DC', }}
      onClick={handleClick}
    >
      <HomeIcon style={{
              color: '#E85A4F',
      }}/>
    </button>
  );
}

export default HomeButton;
