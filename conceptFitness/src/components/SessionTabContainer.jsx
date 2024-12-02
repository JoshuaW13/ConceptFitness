import React, { useState } from 'react';
import LogIcon from "@mui/icons-material/EditNote"
import ProgramIcon from "@mui/icons-material/FitnessCenter"

function TabbedContainer({ FirstTab, SecondTab }) {
  const [activeTab, setActiveTab] = useState('first'); // To track the active tab

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full h-full bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md relative pt-8 overflow-y-auto"> {/* Main container with folder look */}
      <div className="flex ">
        <div
          className={`cursor-pointer py-2 px-4 border-t-2 border-l-2 border-r-2 rounded-tl-lg rounded-tr-lg transition-all ease-in-out ${
            activeTab === 'first' ? 'bg-[#E85A4F] text-white shadow-lg' : 'bg-white text-gray-700'
          }`}
          onClick={() => handleTabSwitch('first')}
        >
          <ProgramIcon/>
        </div>
        <div
          className={`cursor-pointer py-2 px-4 border-t-2 border-l-2 border-r-2 rounded-tl-lg rounded-tr-lg transition-all ease-in-out ${
            activeTab === 'second' ? 'bg-[#E85A4F] text-white shadow-lg' : 'bg-white text-gray-700'
          }`}
          onClick={() => handleTabSwitch('second')}
        >
          <LogIcon/>
        </div>
      </div>

      <div className="pt-6 px-4 pb-4 bg-white rounded-b-lg border-t-2 border-gray-300">
        {/* Render the active tab's content */}
        {activeTab === 'first' && <FirstTab />}
        {activeTab === 'second' && <SecondTab />}
      </div>
    </div>
  );
}

export default TabbedContainer;
