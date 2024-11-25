import React from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';


function ProfilePopup() {
  const navigate = useNavigate();

  const profile = () =>{
    navigate("/profile");
  }

  const logOut = ()=>{
    navigate("/")
  }

  return (
    <div className="flex flex-col">
          <button onClick={profile}>Profile</button>
          <button onClick={logOut}>Log Out</button>
    </div>
  )
}

export default ProfilePopup


