import React, { useState } from 'react';

function CatalogueDrawerForSessionPage({ programs, setSelectedProgram }) {
  const [searchTerm, setSearchTerm] = useState(''); // To handle the search input
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Filter programs based on search input
  const filteredPrograms = programs.filter((program) =>
    program.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProgramSelect = (program) => {
    setSelectedProgram(program); // Update the selected program in the parent component
    setSearchTerm(program.name); // Set the search input to the selected program's name
    setIsDropdownVisible(false); // Hide the dropdown
  };

  return (
    <div className="catalogue-drawer-for-session-page w-full bg-gray-100 p-4 rounded-md">
      <h3 className="text-lg font-bold mb-4">Select a Program</h3>

      <div className="relative">
        <input
          type="text"
          className="w-full border rounded p-2"
          placeholder="Search programs..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsDropdownVisible(true); // Show dropdown when typing
          }}
        />

        {/*ChatGPT used to generate the checks for visibility */}
        {/* Dropdown for filtered programs */}
        {isDropdownVisible && searchTerm && (
          <div className="absolute top-full left-0 w-full bg-white border rounded shadow-md max-h-40 overflow-y-auto z-10">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program, index) => (
                <div
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleProgramSelect(program)}
                >
                  {program.name}
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-500">No programs found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CatalogueDrawerForSessionPage;
