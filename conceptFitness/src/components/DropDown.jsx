import React, { useState } from 'react';
import '../App.css';

function DropDown({ InitialComponent: InitialComponentProp, HiddenComponents }) {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const handleInitialClick = () => {
        setIsContentVisible(!isContentVisible);
    };

    const InitialComponent = () => (
        <InitialComponentProp onClick={handleInitialClick} />
    );

    const hiddenComponentsArray = Array.isArray(HiddenComponents) ? HiddenComponents : [HiddenComponents];

    return (
        <div className="w-full flex flex-col items-center">
            {/* Initial Component with margin between dropdown items */}
                <InitialComponent />
            {/* Hidden content with smooth transition */}
            {isContentVisible && (
                <div
                    className={`flex flex-col gap-4 bg-white w-full p-4 rounded-b-lg shadow-md transition-all duration-300 ease-in-out transform ${hiddenComponentsArray.length === 1 ? 'overflow-clip' : 'overflow-y-auto'}`}
                    style={{
                        opacity: isContentVisible ? 1 : 0,
                        transform: isContentVisible ? 'translateY(0)' : 'translateY(-10px)',  // Smooth fade-in and translate effect
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
