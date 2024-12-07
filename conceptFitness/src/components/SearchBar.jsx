import React, { useRef } from 'react';
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({InitialText, searchSetter, searchState, searchStateSetter}) {
  const inputRef = useRef(null);

  const handleIconClick = () => {
    inputRef.current.focus();
  };

  const handleSearch = () => {
    console.log(searchState)
    if (document.getElementById("exerciseSearch").value != null && searchState) {
      searchSetter(document.getElementById("exerciseSearch").value)
      searchStateSetter(false);
    }
  }

  return (
    <div className="flex items-center bg-white rounded-lg w-[75%] p-1 border border-black">
      <SearchIcon
        className="text-black ml-2 cursor-text"
        onClick={handleIconClick} // Add onClick handler
      />

      <input
        ref={inputRef} // Attach the ref to the input field
        id="exerciseSearch"
        type="text"
        placeholder={InitialText != null ? InitialText : "Search..."}
        // value="test"
        className="text-black bg-transparent w-full p-1 pl-3 outline-none"
        onKeyUp={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
