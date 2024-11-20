import React, { useState } from 'react';
import '../App.css';
import DropDownArrow from "@mui/icons-material/ArrowDropDown";

function DropDown({ InitialComponent: InitialComponentProp, HiddenComponents }) {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const handleInitialClick = () => {
        setIsContentVisible(!isContentVisible);
    };

    const InitialComponent = InitialComponentProp;

    const hiddenComponentsArray = Array.isArray(HiddenComponents) ? HiddenComponents : [HiddenComponents];

    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex bg-gray-200 w-full rounded-t-lg shadow-md" onClick={handleInitialClick}>
                {/* Render InitialComponent */}
                <DropDownArrow
                    className=" cursor-pointer"
                    sx={{
                        transition: 'transform 0.3s ease',
                        transform: isContentVisible ? 'rotate(-90deg)' : 'rotate(0deg)', // Rotate when content is visible
                    }}
                />
                <InitialComponent />
                
                {/* Position the DropDownArrow absolutely to overlap */}
                
            </div>

            {isContentVisible && (
                <div
                    className={`flex flex-col gap-4 bg-white w-full p-2 rounded-b-lg shadow-md transition-all duration-300 ease-in-out transform ${hiddenComponentsArray.length === 1 ? 'overflow-clip' : 'overflow-y-auto'}`}
                    style={{
                        opacity: isContentVisible ? 1 : 0,
                        transform: isContentVisible ? 'translateY(0)' : 'translateY(-10px)',
                    }}
                >
                    {hiddenComponentsArray.map((Component, index) => (
                        <Component key={index} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default DropDown;
