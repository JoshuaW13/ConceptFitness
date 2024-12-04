import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
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

  const handleClick = () => {
    if (!isActive) {
      return;
    }

    // Toggle visibility using ref (no re-render)
    contentVisibleRef.current = !contentVisibleRef.current;

    // Handle button press state
    setIsPressed(true);

    // Reset button pressed state after 100ms
    setTimeout(() => {
      setIsPressed(false);
    }, 100);
  };

  useEffect(()=>{
    console.log("Is active is geting change to "+isActive)
  },[isActive])

  // Extract the InitialComponent and the HiddenComponents
  const InitialComponent = InitialComponentProp;
  const hiddenComponentsArray = Array.isArray(HiddenComponents) ? HiddenComponents : [HiddenComponents];

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="flex text-black w-full rounded-t-lg shadow-md"
        style={{
          backgroundColor: isPressed ? 'rgb(209 213 219)' : 'rgb(223 226 235)',
          transition: 'background-color 0.3s ease'
        }}
        onClick={handleClick}
      >
        {/* Render DropDown Arrow and InitialComponent */}
        {isActive && <DropDownArrow
          className="cursor-pointer"
          sx={{
            transition: 'transform 0.3s ease',
            transform: contentVisibleRef.current ? 'rotate(-90deg)' : 'rotate(0deg)',
          }}
        />}
        {React.createElement(InitialComponent, InitialProps)}
      </div>

      {/* Only render hidden content when visible */}
      {contentVisibleRef.current && (
        <div
          className={`flex flex-col gap-4 bg-white w-full p-2 rounded-b-lg shadow-md transition-all duration-300 ease-in-out transform ${hiddenComponentsArray.length === 1 ? 'overflow-clip' : 'overflow-y-auto'}`}
          style={{
            opacity: contentVisibleRef.current ? 1 : 0,
            transform: contentVisibleRef.current ? 'translateY(0)' : 'translateY(-10px)',
          }}
        >
          {hiddenComponentsArray.map((Component, index) => (
            React.createElement(Component, { ...HiddenProps, key: index })
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
