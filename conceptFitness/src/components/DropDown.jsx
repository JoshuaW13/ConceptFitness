import React, { useState, useRef, useEffect } from 'react';
import DropDownArrow from "@mui/icons-material/ArrowDropDown";

function DropDown({
  InitialComponent: InitialComponentProp,
  HiddenComponents,
  InitialProps,
  HiddenProps,
  isActive = true
}) {
  const [isPressed, setIsPressed] = useState(false); // Track button press state
  const contentVisibleRef = useRef(false); // Store visibility state without causing re-renders
  const [isContentVisible, setIsContentVisible] = useState(false); // Local state for visibility

  const handleClick = () => {
    if (!isActive) {
      return;
    }

    // Toggle visibility using ref (no re-render)
    contentVisibleRef.current = !contentVisibleRef.current;
    setIsContentVisible(contentVisibleRef.current);

    // Handle button press state
    setIsPressed(!isPressed);    
  };

  // Extract the InitialComponent and the HiddenComponents
  const InitialComponent = InitialComponentProp;
  const hiddenComponentsArray = Array.isArray(HiddenComponents) ? HiddenComponents : [HiddenComponents];

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="flex text-black w-full rounded-t-lg shadow-md"
        style={{
          backgroundColor: isPressed ? '#E98074' : '#EAE7DC',
          transition: 'background-color 0.3s ease'
        }}
        onClick={handleClick}
      >
        {/* Render DropDown Arrow and InitialComponent */}
        {isActive && <DropDownArrow
          className="cursor-pointer"
          sx={{
            transition: 'transform 0.3s ease',
            transform: isContentVisible ? 'rotate(-90deg)' : 'rotate(0deg)',
          }}
        />}
        {React.createElement(InitialComponent, InitialProps)}
      </div>

      {/* Only render hidden content when visible */}
      {isContentVisible && (
        <div
          className={`flex flex-col gap-4 bg-[#E98074] w-full p-2 rounded-b-lg shadow-md transition-all duration-300 ease-in-out transform ${hiddenComponentsArray.length === 1 ? 'overflow-clip' : 'overflow-y-auto'}`}
          style={{
            opacity: isContentVisible ? 1 : 0,
            transform: isContentVisible ? 'translateY(0)' : 'translateY(-10px)',
          }}
        >
          {hiddenComponentsArray.map((Component, index) => (
            React.createElement(Component, { ...HiddenProps, key: index})
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
