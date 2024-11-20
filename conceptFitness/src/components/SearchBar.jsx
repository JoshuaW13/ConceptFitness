import React, { useRef } from 'react';
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  const inputRef = useRef(null);

  const handleIconClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="flex items-center bg-gray-300 rounded-lg w-[75%] p-1">
      <SearchIcon
        className="text-black ml-2 cursor-text"
        onClick={handleIconClick} // Add onClick handler
      />

      <input
        ref={inputRef} // Attach the ref to the input field
        type="text"
        placeholder="Search..."
        className="text-black bg-transparent w-full p-1 pl-3 outline-none"
      />
    </div>
  );
}

export default SearchBar;
