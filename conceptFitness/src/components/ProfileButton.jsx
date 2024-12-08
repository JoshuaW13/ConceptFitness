import { useState } from 'react';
import React from 'react';
import '../App.css';
import Profile from "@mui/icons-material/AccountCircle";
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';
import ProfilePopup from './ProfilePopup';

function ProfileButton() {
  const navigate = useNavigate();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleClick = () => {
    // navigate("/profile");
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className='relative'>
      <button className="text-black px-4 py-2 border-[#D8C3A5] hover:border-[#E85A4F] border-4 rounded mr-4 focus:outline-none relative"
        style={{ backgroundColor: '#EAE7DC' }}
        onClick={handleClick}
      >
      <Profile style={{
              color: 'black',
      }} />
    </button>
    {isPopupVisible && (
        <Popup onClick={() => setIsPopupVisible(false)} Content={ProfilePopup} />
      )}
    </div>
  );
}

export default ProfileButton;
